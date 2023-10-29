// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="nav-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="img2"
          />
        </div>
        <div className="three">
          <Link to="/" className="one">
            <li> Home</li>
          </Link>
          <Link to="/products" className="one">
            <li>Products</li>
          </Link>
          <Link to="/cart" className="one">
            <li>Cart</li>
          </Link>
          <button className="btn1" type="button">
            Logout
          </button>
        </div>
      </div>
    )
  }
}
export default Header
