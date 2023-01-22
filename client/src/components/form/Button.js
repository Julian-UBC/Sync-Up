import React from 'react'

export const Button = ({ muted, danger, subtle, className, disabled, onClick, type, children }) => {
  let theme = 'bg-main text-white';

  if (muted) theme = 'bg-light-gray text-gray'
  else if (danger) theme = 'bg-red text-white';

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