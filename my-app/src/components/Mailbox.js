
function Mailbox (props) {
  const unreadMessages = props.unreadMessages
  const count = 0
  return (
    <div className="Mailbox modle">
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
      <div>
        这种情况，count = 0，会返回假的表达式 也就是0
        <hr />
        <b>{count && <h1>Messages:{count}</h1>}</b>
      </div>
    </div>
  )
}
export default Mailbox