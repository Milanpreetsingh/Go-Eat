import {Form,ListGroup} from 'react-bootstrap';
import React from 'react';
import {Link } from 'react-router-dom'
import { Card} from 'antd';
import { MountNode } from 'semantic-ui-react';
import {MDBIcon} from 'mdbreact'

function Hotel_list({db,onhotel,match}){
  const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };

      console.log("match",match.params.id)
return(
   <div >
       {db.products.map((p,index)=> <Link to={`/hotel/${index}`} onClick={()=>onhotel(p)} key = {p.id}><Card >
    <Card.Grid style={gridStyle}><img src = {p.image_url}/></Card.Grid>
    <ListGroup className="grab" variant="flush" >
  <ListGroup.Item ><h3 className="hoverable"><strong>{p.name}</strong></h3></ListGroup.Item>
  <ListGroup.Item ><Form inline ><h6 className="hoverable"><strong><MDBIcon icon="map-marker-alt" />&nbsp;&nbsp;{p.address},&nbsp;{p.area},&nbsp;{p.city}</strong></h6></Form></ListGroup.Item>
  <ListGroup.Item ><Form inline ><h6 className="hoverable"><strong><MDBIcon icon="phone" />&nbsp;&nbsp;{p.phone}</strong></h6></Form></ListGroup.Item>
  <ListGroup.Item><Form inline ><h6 className="hoverable"><strong><MDBIcon icon="table" />&nbsp;&nbsp;Available Seats: {p.price+4}/10</strong></h6></Form></ListGroup.Item>
  <ListGroup.Item><Form inline ><h6 className="hoverable"><strong><MDBIcon icon="rupee-sign" />&nbsp;&nbsp;price for 2 people(approx):&nbsp;{p.price*100}&nbsp;&emsp;<MDBIcon icon="star" /> {p.price}.5</strong></h6></Form></ListGroup.Item>
</ListGroup>
</Card></Link>,
  MountNode)}
</div>
)}

export default Hotel_list;