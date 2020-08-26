import {Card,ListGroup} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link} from 'react-router-dom'

function Payment({people}){
    return(
    <div className="bgpayment img-fluid" >
    <div className="row">
    <div className="col-md-4"></div>
    <div className = "col-md-4 "> 
    <br></br> 
    <Card className ="mt-5 hoverable">
    <Card.Body>
    <h5 className="text-center"><strong>Pay: {people[0]*100}</strong></h5>
    <br></br>
  <ListGroup className="grab " variant="flush" >
  <Link to="/confirm"><ListGroup.Item className="hover"><strong className="text">PayTm</strong></ListGroup.Item></Link>
  <Link to="/confirm"><ListGroup.Item className="hover"><strong className="text">PhonePe</strong></ListGroup.Item></Link>
  <Link to="/confirm"><ListGroup.Item className="hover"><strong className="text">GooglePay</strong></ListGroup.Item></Link>
  <Link to="/confirm"><ListGroup.Item className="hover"><strong className="text">NetBanking</strong></ListGroup.Item></Link>
  <Link to="/confirm"><ListGroup.Item className="hover"><strong className="text">CashOnCounter</strong></ListGroup.Item></Link>
  </ListGroup>
    </Card.Body>
    </Card>
    </div>
    <div className="col-md-4"></div> 
    </div>
    </div>
)}

export default Payment;