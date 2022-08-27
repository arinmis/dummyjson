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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </button>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
