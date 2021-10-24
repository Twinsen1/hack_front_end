import type {RouteComponentProps} from "@reach/router"
import {
  Header,
  HeaderBackButton,
  Button,
  Title,
  Spacing,
  Layout,
  Tag,
  TranscriptText,
} from "components"
import type {UploadResponse} from "types/api"
import {fetcher} from "lib/swr"

export type TranscriptPageState = {
  transcript: UploadResponse
}

export function TranscriptPage(_: RouteComponentProps) {
  let {transcript} = window.history.state as TranscriptPageState

  /**
   * Downloads DOCX file
   * */
  function downloadTranscript() {
    fetcher("/download", {
      method: "POST",
      body: JSON.stringify(transcript.data),
      headers: new Headers([["Content-Type", "application/json"]])
    })
  }

  if (isBadResponse(transcript)) {
    return <Layout error />
  }

  return (
    <div>
      <Header before={<HeaderBackButton />} />
      <Layout>
        <Spacing size={46} />
        <Title level={2} mode="default">{transcript.data.annotation}</Title>

        <Spacing size={26} />
        <Button mode="outline" onClick={downloadTranscript}>Выгрузить</Button>

        <Spacing size={26} />
        <div className="content">
          <p className="text">
            <TranscriptText>{transcript.data.text}</TranscriptText>
          </p>
          <div className="meta">
            <div className="tags">
              {transcript.data.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>

            <div className="ner">
              {/*<NerKeywords>{transcript.data.text}</NerKeywords>*/}
            </div>
          </div>
        </div>

        <Spacing size={24} />
      </Layout>

      <style jsx>{`
        .content {
          display: flex;
        }
        
        .content > * + * {
          margin-left: 15px;
        }
        
        /* text */
        .text {
          width: 100%;
          padding: 16px;
          border-radius: 16px;
          border: solid 1px var(--secondary);
          font-size: 18px;
          line-height: 26px;
        }
        
        /* meta */
        .meta {
          max-width: 520px;
          width: 100%;
        }
        
        /* tags */
        .tags {
          --spacing: 6px;
          
          display: flex;
          flex-wrap: wrap;
          margin: calc(var(--spacing) * -1);
        }
        
        .tags > :global(*) {
          margin: var(--spacing);
        }
        
        /* ner */
        .ner {
          display: flex;
          flex-direction: column;
        }
        
        .ner, 
        .ner > :global(*) + :global(*) {
          margin-top: 16px;
        }
      `}</style>
    </div>
  )
}

// HELPERS
function isBadResponse(response: UploadResponse) {
  return !response.data
}
