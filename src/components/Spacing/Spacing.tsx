import type {FC} from "react"

export type SpacingProps = {
  size: number
}

export let Spacing: FC<SpacingProps> = ({size, children}) => {
  return (
    <div className="spacing">
      {children}
      <style jsx>{`
        .spacing {
          width: 100%;
          padding: ${size / 2}px 0;
        }
      `}</style>
    </div>
  )
}
