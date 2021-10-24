import type {FC} from 'react'

export type TranscriptTextProps = {
  children: string
}

export const TranscriptText: FC<TranscriptTextProps> = ({children: text}) => {
  return <>
    <span dangerouslySetInnerHTML={{__html: removeNerTags(text)}} />

    <style jsx>{`
      :global(.tag--person) {
        color: #0066FF;
      }
      
      :global(.tag--location) {
        color: #FF847C;
      }
      
      :global(.tag--org) {
        color: #E751D8;
      }
    `}</style>
  </>
}

// HELPERS
export let NER_TAG_REGEX = /(<PER>)|(<LOC>)|(<ORG>)/g

function removeNerTags(text: string) {
  let index = 0
  return text.replace(NER_TAG_REGEX, tag => {
    let isClosedTag = (index += 1) % 2 === 0

    return isClosedTag
      ? `</b>`
      : `<b class="${classNameByTag(tag)}">`
  })
}

function classNameByTag(tag: string) {
  if (tag.includes("PER")) return "tag--person"
  if (tag.includes("LOC")) return "tag--location"
  if (tag.includes("ORG")) return "tag--org"
}

