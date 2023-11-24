export default function Modal({ isOpen, setModalOpen, children }) {
    if (isOpen) {
      return (
        <div style={BACKGROUND_STYLE}>
          <div style={MODAL_STYLE}>
            <div style={{ cursor: 'pointer'}} onClick={setModalOpen}>
            </div>
            <div>{children}</div>
            <button onClick={setModalOpen}>Fechar</button>
          </div>
        </div>
      )
    }
  
    return null
  }
  