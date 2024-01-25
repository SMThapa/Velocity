import '../style/UserProfile.scss'

export const UserProfile = () => {
  return (
    <div className="userProfile">
      <div className="userDetails">
        <p className="greetings">Hello, {sessionStorage.getItem('name')? sessionStorage.getItem('name'): sessionStorage.getItem('email')}</p>

        <div className="message">
          <p>Your account is in under review.</p>
        </div>
      </div>

      <div className="userChatSection">
        <div className="chat">
          {/* <div className="chat-title">
            <h1>Fabio Ottaviani</h1>
            <h2>Supah</h2>
            <figure className="avatar">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>
          </div> */}
          <div className="messages">
            <div className="messages-content"></div>
          </div>
          <div className="message-box">
            <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
            <button type="submit" className="message-submit">Send</button>
          </div>

        </div>
        {/* <div className="bg"></div> */}
      </div>
    </div>
  )
}
