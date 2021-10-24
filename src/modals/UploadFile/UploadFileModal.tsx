import type {FC, FormEvent} from "react"
import {useState} from "react"
import {navigate} from "@reach/router"
import {Modal, File, IconLoader} from "components"
import type {UploadResponse} from "types/api"
import {fetcher} from "lib/swr"

export const UploadFileModal: FC = () => {
  let [loading, setLoading] = useState(false)

  /**
   * Uploads audio to server
   * */
  async function handleUpload(e: FormEvent<HTMLInputElement>) {
    let audio = getAudioFile(e)

    if (audio) {
      // create form
      let form = new FormData()
      form.set("audio", audio)

      // upload to server
      setLoading(true)
      let response: UploadResponse = await fetcher("/upload", {
        method: "POST",
        body: form,
      })
      setLoading(false)

      // open `transcript` page
      navigate("/transcript", {
        replace: true,
        state: {
          transcript: response,
        },
      })
    }
  }

  return (
    <Modal onClose={() => navigate(-1)}>
      {loading &&
        <div className="spinner">
          <IconLoader />
        </div>
      }

      <File accept="audio/*" onChange={handleUpload} />

      <style jsx>{`
        .spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          background: rgba(0, 0, 0, .2);
        
          width: 100%;
          height: 100%;
          z-index: 10;
        }
      `}</style>
    </Modal>
  )
}

// HELPERS
function getAudioFile(e: FormEvent<HTMLInputElement>): File | undefined {
  let {
    currentTarget: {files}
  } = e

  return files?.[0]
}
