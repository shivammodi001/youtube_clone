import React from 'react';

// Sample comment data
const CommentData = [
  {
    name: "Shivam Modi",
    text: "This is an awesome video!",
    reply: [
      {
        name: "Rohit Negi",
        text: "Absolutely agree with you!",
        reply: [
          {
            name: "John",
            text: "Same here!",
            reply: []
          }
        ]
      },
      {
        name: "Ankit",
        text: "Really enjoyed it!",
        reply: []
      }
    ]
  },
  {
    name: "Rina",
    text: "Thanks for sharing!",
    reply: []
  }
];

// Single comment component
const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex items-start gap-3 mb-4">
      <img
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
        className="w-10 h-10 rounded-full mt-1"
      />
      <div className="flex-1">
        <div className="bg-gray-100 p-3 rounded-lg">
          <h4 className="font-semibold text-sm">{name}</h4>
          <p className="text-sm text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
};

// Recursively renders a comment and its replies
const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} className="ml-4">
          <Comment data={comment} />
          {comment.reply && comment.reply.length > 0 && (
            <div className="ml-6 border-l border-gray-300 pl-4">
              <CommentList comments={comment.reply} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

// Main container
const CommentContainer = () => {
  return (
    <div className="max-w-2xl p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-6">Comments</h2>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentContainer;






