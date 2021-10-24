import type {FC} from 'react'

export const Tag: FC = ({children}) => {
  return (
    <div className="tag">
      {children}

      <style jsx>{`
        .tag {
          padding: 16px;
          border-radius: 90px;
          border: solid 1px var(--secondary);
          text-transform: uppercase;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
