import '../styles/Login.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FbIcon from "@material-ui/icons/Facebook";
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function Login() {


return(
     
  <>
  <div className="log"> <h3> &nbsp;  &nbsp; Login </h3>  </div>  
  <div id="content">
      <img src="ui.jpeg" class="ui"/>
      
  </div>
  
      <div className="container">
     <form>
            <i className="fa fa-user icon" /> 
           <div className='pers'> <PersonIcon /> </div>
          <input type="text"  placeholder="Username or email" name="username" required  class="input-icons" />
             <br/>
          <i class="fa fa-key icon" />
          <div className='loc'> <LockIcon /> </div>
          <input type="password" placeholder="Password" name="password" required  /> 
          <br/>                    
    <br/> 

    <br/> <div className='che'><CheckBoxOutlineBlankIcon/> </div>  
    Remember me &nbsp; |&nbsp; &nbsp; &nbsp; <a className='reg' href ="#" >Register now </a>
            <br/>
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button type="submit" >LOGIN</button> 
          <br/>  
        <br/>
           <a className='pas' href="#"> Forgot password? </a>  <br/> <br/>
        <p className='or'>____________or____________</p>
        <div className="socialMedia">
        <LinkedInIcon  className="lnk" style={{ fontSize: 40 }} />
        <a href="">
          <FbIcon className="fac" style={{ fontSize: 40 }} />
        </a>

        <InstagramIcon  className="twi"  style={{ fontSize: 35 }}/>
        <EmailIcon className='ema' style={{ fontSize: 40 }}/>
         
     
       
      </div>
         </form>  
   </div>
  
  </>


    );

  }
export default Login;