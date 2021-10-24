import type {RouteComponentProps} from "@reach/router"
import {navigate} from "@reach/router"
import {
  Header,
  Layout,
  Spacing,
  Title,
  Subhead,
  Button,
} from "components"

export function RootPage(_: RouteComponentProps) {
  function openUploadFileModal() {
    navigate("?modal=upload")
  }

  return (
    <div>
      <Header />
      <Layout>
        <Title level={1} mode="landing">
          Cтенограммы
          <br /> заседаний
        </Title>
        <Spacing size={25} />

        <Subhead>
          Загрузите аудиозапись заседания
          <br />и мы создадим его стенограмму
        </Subhead>
        <Spacing size={25} />

        <Button mode="default" onClick={openUploadFileModal}>Загрузить</Button>
      </Layout>
    </div>
  )
}
