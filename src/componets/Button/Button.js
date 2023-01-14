import React from 'react'
import "./Button.css"


const Button = ({text , handleClick}) => {
  return (
    <div className="btn-container">
        <button className="button"
        onClick={handleClick}>
        {text}
        </button>
    </div>
  )
}

export default Button