import type {FC, HTMLAttributes} from "react"

export type FileProps = HTMLAttributes<HTMLInputElement> & {
  accept?: string
}

export const File: FC<FileProps> = props => {
  return (
    <div className="file-container">
      <input className="file" type="file" title="" {...props} />
      <span className="file-text">Загрузить аудиофайл</span>

      <style jsx>{`
        .file {
          font-size: 0px;
          opacity: 0;
        }
        
        .file-container,
        .file {
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: relative;
        }
        
        .file-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: 500;
          font-size: 31px;
        }
      `}</style>
    </div>
  )
}
