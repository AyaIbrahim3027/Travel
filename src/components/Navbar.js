import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo"> <h3> Travel </h3> </div>
      <div className="rightSide">
   
        <Link to="/"> Home</Link>
        <Link to="/About"> About</Link>
        <Link to="/Tour"> Tour</Link>
        <Link to="/Contact"> Contact</Link>
        <Link to="/Login"> Login</Link>

        </div>
       
       <div className="line"> </div>
      
    </div>
  );
}

export default Navbar;
