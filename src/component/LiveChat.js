// src/components/LiveChat.js

import React, { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../util/chatSlice';

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [userMsg, setUserMsg] = useState('');
  const [live, setLive] = useState(true); // state to toggle chat visibility
  const chatContainerRef = useRef(null);

  // API Polling simulation (simulated random messages)
  useEffect(() => {
    const randomNames = ["Ravi", "Anjali", "Aryan", "Meera", "Shivam", "Neha", "Vikram", "Pooja"];
    const randomMessages = [
      "Hello there 👋",
      "What's up?",
      "Jai Shri Ram 🙏",
      "How are you doing?",
      "Coding is fun 💻",
      "React is awesome!",
      "Nice to meet you 😊",
      "Good vibes only ✨",
    ];

    const i = setInterval(() => {
      if (live) { // Check if chat is still active
        dispatch(addMessage({
          name: randomNames[Math.floor(Math.random() * randomNames.length)],
          msg: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        }));
      }
    }, 1500);

    return () => clearInterval(i);
  }, [dispatch, live]);

  // Auto-scroll on new message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle input send
  const handleSend = () => {
    if (userMsg.trim() !== '') {
      dispatch(addMessage({
        name: "You",
        msg: userMsg
      }));
      setUserMsg('');
    }
  };

  // Toggle live chat visibility
  const toggleLiveChat = () => {
    setLive(!live); // Toggle the live chat state
  };

  return (
    <div>
      {/* // if live == true */}
      {
      live ? (
        <div id='LivechatContainer' className="live-chat ml-2 p-1 w-full h-[600px] shadow-xl border-4 rounded-xl border-black flex flex-col">
          {/* Header */}
          <div className='border-b-2 p-3 shadow-md font-semibold flex justify-between items-center'>
            <h1 className='cursor-pointer flex items-center'>
              Top Chat
              <span>
                <img
                  src='https://www.svgrepo.com/show/520696/down-arrow-5.svg'
                  className='h-6 ml-2'
                  alt="arrow"
                />
              </span>
            </h1>
            <div className='flex items-center space-x-2'>
              <img
                src='https://www.svgrepo.com/show/345223/three-dots-vertical.svg'
                className='h-10 cursor-pointer hover:bg-gray-300 hover:rounded-full p-2'
                alt="menu"
              />
              <img
                src='https://www.svgrepo.com/show/521590/cross.svg'
                className='h-11 cursor-pointer hover:bg-gray-300 hover:rounded-full p-2'
                alt="close"
                onClick={toggleLiveChat} // Toggle live chat state
              />
            </div>
          </div>

          {/* Chat Messages */}
          <div
            className="overflow-y-scroll h-[500px] px-2 flex-1"
            ref={chatContainerRef}
          >
            {messages.map((m, i) => (
              <ChatMessage key={i} name={m.name} msg={m.msg} />
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t-2 px-2 pt-1 flex items-center space-x-2">
            <input
              type="text"
              className="w-full border rounded-lg p-2 outline-none"
              placeholder="Type a message..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        // if live == false
        <button
          onClick={toggleLiveChat}
          className="bg-slate-500 text-white px-4 py-2 hover:bg-slate-600 shadow-lg rounded-full"
        >
          Start Live Chat
        </button>
      )}
    </div>
  );
};

export default LiveChat;

// web sockets : Whatapp's chat UI is example.
// It is a tool for real-time communication between a client and a server. It allows for "bidirectional", event-based communication.
// "It is used for real-time updates, live updates, live scores, live chat".


// API Polling : G-mail is an example of API polling.
//  It is a " one-directiona "l communication between a client and a server.
// It is a technique used to fetch data from a server at regular intervals.
// It is used when the data is " not real-time " and the client needs to fetch the data at regular intervals. 


//Why youtube live chat is not frezing
// 1. Youtube live chat is not a real-time chat. It is a delayed chat.
// 2. Youtube live chat is a " one-directional " communication between a client and a server.
// 3. Youtube live chat is a " polling " based chat. It is not a " web socket " based chat.
// 4. Youtube live chat is a " server-side rendered " chat. It is not a " client-side rendered " chat.
// 5. Youtube live chat is a " API polling " based chat. It is not a " web socket " based chat.