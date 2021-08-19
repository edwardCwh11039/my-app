import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
          <img className="slick-slide-image" src={`${slide.src}`} />
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
            <img className="slick-slide-image" src={`${slide.src}`} />
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
              <img className="slick-slide-image" src={`${slide.src}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}