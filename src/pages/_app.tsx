import "styles/index.css"
import {SWRConfig} from "swr"
import {Router} from "@reach/router"
import {fetcher} from "lib/swr"
import {ModalRoot} from "containers"
import {RootPage} from "pages/root"
import {TranscriptPage} from "pages/transcript"

export function App() {
  return (
    <SWRConfig value={{fetcher}}>
      {/* modals */}
      <ModalRoot />

      {/* routes */}
      <Router>
        <RootPage path="/" />
        <TranscriptPage path="/transcript" />
      </Router>
    </SWRConfig>
  )
}
