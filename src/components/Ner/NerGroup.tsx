import type {FC} from "react"
import {Title} from "components"

export type NerGroupProps = {
  title: string
}

export const NerGroup: FC<NerGroupProps> = ({title, children}) => {
  return (
    <div className="group">
      <Title level={3} mode="default">{title}</Title>
      <div className="items">{children}</div>

      <style jsx>{`
        .items {
          display: flex;
          flex-direction: column;
          margin-top: 12px;
        }
        
        .items > :global(*) + :global(*) {
          margin-top: 6px;
        }
      `}</style>
    </div>
  )
}
