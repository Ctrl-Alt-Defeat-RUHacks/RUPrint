import './App.css';
import MainPage from './mainPage.js';
import CoursePage from './coursePage.js';
import Navbar from './navbar.js';


function App() {
  return (
    <div className="App">
        <div class="container">
          <div class="row">
            <Navbar />
          </div>
          <div class="row">
            <MainPage />
          </div>
        </div>
    </div>
  );
}

export default App;
