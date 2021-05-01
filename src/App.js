import './App.css';
import MainPage from './mainPage.js';
import CoursePage from './coursePage.js';


function App() {
  return (
    <div className="App">
        <div class="container">
          <div class="row">
            <h2 id="title"> <span style={{color: "#004c9b"}}>RU</span><span style={{color: "#ffdc00"}}>Print</span></h2>
          </div>
          <div class="row">
            <CoursePage />
          </div>
        </div>
    </div>
  );
}

export default App;
