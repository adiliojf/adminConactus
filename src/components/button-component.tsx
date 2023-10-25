import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?(value: any): void,
  children?: React.ReactNode,
}

export function ButtonComponent({type, className, onClick, children} : ButtonProps) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children} 
      </button>
    </>    
  )
}