

/**
 * 事件绑定
 * 语法：on + 事件名称 = { 事件处理程序 } ，比如：<div onClick={()=>{}}></div>
 * 注意：驼峰命名 比如：onMouseEnter、onFocus
*/
import React from "react"
/**
 * 函数组件的创建和渲染
 * 注意：
 *  -组件的名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签
 *  -函数组件必须有返回值，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
 *  -组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的返回值就是对应的内容
 *  -使用函数名称作为组件标签名称，可以成对出现也可以自闭合
 */
// 创建
/**
 * 传递自定义参数
 * 1.只需要一个额外参数 () => clickHandler('this is msg')
 * 2.需要e也需要额外参数  (e) => clickHandler(e,'this is msg')
 */
function Hello () {
  // 事件对象e
  // const clickHandler = (e) => {
  //   // 阻止默认行为
  //   e.preventDefault()
  //   console.log('函数组件中的事件被触发了', e)
  // }
  const clickHandler = (e, msg) => {
    console.log('函数组件中的事件被触发了', e, msg)
  }
  // eslint-disable-next-line no-undef
  return <div onClick={() => clickHandler('this is msg')} >click me</div>
}
// 渲染Hello
/**
 * 类数组的创建和渲染
 * 注意：
 *  -组件的名称必须首字母大写
 *  -类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
 *  -类组件必须提供 render 方法render 方法必须有返回值，表示该组件的 UI 结构
 */
// 创建
class HelloComponent extends React.Component {
  // 事件回调函数（标准写法，避免this指向问题）
  // 箭头函数 this指向了当前的组件的实例对象
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }
  render () {
    return <div onClick={this.clickHandler}>这是一个类组件</div>
  }
}
/**
 * 组件状态
 * 注意：在react hook出来之前，函数式组件是没有自己的状态的
 * 类组件讲解组件状态：初始化状态 -> 读取状态->修改状态->影响状态(视图使用新状态自动更新)
 */
class Counter extends React.Component {
  // 1.定义组件状态
  state = {
    // 在这里可以定义各种属性，全都是当前组件的状态
    name: 'xxx'
  }
  // 事件回调函数
  changeName = () => {
    // 3.修改state中的状态name
    /**
     * 修改状态不可以直接做赋值修改 必须通过一个方法 setState
     * this.setState({ 要修改的部分数据 })
     * 思想：数据驱动视图，也就是只要修改数据状态，那么页面就会自动刷新，无需手动操作dom
     */
    this.setState({
      name: 'change'
    })
  }
  render () {
    // 2.使用状态
    return (
      <div>
        this is TestComponent
        <br />
        name:{this.state.name}
        <button onClick={this.changeName}>change Name</button>
      </div>
    )
  }
}
function App () {
  return (
    <div className="App">
      {/* 渲染hello组件 */}
      <Hello></Hello>
      <Hello />
      <HelloComponent></HelloComponent>
      <Counter></Counter>
    </div>
  )
}

export default App

