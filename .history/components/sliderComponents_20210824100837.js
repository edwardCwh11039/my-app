import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Image } from "antd";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
};

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

export function SliderWrapper({ slidesData }) {
  return (
    <Slider {...settings}>
      {slidesData.map((slide) => (
        <div className="slick-slide" key={slide.id}>
          <Image
            className="slick-slide-image"
            src={`${slide.src}`}
            preview={false}
          />
        </div>
      ))}
    </Slider>
  );
}

export function SliderWrapperWithThumbnailRef({ slidesData }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  return (
    <div className="slider-wrapper" style={{ width: "auto" }}>
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
      >
        {slidesData.map((slide) => (
          <div className="slick-slide" key={slide.id}>
            <Image
              className="slick-slide-image"
              src={`${slide.src}`}
              preview={false}
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
          {slidesData.map((slide) => (
            <div className="slick-slide" key={slide.id}>
              <Image
                className="slick-slide-image"
                src={`${slide.src}`}
                preview={false}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
