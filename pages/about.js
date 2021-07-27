import { Col, Row } from "antd";
import styled from "styled-components";
import ContentBanner from "../components/contentBanner";
import AppLayout from "../components/layout";
import Image from "next/image";

const AboutContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  @media (min-width: 567px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default function Home() {
  return (
    <AppLayout>
      <ContentBanner
        imgSrc="url(/images/banner-home.jpg)"
        h1="about us"
        h2="we have over 20 years of experience"
      />
      <div style={{ marginTop: "140px" }}>
        <AboutContainer>
          <Row
            style={{ backgroundColor: "transparent" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col span={12} style={{ alignSelf: "center" }}>
              <div className="about-content">
                <span>Lorem ipsum dolor sit amet</span>
                <h2>
                  Get to know about <em>our company</em>
                </h2>
                <p>
                  Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id
                  tempor turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum
                  vel condimentum congue, mi odio vehicula tellus, sit amet
                  malesuada justo sem.
                  <br />
                  <br />
                  Pellentesque in sagittis lacus, vel auctor sem. Quisque eu
                  quam eleifend, ullamcorper dui nec, luctus quam.
                </p>
              </div>
            </Col>
            <Col span={12}>
              <Image
                src="/images/about.jpg"
                alt="about image"
                layout="fill"
                objectFit="fill"
              />
            </Col>
          </Row>
        </AboutContainer>
      </div>
    </AppLayout>
  );
}
