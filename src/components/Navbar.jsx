import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // Set state
  state = { clicked: false };
  // Make Handleclick Function
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trips</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times " : "fa fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active " : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          {/* <button>
            <a href="https://www.ahglab.com" target="_blank" rel="noreferrer">
              Sign Up
            </a>
          </button> */}
          <div className="dropdown">
            <a
              className="btn btn-info dropdown-toggle text fw-bold"
              href="https://www.ahglab.com"
              target="_blank"
              rel="noreferrer"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sign Up
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.ahglab.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Price
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.ahglab.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Promo
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.ahglab.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reservation
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
