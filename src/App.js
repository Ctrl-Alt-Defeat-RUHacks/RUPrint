import './App.css';
import MainPage from './mainPage.js';
import CoursePage from './coursePage.js'
import { Component } from 'react';
import actLogo from './actLogo.png';

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
                <h2 id="title"> <span style={{color: "#004c9b"}}>RU</span><span style={{color: "#ffdc00"}}>Print</span></h2>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <button class="nav-link active headerButton"  onClick={()=>this.changePage(1)} aria-current="page">Home</button>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link headerButton" onClick={()=>this.changePage(2)}>Courses</button>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link headerButton"  onClick={()=>this.changePage(3)}>Help</button>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link headerButton" >Logout</button>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link disabled headerButton" tabindex="-1" aria-disabled="true"><div>Firtname Lastname <img src={actLogo} style={{height: '30px'}}alt="acct"/></div></button>
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
