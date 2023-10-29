// import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  // eslint-disable-next-line
  const {item} = props
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="c1">
          <div className="c2">
            <h1 className="heading">Clothes That Get YOU Noticed</h1>
            <p className="para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time.Clothes have analysis been a market of the
              era and we are import from a revolution . Fashion is part of the
              daily air and it does not quite help that it changes all the
              time.Clothes have analysis been a market of the era and we are
              import from a revolution
            </p>
            <button className="btn3" type="button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            className="img34"
            alt="clothes that get you noticed"
          />
        </div>
      </div>
    </>
  )
}
export default Home
