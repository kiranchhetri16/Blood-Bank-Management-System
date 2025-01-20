import React from "react";
import backgroundImage from "../../Assest/image/bloodimg.jpg";
import whyWeBlood from "../../Assest/image/why-we-blood.jpg";
import { Link } from "react-router-dom";
import BlogPost from "../post/BlogPost";
import OurTeam from "../our team/OurTeam";
import FooterSlider from "../components/FooterSlider";
import EventBlog from "../events/EventBlog";

const Outerbody = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "668px",
    marginTop: 0,
  };
  const Digitization = [
    {
      id: 1,
      title: "Digitization",
      background: "We digitize blood banks.",
    },
  ];
  const MotivateDonors = [
    {
      id: 2,
      name: "Motivate donors",
      background:
        "We motivate and retain donors with our vein-to-vein initiative.",
    },
  ];
  return (
    <>
      <section className="main-header">
        <div className="banner-imageer" style={sectionStyle}>
          <div className="transparent">
            <div className="ci-container">
              <div className="header-title">
                <h2>Eliminate blood scarcity in Nepal</h2>
                <p>
                  Donating your time to make an impact, your blood to save lives
                  or your money to create a holistic blood management cycle.
                </p>
                <div className="btn-wrapper">
                  <Link to="/donor">
                    <div className="donate-blood-btn">Donate Blood</div>
                  </Link>
                  <Link to={"/manageblood"} className="request-blood-btn">
                    Search Blood
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Why-we">
        <div className="ci-container">
          <div className="whywe-wrapper">
            <div className="image-part">
              <img src={whyWeBlood} alt="" />
            </div>
            <div className="text-part">
              <h3>Why BBMS ?</h3>
              <p>
                Existing blood management system in Nepal is manual, cumbersome
                and inefficient. Most blood banks record the information on
                blood collection/supply manually in registers. Maintaining blood
                stock inventory is tedious with laborious back-office paperwork
                and managing information on availability and shortage of blood
                is a tall task.
              </p>
              <p>
                A social initiative for a smart, transparent and holistic blood
                management service from collection to supply. When it comes to
                blood, right information at the right time can be the answer to
                a life and death situation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <sectiion className="what-we-do">
        <div className="ci-container">
          <div className="what-wrapper"></div>
        </div>
      </sectiion>

      <OurTeam />
      <EventBlog />

      <FooterSlider />
      <section className="Blog-post">
        <BlogPost />
      </section>
    </>
  );
};

export default Outerbody;
