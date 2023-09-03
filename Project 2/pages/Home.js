import "../styles/Home.css";
import { Link } from "react-router-dom";
import bkgImg from "../assets/pizza.jpeg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bkgImg})` }}>
      <div className="headerContainer">
        <h1>Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/Menu">
          <button> OREDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
