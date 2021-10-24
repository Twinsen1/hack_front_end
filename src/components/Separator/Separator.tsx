import type {FC} from "react"

export let Separator: FC = () => {
  return (
    <div className="separator">
      <style jsx>{`
        .separator {
          width: 100%;
          height: 1px;
          background: #2b394e;
          opacity: 0.4;
        }
      `}</style>
    </div>
  )
}
