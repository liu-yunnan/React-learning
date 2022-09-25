import Toggle from "./Toggle"
function Form () {
  function handleSubmit (e) {
    // react 不可以使用 return false去阻止默认行为的发生，只能通过e.preventDefault()阻止
    e.preventDefault()
    console.log('You click submit!')
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className='btn'> submit </button>
      <Toggle />
    </form>
  )
}
export default Form