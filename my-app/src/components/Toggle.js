import React from 'react'
class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
    // 在构造函数中使用bind显式绑定this 这个this代表当前组件（官方推荐）
    // this.handleClick = this.handleClick.bind(this)
  }
  // 如果不在构造函数中使用bind，可以使用箭头函数的形式（官方推荐）
  handleClick = () => {
    console.log(this)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render () {
    return (
      // <button onClick={() => this.handleClick()} className='btn toggle'>
      // 也可以将callback设置为箭头函数形式（官方不推荐）
      // 问题：每次都会创建一个不同的回调
      // 若父组件向子组件传递props，props不变，子组件不会重新渲染。
      // 但是回调为箭头函数时，父组件每次 render 的时候重新创建并赋值给子组件props。
      // 所有子组件的 Props 在“父组件的每次重新渲染”中都会有变动，也就导致了子组件在“父组件的每次重新渲染”中都会重新渲染。
      <button onClick={this.handleClick} className='btn toggle'>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}
export default Toggle