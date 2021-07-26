import { Col } from "antd";
import styled from "styled-components";
import { BannerH1, BannerH2, Container } from "./normal-item";

const HomeBanner = styled.div`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
  margin-bottom: 40px;
  height: calc(100vh - 149px);
  background-size: cover;
  display: flex;
  align-items: center;
  h1 {
    font-size: 90px;
  }
  h2 {
    font-size: 46px;
  }
  h1,
  h2 {
    color: #fff;
    margin-bottom: 0;
  }
`;

export default function ContentBanner({ imgSrc, h1, h2 = "" }) {
  return (
    <HomeBanner style={{ backgroundImage: `${imgSrc}` }}>
      <Container style={{ maxWidth: "1810px", width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <BannerH1>{h1}</BannerH1>
          <BannerH2>{h2}</BannerH2>
        </div>
      </Container>
    </HomeBanner>
  );
}
