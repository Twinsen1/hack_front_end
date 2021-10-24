import type {FC} from 'react'

export type ModalProps = {
  onClose: () => void
}

export const Modal: FC<ModalProps> = ({onClose, children}) => {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">{children}</div>

      <style jsx>{`
        :global(#root) {
          overflow: hidden;
        }
        
        .overlay {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: var(--main);
          opacity: 0.7;
        }
        
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          
          max-width: 820px;
          max-height: 620px;
          width: 100%;
          height: 100%;
          
          padding: 16px;
          border-radius: 16px;
          background: var(--secondary);
        }
      `}</style>
    </>
  )
}
