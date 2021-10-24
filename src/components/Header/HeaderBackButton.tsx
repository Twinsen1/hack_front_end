import type {FC, HTMLAttributes} from "react"
import {navigate} from "@reach/router"
import {IconBack} from "components"

export const HeaderBackButton: FC<HTMLAttributes<HTMLDivElement>> = props => {
  function handleClick() {
    navigate(-1)
  }

  return (
    <div onClick={handleClick} className="back" {...props}>
      <IconBack />

      <style jsx>{`
        .back {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 40px;
          height: 40px;
          cursor: pointer;
        }

        .back:hover {
          opacity: 0.8;
        }

        .back > :global(svg) {
          width: 30px;
        }
      `}</style>
    </div>
  )
}
