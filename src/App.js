import './App.css';
import MainPage from './mainPage.js';
import CoursePage from './coursePage.js';


function App() {
  return (
    <div className="App">
        <div class="container">
          <div class="row">
            <h2>RUPrint</h2>
          </div>
          <div class="row">
            <CoursePage />
          </div>
        </div>
    </div>
  );
}

export default App;
