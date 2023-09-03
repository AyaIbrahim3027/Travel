import "../styles/Home.css";
import { Link } from "react-router-dom";
import travel from "../assets/travel.jpg";
import Select from 'react-select';
import '../styles/Menu.css';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';


const Countries = [
  { label: "Paris", value: 355 },
  { label: "Jordon", value: 54 },
  { label: "Dubai", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Italy", value: 66 },
  { label: "London", value: 100 },
  { label: "Maldives", value: 14 },
  { label: "Dahab", value: 80 },
  { label: "Koria", value: 47 },
  { label: "Sharm ElShehk", value: 965 },
];

const Type = [
  { label: "Summer Traveler", value: 355 },
  { label: "Winter Traveler", value: 54 },
  { label: "Holiday Traveler", value: 43 },
  { label: "Honey Moon", value: 61 },
  { label: "Other", value: 965 }
];



function Home() {
  return (
    <>
    <div className="home" style={{ backgroundImage: `url(${travel})` }}> 

      <div className="headerContainer">
        <Link to="/Tour">
          <button> Search </button>
        </Link>
      </div> </div> 
        
      <div className="container1">
      <div className="search1">
      <Select 
      options={Countries} />
      </div>
      <div className="search2">
      <Select options={Type} />
      </div>  
      </div> 

      

      <div className='menu'>
    <h1 className='menuTitle'> Tours </h1>
     <p className="text">Travel packages for every budget</p>
   </div>

   <ImageSlider slides={SliderData} /> 

  
   </>
    
  );
}

export default Home;
