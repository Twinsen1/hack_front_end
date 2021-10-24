import type {FC} from 'react'

export type NerItemProps = {
  count: number
  text: string
}

export const NerItem: FC<NerItemProps> = ({count, text}) => {
  return (
    <div className="item">
      <div className="counter">{count}</div>
      <span className="text">{text}</span>

      <style jsx>{`
        .item {
          display: flex;
          align-items: center;
          font-weight: 600;
          font-size: 15px;
        }
        
        /* counter */
        .counter {
          color: #fff;
          background: var(--main);
          border-radius: 90px;
          padding: 4px 8px;
          min-width: 50px;
          text-align: center;
        }
        
        /* text */
        .text {
          text-transform: uppercase;
          margin-left: 8px;
        }
      `}</style>
    </div>
  )
}
