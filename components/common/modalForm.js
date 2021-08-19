import {
  CloseCircleOutlined,
  ConsoleSqlOutlined,
  InboxOutlined,
  KeyOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Select,
  Spin,
  Upload,
} from "antd";
import Form from "antd/lib/form";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import { UploadFile } from "antd/lib/upload/interface";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Condition, Transmission, validateMessages } from "../../lib/constant";
import apiService from "../../lib/services/api-service";
import { getBase64 } from "../../lib/util/image-helper";
import CustomRadio from "./customRadio";
import CustomSelect from "./customSelect";
import { Lightbox } from "react-modal-image";
import ImgCrop from "antd-img-crop";
const { Option } = Select;

const ModalFormSubmit = styled(Form.Item)`
  position: absolute;
  bottom: 0;
  right: 8em;
  margin-bottom: 10px;
`;
export default function ModalForm({ onFinish, vehicle }) {
  const [form] = useForm();
  const [isAdd, setIsAdd] = useState(vehicle === undefined || vehicle === null);
  const [imageList, setImageList] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
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
    const { image, ...others } = values;
    const formData = new FormData();

    for (const [key, value] of Object.entries(others)) {
      others[key] = value.data;
    }
    const { condition, transmission, ...detail } = others;
    const name = _.startCase(
      _.lowerCase(Object.values(detail).join("_"))
    ).replace(/\s+/g, "_");
    const images = imageList.map((img, index) => {
      const ext = img.originFileObj.name.split(".").slice(1, 2).join("");
      const newName = [name + index, ext].join(".");

      return new File([img.originFileObj], newName, {
        type: img.originFileObj.type,
      });
    });
    const newItem = {
      name: name,
      category: detail.category,
      subCategory: detail.subCategory,
      make: detail.make,
      model: detail.model,
      conditionId: condition,
      transmissionId: transmission,
    };
    images.map((img) => {
      formData.append("images", img);
    });
    for (const [key, value] of Object.entries(newItem)) {
      formData.append(key, value);
    }
    formData.append("images", []);

    const response = apiService.addVehicle(formData);
    const { data } = await response;
    if (!!data && !vehicle) {
      setIsAdd(false);
    }

    if (!!onFinish && !!data) {
      onFinish(data);
    }
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

      setCategory(data);
      setSubCategory(data.map((item) => item.subCategories).flat());
      setMake(data.map((item) => item.makes).flat());
      setModel(
        data
          .map((item) => item.makes.map((value) => value.models).flat())
          .flat()
      );
    });
  }, []);

  useEffect(() => {
    if (!!vehicle) {
      console.log(vehicle);
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
        <Form.Item name="category" label="Category">
          <CustomSelect data={category} />
        </Form.Item>
        <Form.Item name="subCategory" label="Sub-Category">
          <CustomSelect data={subCategory} />
        </Form.Item>
        <Form.Item name="make" label="Manufactory">
          <CustomSelect data={make} />
        </Form.Item>
        <Form.Item name="model" label="Model">
          <CustomSelect data={model} />
        </Form.Item>
        <Form.Item name="condition" label="Condition">
          <CustomRadio data={Condition} />
        </Form.Item>
        <Form.Item name="transmission" label="Transmission">
          <CustomRadio data={Transmission} />
        </Form.Item>
        <Form.Item label="Image" name="image">
          <ImgCrop rotate aspect={16 / 9}>
            <Upload
              name="upload"
              listType="picture-card"
              onChange={handleChange}
              fileList={imageList}
              accept={"image/*"}
              beforeUpload={handleBeforeUpload}
            >
              {imageList.length >= 10 ? null : uploadButton}
            </Upload>
          </ImgCrop>
        </Form.Item>

        <ModalFormSubmit shouldUpdate={true}>
          {() => (
            <Button type="primary" htmlType="submit">
              {!!isAdd ? "Add" : "Update"}
            </Button>
          )}
        </ModalFormSubmit>
      </Form>
    </>
  );
}
