import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";

function Chat(props) {
  console.log("cid:", props.chatID)
  // console.log("uid:", auth.currentUser.uid);
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection(props.chatID ? props.chatID : auth.currentUser.uid)
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              {/* <img src={photoURL} alt="" /> */}
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
