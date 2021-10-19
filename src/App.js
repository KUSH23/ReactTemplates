import logo from './assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div class="hero">
      <div class="navbar">
        <img src={logo} class="logo" alt="logo" />
        <div class="navcontent">
          <div class="navtab dropdown">
            <button class="dropbtn">Social</button>
          </div>
          <div class="navtab dropdown">
            <button class="dropbtn">Exchange</button>
            <div class="dropdown-content">
              <a href="#">P2P</a>
              <a href="#">Lending</a>
              <a href="#">Borrowing</a>
              <a href="#">Stacking</a>
            </div>
          </div>
          <div class="navtab dropdown">
            <button class="dropbtn">ContactUs</button>
          </div>
          <div class="navtab dropdown">
            <button class="dropbtn">OurStory</button>
          </div>
          <button class="navtab loginbutton" type="button">Login</button>
        </div>
      </div>
      <div class="content">
        <h2>Title Comes Here</h2>
        <h3>Simpler. Safer. Social</h3>
        <button class="getstarted" type="button">Get Started</button>
      </div>
    </div>
  );
}

export default App;
