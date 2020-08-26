import {Card,ListGroup,Button,Form} from 'react-bootstrap'
import React from 'react';
import {MDBCardImage} from 'mdbreact';
import {Link} from 'react-router-dom';
  
function Confirm({id,orderinfo}){
    return(
    <div >
    <div className="row">
    <div className="col-md-4"></div>
    <div className = "col-md-4">  
    <Card className ="mt-5 confirmimage hoverable">
    <Card.Body>
    
        <MDBCardImage className="img-fluid" src="https://www.norway-consulting.no/wp-content/uploads/2018/07/checkbox-2.png"  />
      
      
    <h4 className="alert alert-success text-center" role="alert">Table Is Booked </h4>
    <ListGroup  variant="flush">
  <ListGroup.Item><strong>Restaurant: {id[0].name}</strong></ListGroup.Item>
    </ListGroup>
    </Card.Body>
    </Card>
    <br></br>
    <Form inline className="justify-content-right">
      &emsp;&emsp;<Link to ="/firstpage"><Button variant="indigo" type="button" >Home</Button></Link>
      &emsp;&emsp;<Link to ="/myaccount"><Button variant="deep-orange" type="button" onClick={()=>orderinfo()} >Account</Button></Link>
</Form>
    </div>
    <div className="col-md-4"></div> 
    </div>
    </div>
)}

export default Confirm;