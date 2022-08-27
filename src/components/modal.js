const Modal = ({ isOn, setIsOn, content }) => {
  return isOn ? (
    <>
      <div
        id="modal"
        className="fixed z-50 inset-0 flex justify-center items-center bg-dark bg-opacity-80 overflow-y-auto h-screen w-screen"
      >
        <div className="card w-fit h-fit">
          <div className="flex justify-end icon-container">
            <button
              id="contact-close-button"
              className="btn-secondary p-0"
              onClick={() => setIsOn(false)}
            >
              X
            </button>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
