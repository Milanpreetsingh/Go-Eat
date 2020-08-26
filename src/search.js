import {Form,Button,FormControl} from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";

function Search({getvalue,onclicksearch,newitem}){
return(
    <div className="img">
      <br></br><br></br><br></br><br></br>
    <Form inline className="  justify-content-center">
      <FormControl type="text" placeholder="Search" onChange={(e)=>getvalue(e)} className="mr-sm-2" />
      <Link to={`/hotel_list/${newitem}`}><Button variant="success" className="mr-sm-2" onClick={()=>onclicksearch()}>Search</Button></Link>
    </Form>
    <p className="text-center note"><strong>Note:Search by name of popular cities of US,Canada,China</strong></p>
    </div>
)}

export default Search;