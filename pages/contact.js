import { Col, Row } from "antd";
import ContentBanner from "../components/contentBanner";
import EnquiryForm from "../components/enquiryForm";
import AppLayout from "../components/layout";
import dynamic from "next/dynamic";
import styled from "styled-components";

const Map = dynamic(() => import("../components/map"), {
  loading: () => "Loading...",
  ssr: false,
});

const ContentWrapper = styled.div`
  width: 90%;
  float: left;
  clear: left;
  margin-left: 5%;
  padding: 0;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const CustomHeader = styled.h5`
  font-size: 28px;
  line-height: 1.1em;
  text-align: left;
  font-family: "Teko", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default function Home() {
  return (
    <AppLayout>
      <ContentBanner imgSrc="url(/images/banner-home.jpg)" h1="contact us" />
      <ContentWrapper>
        <Row gutter={24}>
          <Col span={12} style={{ paddingLeft: "25px", paddingRight: "25px" }}>
            <Map />
            <link
              href="https://fonts.googleapis.com/css2?family=Teko:wght@700&family=Zen+Loop&display=swap"
              rel="stylesheet"
            ></link>
            <CustomHeader>0123456789</CustomHeader>
            <CustomHeader>info@company.com</CustomHeader>
            <CustomHeader>28 Queens Avenue, Hawthorn 1122</CustomHeader>
          </Col>
          <Col span={12} style={{ paddingLeft: "25px", paddingRight: "25px" }}>
            <EnquiryForm />
          </Col>
        </Row>
      </ContentWrapper>
    </AppLayout>
  );
}
