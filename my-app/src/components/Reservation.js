import React from "react"
class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }
  handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    // 根据name，决定哪个状态需要更改
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }
  render () {
    return (
      <form className="modle">
        <section>当表单中有多个input元素，需要给input元素加上一个额外的name属性，让 Handler 函数根据<code>event.target.name</code>的值来选择要做什么。</section>
        <label>
          {/* 设置input的初始值，可以让input不可编辑 */}
          {/* 如果想要设置初始值并且可编辑，就需要设置input的value为undefined或者null */}
          Is going:
          <input
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Numbers of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }
}
export default Reservation