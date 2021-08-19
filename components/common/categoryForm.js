import {
  CloseCircleOutlined,
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
import { validateMessages } from "../../lib/constant";
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
export default function ModalForm({ vehicle, onFinish }) {
  const [form] = useForm();
  const [isAdd, setIsAdd] = useState(vehicle === undefined);
  const [imageList, setImageList] = useState([]);
  const [uid, setUid] = useState("");
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
    console.log(imageList, newFileList);
    setImageList(newFileList);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
    apiService.createCourseCode().then((res) => {
      const { data: uid } = res;

      setUid(uid);
    });
  }, []);
  return (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ offset: 1 }}
        form={form}
        validateMessages={validateMessages}
        onFinish={(values) => {
          console.log(values);
          //   const { images, ...others } = values;
          //   const newImgs = images.map((img) => img.originFileObj);
          //   const newData = { ...others, images, uid, "files[]": newImgs };
          //   data.append("files", newImgs);

          //   apiService.addVehicle({ newData, files: newImgs }).then((res) => {
          //     console.log(res);
          //   });
        }}
      >
        <Form.Item name="category" label="Category">
          <CustomSelect data={[]} />
        </Form.Item>
        <Form.Item name="subCategory" label="Sub-Category">
          <CustomSelect data={[]} />
        </Form.Item>
        <Form.Item name="manufactory" label="Manufactory">
          <CustomSelect data={[]} />
        </Form.Item>
        <Form.Item name="model" label="Model">
          <CustomSelect data={[]} />
        </Form.Item>
        <Form.Item name="condition" label="Condition">
          <CustomRadio data={["Recorn", "Rebuilt"]} />
        </Form.Item>
        <Form.Item name="transmission" label="Transmission">
          <CustomRadio data={["manual", "auto"]} />
        </Form.Item>
        <Form.Item label="Image" name="image">
          <ImgCrop rotate aspect={16 / 9}>
            <Upload
              name="upload"
              listType="picture-card"
              //   action="http://localhost:3001/api/vehicle/image_upload"
              customRequest={(options) => {
                const data = new FormData();
                data.append("image", options.file);
                apiService
                  .addVehicleImage(data)
                  .then((res) => console.log(res))
                  .catch((err) => {
                    console.log(err);
                  });
              }}
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
              Add
            </Button>
          )}
        </ModalFormSubmit>
      </Form>
    </>
  );
}
