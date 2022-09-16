/**
 * 条件渲染
 * 技术方案:三元表达式(常用) 逻辑&&运算
 */

// 满足条件才渲染一个
const flag=false;
function App() {
  return (
    <div className="App">
      {/* 三元 */}
      {flag?(
        <div>
          <span>this is span</span>
        </div>
      ):null}
      {/* 逻辑 */}
      {false && <span>this is span</span>}
    </div>
  );
}