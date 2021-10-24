export type Bool = 0 | 1

export type UploadResponse = {
  success: Bool
  data: {
    annotation: string
    tags: string[]
    text: string
  }
}
