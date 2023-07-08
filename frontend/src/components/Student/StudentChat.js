import React from "react";
import StudentNavBar from '../navbars/StudentNavBar'
import '../css/Chat.css'
const StudentChat = () => {
  return (
    <div >
      <StudentNavBar/>
    <div className="right chatbody">
      <div className="msger">
        <header className="msger-header">
          <div className="msger-header-title">
            <i className="fas fa-comment-alt"></i> SimpleChat
          </div>
          <div className="msger-header-options">
            <span>
              <i className="fas fa-cog"></i>
            </span>
          </div>
        </header>

        <main className="msger-chat">
          <div className="msg left-msg">
            <div
              className="msg-img"
              //  style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">David</div>
                <div className="msg-info-time">12:45</div>
              </div>

              <div className="msg-text">
                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
              </div>
              <div className="msg-text">
                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div
              className="msg-img"
              //  style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Sajad</div>
                <div className="msg-info-time">12:46</div>
              </div>

              <div className="msg-text">Hi How are you?</div>
            </div>
          </div>
          <div className="msg left-msg">
            <div
              className="msg-img"
              //  style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">David</div>
                <div className="msg-info-time">12:45</div>
              </div>

              <div className="msg-text">Great talking to you</div>
            </div>
          </div>

          <div className="msg right-msg">
            <div
              className="msg-img"
              //  style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Sajad</div>
                <div className="msg-info-time">12:46</div>
              </div>

              <div className="msg-text">Looking to meet you soon</div>
            </div>
          </div>
        </main>

        <form className="msger-inputarea">
          <input type="text" className="msger-input" placeholder="Enter your message..."/>
          <button type="submit" className="msger-send-btn">
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default StudentChat;
