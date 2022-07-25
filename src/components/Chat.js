import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";

import useStore from '../store'

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  const cid = useStore(state => state.chatID)

  useEffect(() => {
    db.collection(cid ? cid : auth.currentUser.uid)
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  });

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ text, messageid, uid }) => (
          <div key={messageid}>
            <div
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
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
