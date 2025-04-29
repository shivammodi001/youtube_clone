import React from 'react'

const Button = (props) => {
  return (
    <button 
      className="px-5 py-2 rounded-lg m-1 bg-gray-600 hover:bg-gray-700 text-white whitespace-nowrap"
    >
      {props.name}
    </button>
  )
}

export default Button;