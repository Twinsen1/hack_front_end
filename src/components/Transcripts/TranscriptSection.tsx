import type {FC} from "react"
import {Title, Separator, Spacing} from "components"

export type TranscriptsProps = {
  title: string
}

export let TranscriptSection: FC<TranscriptsProps> = ({title, children}) => {
  return (
    <section className="transcripts">
      <Spacing size={25}>
        <Separator />
      </Spacing>
      <header className="header">
        <Title level={2} mode="default">
          {title}
        </Title>
      </header>
      <Spacing size={25} />
      {children}

      <style jsx>{`
        .transcripts {
          width: 100%;
        }
      `}</style>
    </section>
  )
}
