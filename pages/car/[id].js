import AppLayout from "../../components/layout";
import { ContentContainer } from "../../components/container";
import Slider from "react-slick";

import { useEffect, useState } from "react";
import { SliderWrapperWithThumbnailRef } from "../../components/sliderComponents";
import { Descriptions } from "antd";

export async function getServerSideProps(context) {
  const { id } = context.params;

  return { props: { id } };
}

export default function Page({ id }) {
  const slidesData = [
    {
      id: 1,
      title: "repellendus id ullam",
      label: "Dolorem officiis temporibus.",
      src: "/images/truck1.jpeg",
    },
    {
      id: 2,
      title: "excepturi consequatur est",
      label: "Officia non provident dolor esse et neque.",
      src: "/images/truck2.jpeg",
    },
    {
      id: 3,
      title: "eius doloribus blanditiis",
      label: "Ut recusandae vel vitae molestiae id soluta.",
      src: "/images/truck3.jpeg",
    },
    {
      id: 4,
      title: "nihil voluptates delectus",
      label: "Qui vel consequatur recusandae illo repellendus.",
      src: "/images/truck2.jpeg",
    },
    {
      id: 5,
      title: "nemo dolorem necessitatibus",
      label: "Placeat odit velit itaque voluptatem.",
      src: "/images/truck3.jpeg",
    },
    {
      id: 6,
      title: "dolorem quibusdam quasi",
      label: "Adipisci officiis repudiandae.",
      src: "/images/truck1.jpeg",
    },
  ];

  return (
    <AppLayout>
      <ContentContainer>
        <div className="App">
          <SliderWrapperWithThumbnailRef slidesData={slidesData} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Descriptions title="Vehicle Info">
            <Descriptions.Item label="Manufactory"></Descriptions.Item>
            <Descriptions.Item label="Model"></Descriptions.Item>
            <Descriptions.Item label="drive type"></Descriptions.Item>
            <Descriptions.Item label="Condition"></Descriptions.Item>
            <Descriptions.Item label="Transmission"></Descriptions.Item>
          </Descriptions>
        </div>
      </ContentContainer>
    </AppLayout>
  );
}
