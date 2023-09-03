import {Component} from 'react';
import style from '../styles/tour.module.css';
import Card from '../menuParts/Card';


export default class Tour extends Component{
  render(){
return <>
<div className='ta'>
  <div className={style.wrapper}>
    <Card
     img ="https://vl-prod-static.b-cdn.net/system/images/000/503/152/4633d4f9dd937b2ca412755b559bdc76/668gt/DSC01957.jpg?1624752006"
     title ='Cairo and Luxor (by domestic flight)'
     time ="5 Nights 6 Days"
     discription="Egypt has been a must-see destination for all travelers for centuries! From its world wonders to its rich culture, Egypt has it all! Cairo is a destination filled with unique monuments of various civilizations....Read more"
     price="USD 1,050"
     />
      <Card
     img ="https://vl-prod-static.b-cdn.net/system/images/000/545/860/974864c2d13c40d0dfd82530127cf60e/668gt/image2.jpeg?1639535038"
     title ='Cairo, Luxor, Marsa Alam (by flight)'
     time ="9 Nights 10 Days"
     discription="Egypt is the ultimate travel destination! From its world wonders to its rich culture, Egypt has it all!"
     price="USD 1,550"
     />
      <Card
     img ="https://vl-prod-static.b-cdn.net/system/images/000/543/254/3ef94161adf652ec36b2589da6f2c603/x255gt/722BA155-E604-4CE4-89BC-F6622F6A7B56.jpeg?1639603129"
     title ='Cairo, Luxor, Gouna (by flight)'
     time ="8 Nights 9 Days"
     discription="Egypt is the ultimate travel destination! From its world wonders to its rich culture, Egypt has it all."
     price="USD 1,600"
     />
     <Card
     img ="https://vl-prod-static.b-cdn.net/system/images/000/503/182/8b8511d1aaadc366f17e4779870ec3f3/x255gt/DSC01675.jpg?1624751991"
     title ='Cairo and Nile Cruise (by domestic flight)'
     time ="7 Nights 8 Days"
     discription="Egypt has been a must-see destination for all travelers for centuries! From its world wonders to its rich culture, Egypt has it all! Cairo is a destination filled with unique monuments of various civilizations....Read more"
     price="USD 1,950"
     />
  </div> </div>
</>

}



}

