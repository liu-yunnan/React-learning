import React from 'react'
// 每个文件都是单独的模块，不引入将不能识别React是什么
// 解决：使用webpack做配置
// 正确使用state：
// 1.不要直接修改state，这样组件不会重新渲染，要使用setState()
//  唯一可以赋值this.state的是constructor构造函数
// 2.state更新可能是异步的，React可以将多个setState()调用批处理为单个更新以提高性能
// 在setState中使用箭头函数也会像普通函数一样运行
// 3.state更新是合并的
// 4.数据流向下
// 一个组件可以通过props向其子组件传值
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      osts: [],
      comments: []
    }
  }
  // 组件已经渲染到DOM上
  componentDidMount () {
    // fetchPosts().then(response => {
    //   this.setState({
    //     posts: response.posts
    //   });
    // });
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  // 组件即将销毁,在这个阶段将定时器销毁
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div className='clock_div '>
        <h1>It is </h1>
        <h1 className='time' data-text={this.state.date.toLocaleTimeString()}>{this.state.date.toLocaleTimeString()}.</h1>
      </div>
    )
  }
}
export default Clock