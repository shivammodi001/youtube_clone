import React from "react";

const ChatMessage = ({name,msg}) => {
  return (
    <div className="flex items-center shadow-md p-3 ">
      <img
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
        className="w-9 h-9 rounded-full cursor-pointer hover:opacity-75"
      />
      <span className="font-bold px-1">{name}</span>
      <span className="px-2">{msg}</span>
    </div>
  );
};

export default ChatMessage;
