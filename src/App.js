import './App.css';
import MainPage from './mainPage.js';
import CoursePage from './coursePage.js'
import { Component } from 'react';
import actLogo from './actLogo.png';
import HelpPage from './help.js';

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyDpCuJ6c_e96MPIPQtub_BQ1moansQTqhk",
  authDomain: "ruprint-9af34.firebaseapp.com",
  projectId: "ruprint-9af34",
  storageBucket: "ruprint-9af34.appspot.com",
  messagingSenderId: "478192935317",
  appId: "1:478192935317:web:679baf83be9040b4a2169c",
  measurementId: "G-K7WHF79R91"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var provider = new firebase.auth.GoogleAuthProvider();



var db = firebase.firestore();
var tableA= [];
var tableB= [];
var tableI= [];
var tableO= [];

db.collection("TableA")
    .orderBy("name", "asc").get().then(
      (querySnapshot) => { querySnapshot.forEach((doc) => {
      if (doc.exists){
        tableA.push(doc.data());
      } else {
        console.log("No such document!");
      }})
      console.log(tableA);
      console.log(tableA[0]);
    }).catch((error) => {
        console.log("Error getting document:", error);
});

db.collection("TableB")
    .orderBy("name", "asc").get().then(
      (querySnapshot) => { querySnapshot.forEach((doc) => {
      if (doc.exists){
        tableB.push(doc.data());
      } else {
        console.log("No such document!");
      }})
      console.log(tableB);
      console.log(tableB[0]);
    }).catch((error) => {
        console.log("Error getting document:", error);
});

db.collection("TableI")
    .orderBy("name", "asc").get().then(
      (querySnapshot) => { querySnapshot.forEach((doc) => {
      if (doc.exists){
        tableI.push(doc.data());
      } else {
        console.log("No such document!");
      }})
      console.log(tableI);
      console.log(tableI[0]);
    }).catch((error) => {
        console.log("Error getting document:", error);
});

db.collection("TableO")
    .orderBy("name", "asc").get().then(
      (querySnapshot) => { querySnapshot.forEach((doc) => {
      if (doc.exists){
        tableO.push(doc.data());
      } else {
        console.log("No such document!");
      }})
      console.log(tableO);
      console.log(tableO[0]);
    }).catch((error) => {
        console.log("Error getting document:", error);
});

class App extends Component{

  constructor(){
    super()
    this.state={
      page: 1,
      courses: Array(71).fill(null),
      lastBox: null,
      username: null
    }

    this.changePage2= this.changePage2.bind(this)
  }

  changePage(newPage){
    this.setState({
      page:newPage
    })
  }
  changePage2(newPage, courseNum, course, newlastBox){
    if(courseNum != null){
      var courses2 = this.state.courses;
      courses2[courseNum] = course;
      this.setState({
        courses: courses2
      })
    }
    this.setState({
      page:newPage,
    })
    this.setState({
        lastBox: newlastBox
    })
    
  }

  changeUsername(newUserName){
    this.setState({
      username: newUserName
  })
  }

  signin(){
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      this.changeUsername(user.displayName);
      this.changePage(1);
      // ...
    });
  }

  render(){
  return (
    <div className="App">
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ruNav">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <h2 id="title"> <span style={{color: "#004c9b"}}>RU</span><span style={{color: "#ffdc00"}}>Print</span></h2>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <button class="nav-link active headerButton"  onClick={()=>this.changePage(1)} aria-current="page">Home</button>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link headerButton" onClick={()=>this.changePage2(2,null,null,70)}>Courses</button>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link headerButton"  onClick={()=>this.changePage(3)}>Help</button>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link headerButton" onClick={()=>this.changePage(4)}>{this.state.username === null?"Login":"Logout"}</button>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link disabled headerButton" tabindex="-1" aria-disabled="true"><div>{this.state.username === null?"Not Signed In": this.state.username} <img src={actLogo} style={{height: '30px'}}alt="acct"/></div></button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
          {this.state.page===1 && <MainPage changePage2={this.changePage2} courses={this.state.courses}/>}
          {this.state.page===2 && <CoursePage tableA={tableA} tableB={tableB} tableI={tableI} tableO={tableO} lastBox={this.state.lastBox} changePage2={this.changePage2}/>}
          {this.state.page===3 && <HelpPage />}   
          {this.state.page===4 && <div class="loginPage"><h4>Login Using Google Sign In <br></br><br></br></h4><button onClick={()=>this.signin()}>Sign In</button></div>}       
    </div>
  );
  }
}


export default App;
