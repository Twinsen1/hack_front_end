import type {FC, HTMLAttributes} from "react"
import {classNames as cn} from "lib/cn"

export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6
export type TitleMode = "landing" | "default"

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  level: TitleLevel
  mode: TitleMode
}

export let Title: FC<TitleProps> = ({mode, level, ...rest}) => {
  let Component = "h" + level

  return (
    <>
      <Component className={cn("heading", `heading--${mode}`, `heading--l-${level}`)} {...rest} />

      <style jsx>{`
        .heading {
          font-weight: 500;
          letter-spacing: -1px;
        }

        .heading--l-2 {
          font-size: 50px;
        }

        .heading--l-3 {
          font-size: 28px;
          line-height: 35px;
          letter-spacing: -1px;
        }

        .heading--landing {
          font-weight: bold;
          font-size: 110px;
          line-height: 110px;
          text-transform: uppercase;
          color: var(--pink);
        }
      `}</style>
    </>
  )
}
