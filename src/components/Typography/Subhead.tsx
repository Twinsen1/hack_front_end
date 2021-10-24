import type {FC} from "react"

export const Subhead: FC = ({children}) => {
  return (
    <span className="subhead">
      {children}
      <style jsx>{`
        .subhead {
          font-size: 24px;
          line-height: 30px;
        }
      `}</style>
    </span>
  )
}
