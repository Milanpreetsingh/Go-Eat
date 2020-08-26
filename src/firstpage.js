import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';
import {MDBBtn} from 'mdbreact'

function Firstpage({orderinfo,logout}){
 return(
 <div className="backimagefirstpage">
     <br></br><br></br><br></br><br></br><br></br><br></br>
 <div className="container">
<Link to="/search"><Button  variant="indigo" type="button">Explore</Button></Link>
<Link to ="/myaccount"><Button variant="info" type="button" onClick={()=>orderinfo()}>Account</Button></Link>
<MDBBtn color="deep-orange" onClick={()=>logout()}>Logout</MDBBtn>
</div>
</div>
 )}

 export default Firstpage;