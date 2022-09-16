/**
 * JSX样式处理
 * 行内样式 - 在元素身上绑定一个style属性
 * 类名 - className（推荐）在元素身上绑定一个className属性
 */

 import './app.css';
 const style ={color:'red',fontSize:'30px'};
 const showFlag = true;
 function App() {
   return (
     <div className="App">
       {/* 普通写法 */}
       <p style={{color:'red',fontSize:'30px'}}>this is span</p>
       {/* 更优写法(推荐) */}
       <p style={style}>this is span</p>
       {/* 类名样式 */}
       <p className='active'>类名样式</p>
       {/* 动态类名控制 */}
       <p className={showFlag?'active':''}>动态类名控制测试</p>
     </div>
   );
 }
 
 export default App;
 