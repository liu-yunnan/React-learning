import React from "react"
function UserGreeting (props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting (props) {
  return <h1>Please sign up.</h1>
}

function Greeting (props) {
  let isLoggedIn = props.isLoggendIn
  if (isLoggedIn) return <UserGreeting />
  else return <GuestGreeting />

}

class LoginController extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoggendIn: false }
  }
  handleLoginClick = () => {
    this.setState({ isLoggendIn: true })
  }
  handleLogoutClick = () => {
    this.setState({ isLoggendIn: false })
  }
  render () {
    // 如果条件很复杂，建议提取组件
    // let button
    let isLoggendIn = this.state.isLoggendIn
    // if (isLoggendIn) {
    //   button = <button className="btn" onClick={this.handleLogoutClick}>Logout</button>
    // } else {
    //   button = <button className="btn" onClick={this.handleLoginClick}>Login</button>
    // }
    return (
      <div className="LoginController modle">
        <Greeting isLoggendIn={isLoggendIn} />
        {/* {button} */}
        {isLoggendIn ?
          <button className="btn" onClick={this.handleLogoutClick}>Logout</button>
          : <button className="btn" onClick={this.handleLoginClick}>Login</button>}
        <div>
          The user is <b>{isLoggendIn ? 'currently' : 'not'}</b> logged in.
        </div>
      </div>
    )
  }
}
export default LoginController