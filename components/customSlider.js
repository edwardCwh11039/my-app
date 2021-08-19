import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomSlider({ images }) {
  const [data, setData] = useState([]);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!!images) {
      setData(images);
      setNav1(slider1);
      setNav2(slider2);
    }
  }, [images]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  return (
    <div>
      <Row justify="center">
        <Col>
          <div className="slider-wrapper">
            <Slider
              {...settingsMain}
              asNavFor={nav2}
              ref={(slider) => setSlider1(slider)}
            >
              {data.map((img, index) => (
                <div key={img + index} className="slick-slide">
                  <Image
                    src={`http://localhost:3001/files/${img}`}
                    preview={{ visible: false }}
                    style={{ alignItems: "center" }}
                    className="slick-slide-image"
                    onClick={() => setVisible(true)}
                  />
                </div>
              ))}
            </Slider>
            <div className="thumbnail-slider-wrap">
              <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={(slider) => setSlider2(slider)}
              >
                {data.map((img, index) => (
                  <div className="slick-slide" key={index}>
                    <img
                      className="slick-slide-image"
                      src={`http://localhost:3001/files/${img}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {data.map((img, index) => (
            <Image src={`http://localhost:3001/files/${img}`} key={index} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
