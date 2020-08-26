import React from 'react';
import './App.css';
import Home from './home.js'
import Login from './login.js';
import Signup from './signup.js';
import Firstpage from './firstpage.js'
import Search from './search.js';
import Hotel from './hotel.js'
import Hotel_list from './hotel_list'
import Payment from './payment';
import Confirm from './confirm';
import Myaccount from './myaccount';
import Hello from './hello.js'
import { Route,withRouter} from 'react-router-dom'
import axios from 'axios';
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsx1eyE_xHG09X5MNeJ4QC19JSFFlgvx4",
  authDomain: "mainproject-ea08e.firebaseapp.com",
  databaseURL: "https://mainproject-ea08e.firebaseio.com",
  projectId: "mainproject-ea08e",
  storageBucket: "",
  messagingSenderId: "868383345349",
  appId: "1:868383345349:web:1baf026c2e3617fa"
};
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props){
    super(props)
     this.state= {newitem:"",id:[0],people:[0],time:["a"], date:["a"] ,charge:[0],myacc:[],uid:[" "],user:"",
                  user:"",email:"",password:""}
     this.state.db = {
          products : [],
}}

details()
{
console.log("user",this.state.user.displayName)
  var obj = {people1:this.state.people[0],time1:this.state.time[0],date1:this.state.date[0],
          charge1:this.state.charge[0],hname1:this.state.id[0].name,city1:this.state.id[0].city,
          username1:this.state.user.displayName,useremail1:this.state.user.email}
console.log("user",obj.username1)
axios.post('/user',obj)
 .then((res)=>{
      console.log(res.data);
})
}

orderinfo(){
console.log(this.state.user.email)
axios.get('/user/'+this.state.user.email).then((res)=>{   
console.log("myacc res data",res.data)
    this.setState({myacc:res.data})
  })
console.log("myacc",this.state.myacc)
}

time(time,timeString){
  let t=this.state.time
  t[0]=timeString
this.setState({
  time:t
})
console.log(this.state.time)
}

date(date, dateString) {
  let t=this.state.date
  t[0]=dateString
    this.setState({
    date:t })
    console.log(this.state.date)
}

numpeople(b)
{
  let c = this.state.people
  let charge1=this.state.charge
  charge1[0]=b*100
  c[0] = b
  this.setState({people:c,charge:charge1})
  console.log(this.state.charge)
}

onhotel(item){
  let i = this.state.id
  i[0] = item
  this.setState({id:i})
  console.log(this.state.id)
}

onclicksearch(){ 
   
  axios.get('http://opentable.herokuapp.com/api/restaurants?city='+this.state.newitem)
     .then((res)=>{
      let db = this.state.db;
     db.products = res.data.restaurants;
       this.setState({ db:db})
       console.log(this.state.newitem)
    })
}


getvalue(e){
  var splitStr = e.target.value.toLowerCase().split(' ');
 for (var i = 0; i < splitStr.length; i++) {
   if (splitStr.length[i] < splitStr.length) {
     splitStr[i].charAt(0).toUpperCase(); 
  }
 var str = splitStr.join(' '); 
}
console.log(e.target.value)
  this.setState({
  newitem:str})
}
 
 componentDidMount(){
   console.log("ínside componentdidmount")
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
    this.setState({
      user:user
    }) 
     this.props.history.push('/firstpage') 
     // User is signed in.
    } else {
     this.props.history.push('/')  
     // No user is signed in.
    }
   });
}


logout(){
  firebase.auth().signOut().then(()=> {
  // Sign-out successful.
  this.setState({
    user:null
  })
  console.log("signout")
  this.props.history.push('/')  
  }).catch(function(error) {
  // An error happened.
  console.log("error")
  });
}

googleLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    console.log(user.displayName,user.email);
    this.setState({
         user:user})
    this.props.history.push('/firstpage') 
    console.log(this.state.user.displayName,this.state.user.email);     

  }).catch(function(error) {
    // Handle Errors here.
    console.log(error);
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

emailSignUp=()=>{
  const email=this.state.email;
  const pass=this.state.password;
  firebase.auth().createUserWithEmailAndPassword(email, pass).then((result)=>{
  // The signed-in user info.
  var user = result.user;
this.props.history.push('/login')
  console.log("email signup",user.displayName,user.email);
  // ...
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
  alert('The password is too weak.');
  } else {
  alert(errorMessage);
  }
  console.log(error);
  });
  }
  
  emailSignIn=()=>{
  const email=this.state.email;
  const pass=this.state.password;
  firebase.auth().signInWithEmailAndPassword(email, pass).then((result)=>{
  // The signed-in user info.
  var user = result.user;
  console.log("email signin",user.displayName,user.email);
  this.setState({
    user:user})
  this.props.history.push('/firstpage')
  // ...
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
  alert('Wrong password.');
  } else {
  alert(errorMessage);
  }
  console.log(error);
  // ...
  });
  }

getEmail=(e)=>{
  let f=e.target.value
  this.setState({
    email:f
  },()=>console.log("emal",this.state.email)
  )
}

getPass=(e)=>{
  let f=e.target.value
  this.setState({
    password:f
  },()=>console.log("pass",this.state.password))
}

getUser=(e)=>{
  let f=e.target.value
  this.setState({
    user:f
  },()=>console.log("pass",this.state.user))
}


render(){
  return(
    <div>
      <Hello/>
        <Route exact path="/"  component={Home} />      
        <Route path="/login"  render={()=><Login emailSignIn={this.emailSignIn.bind(this)} getPass={this.getPass.bind(this)} getEmail={this.getEmail.bind(this)}></Login>} />
        <Route path="/signup" render={()=><Signup emailSignUp={this.emailSignUp.bind(this)}  getUser={this.getUser.bind(this)} getPass={this.getPass.bind(this)} getEmail={this.getEmail.bind(this)} googleLogin={this.googleLogin.bind(this)}  user={this.state.user}></Signup>} />
        <Route path="/search" render={()=><Search db={this.state.db} newitem={this.state.newitem} user={this.state.user} getvalue={this.getvalue.bind(this)} onclicksearch={this.onclicksearch.bind(this)}></Search>} />       
        <Route path="/hotel_list/:id" render={(props)=><Hotel_list {...props} db={this.state.db}  onhotel = {this.onhotel.bind(this)}></Hotel_list> }/> 
        <Route path="/hotel/:id" render={(props)=><Hotel {...props} db={this.state.db} id = {this.state.id} people = {this.state.people} date={this.date.bind(this)}
          time={this.time.bind(this)}   numpeople={this.numpeople.bind(this)} details={this.details.bind(this)}></Hotel>} />        
        <Route path="/payment" render={()=><Payment people = {this.state.people}></Payment>} />        
        <Route path="/confirm"  render={()=><Confirm id={this.state.id} orderinfo={this.orderinfo.bind(this)}></Confirm>} />
        <Route path="/firstpage"  render={()=><Firstpage orderinfo={this.orderinfo.bind(this)} logout = {this.logout.bind(this)}></Firstpage>} />
        <Route path="/myaccount" render={()=><Myaccount myacc = {this.state.myacc} user={this.state.user}></Myaccount> }/>
    </div>
)}
}

export default withRouter(App);