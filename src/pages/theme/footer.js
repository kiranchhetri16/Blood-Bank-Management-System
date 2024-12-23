import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const LookingForBlood = [
    {
      id: 1,
      name: "Looking For Blood",
      available: "Blood Avaibality",
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
      <section className="footer">
        <div className="ci-container">
          <div className="footer-wrapper">
            <div className="looking-for-blood">
              {LookingForBlood.map((item) => (
                <ul key={item.id}>
                  <p>{item.name}</p>
                  <li>{item.available}</li>
                  <li>{item.directory}</li>
                  <li>{item.request}</li>
                </ul>
              ))}
            </div>
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
            <p>
              Copyright
              <FontAwesomeIcon icon={faCopyright} />
              2024 Kiran Chhetri
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
