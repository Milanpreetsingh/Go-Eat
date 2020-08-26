import React from "react";
import {Form,Card,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {MDBCard,MDBCardFooter} from 'mdbreact'


function Login({emailSignIn,getEmail,getPass}){
return(
<div className="bgimage ">
<div className="row">
<div className="col-md-4"></div>
<div className="col-md-4 mt-5">
<MDBCard >
  <Card.Header style={{ height:'1.4cm' }}><h2 className="text-center"><strong>Login Form</strong></h2></Card.Header>
<Card.Body>
  <Form >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>    
    <Form.Control type="email" placeholder="Enter email" onChange={getEmail} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password"  onChange={getPass} />
  </Form.Group>
  <div className="row justify-content-center">
  <Button variant="info" type="button" onClick={emailSignIn} >Login</Button>
</div>
</Form>
</Card.Body>
<MDBCardFooter>
<h5 className="text-center font-weight-light">Not a Member? <Link to="/signup">Signup</Link></h5>
</MDBCardFooter> 
 </MDBCard>
</div>
<div className="col-md-4"></div>
</div>
</div>
)};

export default Login;