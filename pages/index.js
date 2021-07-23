import { Carousel, Col, Row } from "antd";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import styled from "styled-components";
import AppLayout from "../components/layout";
import ServiceCol, {
  BannerH1,
  BannerH2,
  Container,
} from "../components/normal-item";
import Image from "next/image";

const CarouselContent = styled.div`
  color: "#fff";
  lineheight: "160px";
  textalign: "center";
  background: "#364d79";
`;

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

const WelcomeDiv = styled.div`
  background: #1e1c1c;
  color: #fff;
  margin-top: 10px;
  h2 {
    color: #fff;
    font-size: 46px;
    color: #ee3124;
  }
  p {
    color: #fff;
    font-size: 20px;
    line-height: 40px;
  }
  @media (max-width: 500px) {
    p {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export default function Home() {
  return (
    <AppLayout>
      <HomeBanner style={{ backgroundImage: `url(/images/banner-home.jpg)` }}>
        <Container style={{ maxWidth: "1810px", width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <BannerH1>welcome to ...company</BannerH1>
            <BannerH2>we seleing truc</BannerH2>
          </div>
        </Container>
      </HomeBanner>
      <Container style={{ maxWidth: "1810px", width: "100%" }}>
        <div className="service-class">
          <Row gutter={[16, 16]}>
            <ServiceCol img="/images/truck.jpg">
              <h3>
                Our Car
                <i></i>
              </h3>
            </ServiceCol>
            <ServiceCol img="/images/truck.jpg">
              <h3>
                Contact Us
                <i></i>
              </h3>
            </ServiceCol>
          </Row>
        </div>{" "}
        <WelcomeDiv>
          <Row>
            <Col span={12}>
              <div className="welcome-img">
                <Image src="/images/truck.jpg" alt="welcome" />
              </div>
            </Col>
            <Col span={12}>
              <div className="welcome-text">
                <h2>About Us</h2>
                <p>
                  Welcome to Guaranteed Automotive and Transmission Service,
                  your head pick for master vehicle fix close and around
                  Lafayette, IN. Our very educated ASE-Certified auto mechanics
                  really have an enthusiasm for playing out a wide range of
                  vehicle fix administrations, huge or little. Our group can get
                  to the foundation of the issue and fix car glitches that other
                  vehicle benefit focuses may miss.
                </p>
              </div>
            </Col>
          </Row>
        </WelcomeDiv>
      </Container>
    </AppLayout>
  );
}
