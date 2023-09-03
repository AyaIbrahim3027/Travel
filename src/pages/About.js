import "../styles/About.css";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ExploreIcon from '@material-ui/icons/Explore';
import PlaceIcon from '@material-ui/icons/Place';
import TimelapseIcon from '@material-ui/icons/Timelapse';

function About() {
  return (
    <>
    
    <h2 className="ab"> About</h2>
    <img src="" />
    <p className="wh">Why choose us ?</p>


    <div className="all">
          
          <h3 className="e">  Easy Booking</h3>
          <div className="eab"><CheckCircleIcon style={{ fontSize: 35}}/></div>
          <p id="one">-you can easily book your trip from our website.</p>
          <br/>

          <div class="mydiv">
          <div className="mon"><MonetizationOnIcon style={{ fontSize: 35}}/></div>
              <h3>Value for money</h3>
          </div>
          <p id="two">-Once you choose your trip , the value of the trip will appear automatically.</p>

          <div class="mydiv">
          <div className="tra"><ExploreIcon style={{ fontSize: 35}}/></div>
              <h3 style={{marginRight: "1030"}} >Passionate Travel</h3>
          </div>
          <p id="three">-We offer you the trips that suit you socially(Honeymoon - Family trip).</p>

          <div class="mydiv">
          <div className="pla"><PlaceIcon style={{ fontSize: 45}}/></div>
              <h3>Awesome Places</h3>
          </div>
          <p id="four">-We show you the famous places on your trip.</p>

          <div class="mydiv">
          <div className="tim"><TimelapseIcon style={{ fontSize: 35}}/></div>
              <h3 class="last">24 x 7 Support</h3>
          </div>
          <p id="five">-We are at your service 24 hours.</p>

         </div>
    </>
  );
}


export default About;
