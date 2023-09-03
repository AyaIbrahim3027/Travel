import '../styles/Contact.css'
import bkImg from '../assets/Contact.jpeg'
import FbIcon from '@material-ui/icons/Facebook'
import InstaIcon from '@material-ui/icons/Instagram'
import TwitIcon from '@material-ui/icons/Twitter'
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Email'
import {useRef} from 'react'

function Contact() {
  let firstnameInput=useRef();
  let lastnameInput=useRef();
  let mailInput=useRef();
  let phoneInput=useRef();
  let msgInput=useRef();
  function submitHandler(event){
    event.preventDefault();
    let firstnameEntered =firstnameInput.current.value;
    let lastnameEntered=lastnameInput.current.value;
    let mailEntered=mailInput.current.value;
    let phoneEntered=phoneInput.current.value;
    let msgEntered=msgInput.current.value;
    
    console.log(firstnameEntered,lastnameEntered,mailEntered,phoneEntered,msgEntered)
  }
  return ( 
  <div className='contact'>
    <div className='contactus'>
    </div>
    <div className='message'>
    

    </div>
    <div className='leftSide' style={{backgroundImage:`url(${bkImg})`}}>
      <div className='text1'>
        <h3 className='cI'> Contact Information</h3>
        <h3 className='cI'>Fill up the form and our team will get back to </h3>
          <h3 className='cI'> you within 24 hours.</h3>
      </div>
      <div className='text2'>

      <h4><PhoneIcon/>    19991</h4>
        <h5> <MailIcon/>SIM_Traveling@hotmail.com</h5>
      </div>
    <div className='socialMedia'>
       <FbIcon/>
       <InstaIcon/>
       <TwitIcon/>
       
       
        </div></div>
   <div className='rightSide' >
     <form onSubmit ={submitHandler}>
       <label>First Name</label>
       <input type ='text' required placeholder='FirstName' ref={firstnameInput}/>
       <label>Last Name</label>
       <input type ='text' required placeholder='LastName' ref={lastnameInput}/>
       <label>Email</label>
       <input type ='email' required placeholder='email@example.com' ref={mailInput}/>
       <label>Phone number</label>
       <input type='phone number' required placeholder='phone number' ref={phoneInput}/>

     <textarea row='3'  required placeholder='Your Message.....' ref={msgInput}/>
     <button type ='submit'> Send Message</button>
     </form>
   </div>
  </div>
    
 );
}

export default Contact;