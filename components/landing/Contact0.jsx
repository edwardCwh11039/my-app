import React from "react";
import { Col, Row } from "antd";
import { ContactConfig } from "../../lib/data.source";
import GoogleMaps from "../googleMap";

class Content10 extends React.PureComponent {
  render() {
    return (
      <div style={{ margin: "2rem 1rem" }}>
        <Row gutter={[6, 16]}>
          {ContactConfig.content.map((item, index) => {
            return (
              <Col xs={{ span: 24 }} lg={{ span: 12 }} key={index}>
                <Row>
                  <Col span={24}>
                    <h2>{item.title}</h2>
                  </Col>
                </Row>
                {item.content.map((data, i) => (
                  <Row key={i} className={item.wrapper}>
                    <Col
                      xs={{ span: 6 }}
                      lg={{ span: 4 }}
                      style={{ textAlign: "right", paddingRight: "1rem" }}
                    >
                      <b>{data.title}</b>
                    </Col>
                    <Col xs={{ span: 18 }} lg={{ span: 20 }}>
                      {data.data}
                    </Col>
                  </Row>
                ))}
              </Col>
            );
          })}

          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <h2>Our location</h2>
            <GoogleMaps />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content10;
