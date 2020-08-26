import React from 'react';
import { Card } from 'antd';
import {ListGroup,Form} from 'react-bootstrap'; 
import {MDBCard,MDBIcon,MDBBtn} from 'mdbreact';
import {Link} from 'react-router-dom';
 
function Myaccount({myacc,user}){
    return(<div> 
<MDBCard>
<ListGroup>
  <ListGroup.Item><Form inline><h5><strong><MDBIcon icon="user" /> User Name: <img src = {user.photoURL} className="adjust img-fluid rounded-circle hoverable"/> {user.displayName}
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <MDBIcon icon="envelope" /> Mail Id: {user.email}</strong></h5>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <Link to ="/firstpage"><MDBBtn variant="info" type="button" color="deep-orange">Home</MDBBtn></Link>
</Form></ListGroup.Item>
  <ListGroup.Item><h5 ><strong><MDBIcon icon="table" /> My Booked Table:</strong></h5></ListGroup.Item>
</ListGroup>
</MDBCard>
  {myacc.map(p=><Card key = {p._id} className="hoverable">
      <h6><strong>Restaurant Name:</strong>{p.hname1}</h6>
      <h6><strong>Date:</strong> {p.date1}</h6>
      <h6><strong>Time:</strong> {p.time1}</h6>
      <h6><strong>People:</strong> {p.people1}</h6>
      <h6><strong>Charge:</strong> {p.charge1}</h6>
      <h6><strong>City:</strong> {p.city1}</h6>
      </Card>)}

</div>
    )
}

export default Myaccount;