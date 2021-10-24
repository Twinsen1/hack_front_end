import type {FC, ReactNode} from "react"

export type HeaderProps = {
  /* Element on the left side */
  before?: ReactNode
  /* Element on the right side */
  after?: ReactNode
}

export let Header: FC<HeaderProps> = ({before, after}) => {
  return (
    <header className="header">
      {before && <div className="before">{before}</div>}
      {after && <div className="after">{after}</div>}

      <style jsx>{`
        .header {
          display: flex;
          justify-content: center;
          align-items: center;

          max-width: 1520px;
          width: 100%;
          margin: 0 auto;
          min-height: 75px;
          padding: 10px 40px;
        }

        .before {
          flex-grow: 1;
        }
      `}</style>
    </header>
  )
}
