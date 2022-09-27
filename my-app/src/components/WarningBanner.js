import React from "react"
function WarningBanner (props) {
  if (!props.warn) {
    return null
  }
  return (
    <div className="warning">
      warning!
    </div>
  )
}
class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: false }
  }
  handleWarningClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }
  render () {
    return (
      <div className="WarningBanner modle">
        <button className="btn" onClick={this.handleWarningClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <WarningBanner warn={this.state.showWarning} />
      </div>
    )
  }
}

export default Page