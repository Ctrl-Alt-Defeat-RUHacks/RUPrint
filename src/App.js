import './App.css';
import MainPage from './mainPage.js';
import Navbar from './navbar.js';


function App() {
  return (
    <div className="App">
        <Navbar />
        <div class="container">
          <div class="row">
            
          </div>
          <div class="row">
            <MainPage />
          </div>
        </div>
    </div>
  );
}

export default App;
