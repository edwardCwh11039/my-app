import { Col } from "antd";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 992px) {
    width: 970px;
  }
  @media (max-width: 768px) {
    width: 750px;
  }
`;

export const BannerH1 = styled.h1`
  color: #fff;
  margin-bottom: 0;
  @media (min-width: 1200px) {
    font-size: 46px;
  }
  @media (min-width: 993px) and (max-width: 1199px) {
    font-size: 46px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 46px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
  }
`;

export const BannerH2 = styled.h2`
  color: #fff;
  margin-bottom: 0;
  @media (min-width: 1200px) {
    font-size: 90px;
  }
  @media (min-width: 993px) and (max-width: 1199px) {
    font-size: 75px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 64px;
  }
  @media (max-width: 767px) {
    font-size: 38px;
  }
`;

export default function ServiceCol({ img, ...props }) {
  return (
    <Col
      span={12}
      style={{
        position: "relative",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        float: "left",
      }}
    >
      <a href="">
        <div className="service-boxs">
          <img src={img} alt="welcome" />
          {props.children}
        </div>
      </a>
    </Col>
  );
}
