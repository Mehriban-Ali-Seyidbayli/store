const Modal = ({ isModalOpen, close, children }) => {
  return (
    <div
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-40 ${
        isModalOpen ? 'flex' : 'hidden'
      }`}
    >
      <div className="bg-primary relative p-6 w-full max-w-2xl max-h-[calc(100vh-100px)] rounded-lg overflow-y-auto">
        <label
          onClick={close}
          className="btn  btn-circle absolute right-5 top-5 cursor-pointer"
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;
