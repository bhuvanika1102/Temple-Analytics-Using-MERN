import React from 'react';
import '../styles/HomePage.css';

function App() {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <div>
      {/* <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li>
              <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                  <li><a>Services</a></li>
                </button>
                <ul className="dropdown-menu">
                 <h6> <li>Donation</li>
                  <li>Darshan</li>
                  <li>Puja</li>
                  <li>Stay Allotments</li></h6>
                </ul>
              </div>
            </li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header> */}
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <w>Discover our amazing services and portfolio.</w>
        <br/>
        <br/>
        <a href="/templedetails" className="btn">Get Started</a>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>Owned by <br />Bhuvanika <br />Rajakumari <br />Suji <br /></p>
      </section>
      <footer>
        <p>&copy; 2023 Your Website</p>
      </footer>
    </div>
  );
}

export default App;

