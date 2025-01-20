import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Map from "../../Assest/image/nepal-new-map.png";
const Footer = () => {
  const LookingForBlood = [
    {
      id: 1,
      name: "Looking For Blood",
      available: "Donate Blood",
      directory: "Blood Bank Directory",
      request: "Blood Request",
    },
  ];
  const ContactInfo = [
    {
      id: 1,
      name: "Contact Info",
      address: "Dhobighat, Lalitpur",
      phn: "Phone No:",
      number: 9860297540,
      email: "e-mail:",
      email_id: "bloodbank@gmail.com",
    },
  ];
  const Resource = [
    {
      id: 3,
      name: "Resources",
      info: "Blood Bank Information",
      when: "When you need Blood",
      report: "Reports",
      video: "Videos",
    },
  ];
  return (
    <>
      <section
        className="footer"
        style={{
          backgroundImage: `url(${Map})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ci-container">
          <div className="footer-wrapper">
            <div className="footer-contact-details">
              {ContactInfo.map((item) => (
                <ul key={item.id}>
                  <p>{item.name}</p>
                  <li>{item.address}</li>
                  <li>
                    {item.phn}
                    <span>{item.number}</span>
                  </li>
                  <li>
                    {item.email}
                    <span>{item.email_id}</span>
                  </li>
                </ul>
              ))}
            </div>
            <div className="looking-for-blood">
              {LookingForBlood.map((item) => (
                <ul key={item.id}>
                  <p>{item.name}</p>
                  <li>
                    <Link to={"/donor"}> {item.available}</Link>
                  </li>
                  <li>
                    <Link to={""}> {item.directory}</Link>
                  </li>
                  <li>
                    <Link to={""}> {item.request}</Link>
                  </li>
                </ul>
              ))}
            </div>

            <div className="footer-resources">
              {Resource.map((item) => (
                <ul key={item.id}>
                  <p>{item.name}</p>
                  <li>{item.info}</li>
                  <li>{item.when}</li>
                  <li>{item.report}</li>
                  <li>{item.video}</li>
                </ul>
              ))}
            </div>
          </div>
          <hr />
          <div className="last-footer-details">
            <div className="copy-right-part">
              <p>Copyright</p>
              <FontAwesomeIcon icon={faCopyright} className="copy-right" />
              <p>2024 Blood Bank Management System</p>
            </div>

            <div className="social-media">
              <FontAwesomeIcon icon={faFacebook} className="sites" />
              <FontAwesomeIcon icon={faInstagram} className="sites" />
              <FontAwesomeIcon icon={faLinkedinIn} className="sites" />
              <FontAwesomeIcon icon={faWhatsapp} className="sites" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
