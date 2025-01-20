import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member1 from "../../Assest/image/kiran.jpg";

const OurTeam = () => {
  var settings = {
    dots: false,
    autoplay: true,
    default: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <section className="our-team-section">
      <div className="ci-container">
        <h3>Meet Our Team</h3>
        <Slider {...settings}>
          <div className="team-row">
            <div className="item cart ">
              <div className="image-wrapper">
                <img
                  src={Member1}
                  alt="Founder & CEO"
                  height={100}
                  width={100}
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h4>Founder & CEO</h4>
              <p>Kiran Chhetri</p>
            </div>
          </div>
          <div className="team-row">
            <div className="item cart ">
              <div className="image-wrapper">
                <img
                  src={Member1}
                  alt="Founder & CEO"
                  height={100}
                  width={100}
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h4>Frontend Developer</h4>
              <p>Kiswor Chhetri</p>
            </div>
          </div>
          <div className="team-row">
            <div className="item cart ">
              <div className="image-wrapper">
                <img
                  src={Member1}
                  alt="Founder & CEO"
                  height={100}
                  width={100}
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h4>Backend Developer</h4>
              <p>Sandip Rai</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default OurTeam;
