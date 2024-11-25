import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000]">
      <div className="bg-yellow-400 p-5 rounded-3xl text-center w-auto">
        <h2 className="text-blue-700">MASUK AKUN</h2>
        <p className="text-blue-600">Anda akan masuk sebagai:</p>
        <div className="flex justify-around mt-4">
          <button className="bg-white text-[#00509D] border-2 p-20 mx-8 cursor-pointer rounded-md shadow-md ">
            PENJUAL
          </button>
          <button className="bg-white text-[#00509D] border-2  p-20 mx-8 cursor-pointer rounded-md shadow-md">
            PEMBELI
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-5 px-4 py-2 bg-red-600 text-white border-none rounded-md cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>

  );
};

export default Modal;
