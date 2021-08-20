import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Upload } from "antd";
import Form from "antd/lib/form";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Condition, Transmission, validateMessages } from "../../lib/constant";
import apiService from "../../lib/services/api-service";
import CustomRadio from "./customRadio";
import CustomSelect from "./customSelect";
import ImgCrop from "antd-img-crop";
import { getBase64 } from "../../lib/util/image-helper";

const ModalFormSubmit = styled(Form.Item)`
  position: absolute;
  bottom: 0;
  right: 8em;
  margin-bottom: 10px;
`;

const processImage = (imageList, vehicleImages, name) => {
  const newImageList = imageList.filter((x) => !vehicleImages.includes(x.name));
  const deleteImage = vehicleImages.filter(
    (x) => !imageList.map((i) => i.name).includes(x)
  );
  const newImages = newImageList.map((img, index) => {
    const ext = img.originFileObj.name.split(".").slice(1, 2).join("");
    const newName = [name + index, ext].join(".");

    return new File([img.originFileObj], newName, {
      type: img.originFileObj.type,
    });
  });

  return { newImages, deleteImage };
};
export default function ModalForm({ onFinish, vehicle }) {
  const [form] = Form.useForm();
  const [isAdd, setIsAdd] = useState(vehicle === undefined || vehicle === null);
  const [imageList, setImageList] = useState([]);
  const [info, setInfo] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const handleBeforeUpload = (file) => {
    const isJPG = file.type === "image/jpeg";
    const isJPEG = file.type === "image/jpeg";
    const isPNG = file.type === "image/png";

    if (!(isJPG || isJPEG || isPNG)) {
      Modal.error({ title: "only JPG,JPEG or PNG image format accepted" });
      return;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      Modal.error({ title: "image size should now larger than 2M" });
      return;
    }

    return (isJPG || isJPEG || isPNG) && isLt2M;
  };
  const handleChange = ({ fileList: newFileList, file }) => {
    setImageList(newFileList);
  };
  const handleFinish = async (values) => {
    const { image, condition, transmission, ...others } = values;
    const formData = new FormData();
    const name = _.startCase(
      _.lowerCase(
        Object.values(others)
          .map((i) => i.data)
          .join("_")
      )
    ).replace(/\s+/g, "_");
    const { newImages, deleteImage } = processImage(
      imageList,
      vehicle.images,
      name
    );
    const req = {
      id: vehicle.id,
      name: name,
      category: others.category.data,
      subCategory: others.subCategory.data,
      make: others.make.data,
      model: others.model.data,
      conditionId: condition.data,
      transmissionId: transmission.data,
    };

    newImages.map((img) => {
      formData.append("images", img);
    });
    for (const [key, value] of Object.entries(req)) {
      formData.append(key, value);
    }
    deleteImage.map((i) => formData.append("deletedImage", i));
    formData.append("images", []);
    const response = isAdd
      ? apiService.addVehicle(formData)
      : apiService.updateVehicle(formData);
    const { data } = await response;

    if (!!data && !vehicle) {
      setIsAdd(false);
    }

    if (!!onFinish && !!data) {
      onFinish(data);
    }
  };
  const handleCancel = () => setPreviewVisible(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
    apiService.getVehicleCategories().then((res) => {
      const { data } = res;
      const info = [
        { label: "Category", name: "category", data: data },
        {
          label: "Sub Category",
          name: "subCategory",
          data: data.map((item) => item.subCategories).flat(),
        },
        {
          label: "Make",
          name: "make",
          data: data.map((item) => item.makes).flat(),
        },
        {
          label: "Model",
          name: "model",
          data: data
            .map((item) => item.makes.map((value) => value.models).flat())
            .flat(),
        },
      ];
      setInfo(info);
    });
  }, []);

  useEffect(() => {
    if (!!vehicle) {
      console.log(vehicle);
      const values = {
        category: { data: vehicle.category.name },
        subCategory: { data: vehicle.subCategory.name },
        make: { data: vehicle.make.name },
        model: { data: vehicle.model.name },
        condition: { data: vehicle.condition.id },
        transmission: { data: vehicle.transmission.id },
      };
      const imgs = vehicle.images.map((img) => {
        return { name: img, url: "http://localhost:3001/files/" + img };
      });

      form.setFieldsValue(values);
      setImageList(imgs);
    }
  }, [vehicle]);

  return (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ offset: 1 }}
        form={form}
        validateMessages={validateMessages}
        onFinish={handleFinish}
      >
        {info.map((item, index) => (
          <Form.Item name={item.name} label={item.label} key={index}>
            <CustomSelect data={item.data} />
          </Form.Item>
        ))}

        <Form.Item name="condition" label="Condition">
          <CustomRadio data={Condition} />
        </Form.Item>
        <Form.Item name="transmission" label="Transmission">
          <CustomRadio data={Transmission} />
        </Form.Item>
        <Form.Item label="Image" name="image">
          <ImgCrop rotate aspect={16 / 9} quality={0.6}>
            <Upload
              name="upload"
              listType="picture-card"
              onChange={handleChange}
              fileList={imageList}
              accept={"image/*"}
              beforeUpload={handleBeforeUpload}
              onPreview={handlePreview}
            >
              {imageList.length >= 10 ? null : uploadButton}
            </Upload>
          </ImgCrop>
        </Form.Item>

        <ModalFormSubmit shouldUpdate={true}>
          <Button type="primary" htmlType="submit">
            {!!isAdd ? "Add" : "Update"}
          </Button>
        </ModalFormSubmit>
      </Form>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}
