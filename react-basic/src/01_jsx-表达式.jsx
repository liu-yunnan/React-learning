// 识别常规的变量
// 原生方法调用

/**
 *  可以使用的表达式
    字符串、数值、布尔值、null、undefined、object（ [] / {} ）
    1 + 2、'abc'.split('')、['a', 'b'].join('-')
    fn()
 */

const name = 'xxx';
const getAge =()=>{
  return 18;
}
function App() {
  return (
    <div className="App">
      {/* {js 表达式} */}
      {name}
      {getAge()}
    </div>
  );
}

export default App;
