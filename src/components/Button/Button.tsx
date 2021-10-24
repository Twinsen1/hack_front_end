import type {FC, HTMLAttributes} from "react"
import {classNames as cn} from "lib/cn"

export type ButtonMode = "outline" | "default"

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  mode: ButtonMode
}

export const Button: FC<ButtonProps> = ({mode, children, ...rest}) => {
  return (
    <button className={cn("button", `button--${mode}`)} {...rest}>
      {children}

      <style jsx>{`
        .button {
          padding: 10px 32px;
          background: var(--main);
          border-radius: 28px;
          color: #fff;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          font-weight: 500;
          font-size: 16px;
          transition: opacity 0.15s ease-in-out;
        }
        
        .button:hover {
          opacity: 0.9;
        }
        
        .button--outline {
          background: transparent;
          color: var(--main);
          border: solid 2px var(--main);
        }
      `}</style>
    </button>
  )
}
