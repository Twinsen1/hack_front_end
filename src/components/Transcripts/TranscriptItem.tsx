import type {FC, HTMLAttributes} from "react"
import {Title} from "components"

export let TranscriptItem: FC<HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div className="item" {...props}>
      <header className="header">
        <Title level={3} mode="default">
          Внедрение механизмов упрощенной регистрации граждан в ЕСИА.
        </Title>
      </header>
      <footer className="footer">
        <div className="footer__before">
          <div className="description">
            <span>Дата:</span> 21 октября 2021
          </div>
          <div className="description">
            <span>Время:</span> 12:00
          </div>
        </div>
        <div className="footer__after"></div>
      </footer>

      <style jsx>{`
        .item {
          padding: 24px;
          border: 1px solid rgba(43, 57, 78, 0.2);
          border-radius: 36px;
          cursor: pointer;
          background: #fff;
          transition: 0.1s ease-in-out;
        }

        .item:hover {
          background: var(--main);
          color: #fff;
        }

        .footer {
          display: flex;
          align-self: center;

          margin-top: 80px;
        }

        .footer__before {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .description span {
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  )
}
