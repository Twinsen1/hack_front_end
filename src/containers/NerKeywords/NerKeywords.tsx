import type {FC} from 'react'
import {NerGroup, NerItem, NER_TAG_REGEX} from "components"

export type NerKeywordsProps = {
  children: string
}

export const NerKeywords: FC<NerKeywordsProps> = ({children: text}) => {
  return (
    <>
      <NerGroup title="Люди">
        <NerItem count={10} text="Анна Лаки" />
        <NerItem count={10} text="Анна Лаки" />
        <NerItem count={10} text="Анна Лаки" />
      </NerGroup>

      <NerGroup title="Локации">
        <NerItem count={10} text="Анна Лаки" />
        <NerItem count={10} text="Анна Лаки" />
        <NerItem count={10} text="Анна Лаки" />
      </NerGroup>

      <NerGroup title="Время">
        <NerItem count={10} text="Анна Лаки" />
        <NerItem count={10} text="Анна Лаки" />
        <NerItem count={10} text="Анна Лаки" />
      </NerGroup>
    </>
  )
}
