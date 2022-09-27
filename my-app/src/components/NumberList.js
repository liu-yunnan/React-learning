// var shortId = require("shortid")
// 生成“短的不连续的 URL 友好唯一”id
function ListItem (props) {
  return (
    <li>{props.value}</li>
  )
}
function NumberList (props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    // key值是一个唯一的标记的（在兄弟列表项之间）、字符串的属性
    // 如果项的顺序可能更改，则不建议使用索引当key值

    // 以下情况可以使用index作为key：
    // 列表和项目是静态的——它们不会被计算，也不会改变;
    // 列表中的项目没有 ID; 
    // 列表从不重新排序或过滤。
    // 当满足所有这些要求时，您可以安全地使用索引作为键。
    <ListItem key={number.toString()} value={number} />
  )
  return (
    <ul className="modle">
      {listItems}
    </ul>
  )
}
export default NumberList