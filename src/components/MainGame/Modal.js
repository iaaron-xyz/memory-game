
const Modal = ({gameStatus, setGameStatus, setShowModal}) => {

  const handleBtnClick = (status, modal) => {
    setGameStatus(status);
    setShowModal(modal);
  }

  return (
    <div className="modal bg-black bg-opacity-10">
      {(gameStatus === 2) ? (
          <ModalContent
            key={'lost'}
            message={'You Lost!'}
            emojiSymbol={'🤕'}
            btnMessage={'Try Again!'}
            handleBtnClick={handleBtnClick}
          />
        ):(
          <ModalContent
            key={'win'}
            message={'You Won!'}
            emojiSymbol={'🎉'}
            btnMessage={'Play Again!'}
            handleBtnClick={handleBtnClick}
          />
        )}
    </div>
  )
}

const ModalContent = ({message, emojiSymbol, btnMessage, handleBtnClick}) => {
  return (
    <div className="modal-content flex flex-col justify-center items-center bg-white w-8/12 h-5/6 p-10 rounded-2xl">
      <h1 className="text-6xl mb-6">
        {message}
      </h1>
      <p
        className="card-status flex justify-center items-center text-6xl h-32 rounded-lg p-4 mt-4 border-2 border-slate-100">
          {emojiSymbol}
      </p>
      <button
        className="bg-main-color text-slate-50 mt-20 p-3 rounded-md"
        onClick={() => handleBtnClick(0, false)}>
          {btnMessage}
      </button>
    </div>
  );
}

export default Modal