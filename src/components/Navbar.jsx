import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/img/logo.png";
import handbag from "../assets/img/ph_handbag.svg";
import Frame from "../assets/img/Frame 25.svg";
import Group from "../assets/img/Group.svg";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);
  return (
    <div>
      <div className="App__navbar">
        <div className="App__navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="App__navbar-links">
          <Link to="/">Home</Link>
          <Link to="/">Our Bottles</Link>
          <Link to="/">Our Story</Link>
          <Link to="/">Co Branding</Link>
          <Link to="/">Contact us</Link>
        </div>
        <div className="App__navbar-icons">
          <p>
            <img src={Group} alt="Group" />
          </p>
          <div className="border-line"></div>
          <p>
            <img src={handbag} alt="handbag" />
          </p>
          <div className="border-line"></div>
          <p>
            <img src={Frame} alt="Frame" />
          </p>
        </div>
        <div className="App__navbar-smallscreen">
          <GiHamburgerMenu
            color="#F59F1E"
            fontSize={25}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="App__navbar-smallscreen-overlay flex__center slide-bottom">
              <RxCross1
                color="#007bff"
                fontSize={32}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />

              <Link to="/">Home</Link>
              <Link to="/">Our Bottles</Link>
              <Link to="/">Our Story</Link>
              <Link to="/">Co Branding</Link>
              <Link to="/">Contact us</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
