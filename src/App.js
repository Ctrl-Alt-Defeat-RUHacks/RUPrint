import './App.css';
import MainPage from './mainPage.js';
import CoursePage from './coursePage.js'
import { Component } from 'react';
import actLogo from './actLogo.png';

var page = 1;


class App extends Component{

  constructor(){
    super()
    this.state={
      page: 1
    }
  }

  changePage(newPage){
    this.setState({
      page:newPage
    })
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
                <a class="navbar-brand" href="www.google.com"><h2 id="title"> <span style={{color: "#004c9b"}}>RU</span><span style={{color: "#ffdc00"}}>Print</span></h2></a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active"  onClick={()=>this.changePage(1)} aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" onClick={()=>this.changePage(2)} href="#">Courses</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link"  onClick={()=>this.changePage(3)}href="#">Help</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" >Logout</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="www.google.com" tabindex="-1" aria-disabled="true"><div>Firtname Lastname <img src={actLogo} style={{height: '30px'}}alt="acct"/></div></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
          {this.state.page===1 && <MainPage />}
          {this.state.page===2 && <CoursePage />}
          {this.state.page===3 && <p>help here</p>}
          
    </div>
  );
  }
}


export default App;
