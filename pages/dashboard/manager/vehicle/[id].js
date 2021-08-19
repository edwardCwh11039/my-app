import { Card, Col, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import CustomSlider from "../../../../components/customSlider";
import AppLayout from "../../../../components/layout/layout";
import apiService from "../../../../lib/services/api-service";

export async function getServerSideProps(context) {
  // todo get vehicle profile here;
  const { id } = context.params;

  return {
    props: { id },
  };
}

export default function Page(props) {
  const router = useRouter();
  const [data, setData] = useState({});
  const [info, setInfo] = useState([]);
  useEffect(() => {
    (async () => {
      const id = +router.query.id || props.id;
      const { data } = await apiService.getVehicleById(id);

      if (data) {
        const info = [
          { label: "Name", value: data.name },
          { label: "Category", value: data.category.name },
          { label: "Sub Category", value: data.subCategory.name },
          { label: "Make", value: data.make.name },
          { label: "Model", value: data.model.name },
          { label: "Condition", value: data.condition.name },
          { label: "Transmission", value: data.transmission.name },
        ];
        setInfo(info);
        setData(data);
      }
    })();
  }, []);
  return (
    <AppLayout>
      <Row>
        <Col span={24}>
          <CustomSlider images={data.images} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "5rem" }}>
        <Col span={15}>
          <Card title="Vehicle Details">
            {info.map((item, index) => (
              <Row gutter={[6, 16]} key={index}>
                <Col span="6">
                  <b>{item.label}</b>
                </Col>
                <Col>
                  <p>{item.value}</p>
                </Col>
              </Row>
            ))}
          </Card>
        </Col>
      </Row>
    </AppLayout>
  );
}
