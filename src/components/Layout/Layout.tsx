import type {FC} from "react"
import {Title, Header, HeaderBackButton} from "components"

export type LayoutProps = {
  error?: boolean
}

export let Layout: FC<LayoutProps> = ({error, children}) => {
  if (error) {
    return (
      <>
        <Header before={<HeaderBackButton />} />
        <Layout>
          <Title level={1} mode="default">Произошла ошибка</Title>
        </Layout>
      </>
    )
  }

  return (
    <main className="layout">
      {children}
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;

          max-width: 1520px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
        }

        .layout > :global(*) {
          align-self: flex-start;
        }
      `}</style>
    </main>
  )
}
