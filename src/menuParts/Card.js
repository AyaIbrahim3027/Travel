import style from '../styles/tour.module.css';
import { Link } from "react-router-dom";

export default function Card(props){
    return (
    
    <div className='crad'>
       <div className={style.cardbody}>
         <img className={style.img} alt="drawing of a cat" src={props.img}/>
         
         <div className={style.box}>
         <h2 className={style.title} >{props.title}</h2>
         <h5 className={style.text1} >{props.time}</h5>
         </div>
         <hr className={style.hr}></hr>
         <div className={style.text2}>
         <h2  className={style.sf} >starting from</h2>
         <h5 className={style.price}>{props.price}</h5>
         
         </div>
         <hr className={style.hr}></hr>
         <p className={style.discription} >{props.discription}</p>
         <Link to="/Info">
         <button className={style.button}>More Details</button>
         </Link>
        </div>
    </div>

    )




}
