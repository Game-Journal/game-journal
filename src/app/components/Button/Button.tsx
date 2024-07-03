'use client';

import { MouseEventHandler } from "react";

const Button = ({ label, type, onClick } : { label: string, type?: string, onClick?: MouseEventHandler}) => {

  return (
    <button
      className={`${type === 'secondary' ? 'bg-transparent border-2 border-xanthous' : 'bg-dodger-blue'} rounded-full py-2 px-16 min-w-80 h-16 text-2xl font-light`}
      onClick={onClick}
    >{label}</button>
  )
}

export default Button;