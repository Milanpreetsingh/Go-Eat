import React from 'react';
import locale from 'antd/lib/date-picker/locale/en_US';
import { DatePicker,TimePicker} from 'antd';
import {Card,ListGroup,Dropdown,Button,Form} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import {MDBCard,MDBIcon,MDBContainer, MDBCardImage,MDBCardFooter} from 'mdbreact';

function Hotel({db,id,match,people,numpeople,date,time,details}){
  return(
    <div>
      {db.products[match.params.id] ?
      <div>
    
      
      <MDBCard className="hotelimage">
        <MDBCardImage className="img-fluid" src={db.products[match.params.id].image_url} waves />
        
      </MDBCard>   
      <ListGroup  variant="flush">
  <ListGroup.Item ><h3><strong>{db.products[match.params.id].name}</strong></h3></ListGroup.Item>
  <ListGroup.Item ><Form inline ><h6><strong><MDBIcon icon="map-marker-alt" />&nbsp;&nbsp;{db.products[match.params.id].address},&nbsp;{db.products[match.params.id].city},&nbsp;{db.products[match.params.id].country}</strong></h6></Form></ListGroup.Item>
  <ListGroup.Item ><Form inline ><h6><strong><MDBIcon icon="phone" />&nbsp;&nbsp;{db.products[match.params.id].phone}</strong></h6></Form></ListGroup.Item>
  <ListGroup.Item><Form inline ><h6><strong><MDBIcon icon="rupee-sign" />&nbsp;&nbsp;price for 2 people(approx):&nbsp;{db.products[match.params.id].price*100}&emsp;&emsp;<MDBIcon icon="star" />&nbsp;{db.products[match.params.id].price+0.5}</strong></h6></Form></ListGroup.Item>
  {/* <ListGroup.Item><Form inline ><h6><strong><MDBIcon icon="star" />&nbsp;{p.price}.5</strong></h6></Form></ListGroup.Item> */}
  </ListGroup>
    <MDBCard >
    <Card.Body>
    <Form inline className="container">
    <DatePicker locale={locale} onChange={date}/>
    &nbsp;&nbsp;<TimePicker locale={locale} onChange={time}/>
    &nbsp;&nbsp;<Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Select Persons
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={()=>numpeople(1)}>1</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={()=>numpeople(2)}>2</Dropdown.Item>
    <Dropdown.Item href="#/action-3" onClick={()=>numpeople(3)}>3</Dropdown.Item>
    <Dropdown.Item href="#/action-3" onClick={()=>numpeople(4)}>4</Dropdown.Item>
    <Dropdown.Item href="#/action-3" onClick={()=>numpeople(5)}>5</Dropdown.Item>
    <Dropdown.Item href="#/action-3" onClick={()=>numpeople(6)}>6</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown>
</Form><br></br>
<div className="container">
<h5 className=""><strong><MDBIcon icon="rupee-sign" /> Charges:{people[0]*100} &nbsp;&nbsp;&nbsp; <MDBIcon icon="user" />&nbsp;{people[0]} </strong></h5>
<Link to="/payment"><Button variant="info" type="submit" onClick={()=>details()}>Proceed to Pay</Button></Link>
</div>
</Card.Body>
</MDBCard>
<MDBCard>
<div>
<h3><strong>&emsp;Description:</strong></h3>
          <MDBContainer className="text-center my-3">
            <MDBCardFooter ><p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBCardFooter>
          </MDBContainer>
        
</div>
</MDBCard>
     </div>
     : "hello"
      }
      </div>
)}

export default Hotel;