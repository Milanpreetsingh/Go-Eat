import React from "react";

import {Button,Card,Form} from 'react-bootstrap'
import {MDBCard,MDBBtn,MDBIcon} from 'mdbreact';
import { Link } from "react-router-dom";

function SignupPage({googleLogin,emailSignUp,getEmail,getPass,getUser}){
    return (
    <div className="bgimage">
    <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4 mt-4 ">
    <div className="margin1">
    <MDBCard>
    <Card.Header style={{ height:'1.4cm' }}><h2 className="text-center" ><strong>Signup Form</strong></h2></Card.Header>

    <Card.Body>
    <Form >
    <Form.Group controlId="formBasicPassword">
      <Form.Label>User Name</Form.Label>
      <Form.Control type="text" placeholder="username" onChange={getUser}/>
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"   onChange={getEmail}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={getPass} />
    </Form.Group>
    
    <br></br>
    <div className="row justify-content-center">
    <Button variant="info" type="button" onClick={emailSignUp} >Register</Button>
    </div>
    <h6 className="text-center"><strong>or Login with</strong></h6>
    <div className="row justify-content-center">
    <MDBBtn color="indigo" disabled>
          <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
        </MDBBtn> 
        <MDBBtn color="deep-orange" onClick={()=>googleLogin()}>
          <MDBIcon fab icon="google-plus-g" className="pr-1" /> Google +
        </MDBBtn>
 </div>

  </Form>
  </Card.Body>
   </MDBCard>
   </div>
  </div>
  
  <div className="col-md-4"></div>
  </div>
  </div>
  )};

export default SignupPage;