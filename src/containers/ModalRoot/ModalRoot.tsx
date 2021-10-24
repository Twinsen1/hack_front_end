import type {FC} from 'react'
import {useMemo} from "react"
import {createPortal} from "react-dom"
import {Location, WindowLocation} from "@reach/router"
import {UploadFileModal} from "modals"

export const ModalRoot: FC = () => {
  let container = useMemo(() => document.getElementById("modals"), [])

  // warn?
  if (!container) {
    return null
  }

  return (
    createPortal(
      <Location>
        {({location}) => {
          let id = getOpenedModalID(location)

          switch (id) {
            case "upload": return <UploadFileModal />
            default:       return null
          }
        }}
      </Location>,
      container
    )
  )
}

// HELPERS
function getOpenedModalID(location: WindowLocation): string | null {
  let searchParams = new URLSearchParams(location.search)
  return searchParams.get("modal")
}
