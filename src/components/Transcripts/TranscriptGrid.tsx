import type {FC} from "react"
import {Children} from "react"

export let TranscriptGrid: FC = ({children}) => {
  let rowsCount = Children.toArray(children).length

  return (
    <div className="grid">
      {children}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(${rowsCount}, 1fr);
          gap: 20px 20px;
        }
      `}</style>
    </div>
  )
}
