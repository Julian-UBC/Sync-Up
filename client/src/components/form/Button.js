import React from 'react'

export const Button = ({ muted, danger, subtle, className, disabled, onClick, type, children }) => {
  let theme = 'bg-main text-white';

  if (muted) theme = 'bg-white text-gray'
  else if (danger) theme = 'bg-red text-white'
  else if (subtle) theme = 'bg-light-green text-black'

  return (
    <button
      className={`${theme} flex justify-center items-center rounded-xl ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
