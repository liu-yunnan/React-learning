function Welcome (props) {
  let element = ''
  if (props.fn) {
    element = props.fn('Render Props test.')
  }

  return (
    <div className='welcom'>
      {element}
      <h2>Hello, {props.name} !</h2>

    </div>
  )
}
export default Welcome