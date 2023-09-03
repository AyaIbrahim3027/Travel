import "../styles/Footer.css";
import InstaIcon from "@material-ui/icons/Instagram";
import FbIcon from "@material-ui/icons/Facebook";
import TwitIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstaIcon />
        <a href="https://www.facebook.com/noura.moharam71/">
          <FbIcon />
        </a>
        <TwitIcon />
      </div>
      <p>&copy; 2021 pizzeria.com</p>
    </div>
  );
}

export default Footer;
