import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FooterSlider = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000, // Corrected property
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Corrected to match slidesToShow
          initialSlide: 1, // Adjusted initialSlide if needed
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="footer-slider">
      <div className="ci-container">
        <h5>How Donation Works</h5>
        <Slider {...settings}>
          <div>
            <div className="text-wrapper">
              <p>
                It Takes Only an Hour
                <span>Donate blood save lives! Read Blood Donation Facts</span>
              </p>
            </div>
          </div>
          <div>
            <div className="text-wrapper">
              <p>Step 2: Screening Process</p>
            </div>
          </div>
          <div>
            <div className="text-wrapper">
              <p>Step 3: Donation Procedure</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default FooterSlider;
