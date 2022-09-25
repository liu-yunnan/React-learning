import Clock from "./clock"
import Welcome from "./welcom"
import Form from "./form"
import LoginController from "./LoginController"
import Mailbox from "../Mailbox"
import WarningBanner from './WarningBanner'
function Components (props) {
  const messages = ['React', 'Re: React', 'Re:Re: React']
  return (
    <div className="com_index">
      <Clock />
      <div className="com_content">
        <Welcome name='DoKiDoKi' fn={(data) => (
          <h1>{data}</h1>
        )} />
        {/* <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" /> */}
        <Form />
      </div>
      <LoginController />
      <Mailbox unreadMessages={messages} />
      <WarningBanner />
    </div>
  )
}
export default Components