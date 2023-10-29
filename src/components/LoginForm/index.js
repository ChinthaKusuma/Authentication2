// Write your JS code here
import {Component} from 'react'
// import {Link} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', para: false, errorMsg: ''}

  changeName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  changePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSucess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({
      para: true,
      errorMsg,
    })
  }

  onSubmit1 = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}
    // if (username === '') {
    //   this.setState({
    //     para: 'Enter Username',
    //   })
    // }
    // if (password === '') {
    //   this.setState({
    //     para: 'Enter Password',
    //   })
    // }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    // eslint-disable-next-line
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSucess()
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, para} = this.state

    return (
      <div className="login_container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="logo"
            alt="website login"
          />
        </div>
        <form className="form_container" onSubmit={this.onSubmit1}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="img3"
          />
          <br />
          <label htmlFor="one">USERNAME</label>
          <br />
          <input
            type="text"
            id="one"
            placeholder="Username"
            className="input1"
            onChange={this.changeName}
            value={username}
          />

          <br />
          <br />
          <label htmlFor="two">PASSWORD</label>
          <br />
          <input
            type="password"
            id="two"
            placeholder="Password"
            className="input1"
            onChange={this.changePassword}
            value={password}
          />
          {para === true && <p className="para123">{errorMsg}</p>}
          <br />
          <br />

          <button className="btn2" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default LoginForm
