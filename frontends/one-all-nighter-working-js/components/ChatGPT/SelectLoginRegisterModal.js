import React from 'react';
import Link from 'next/link';

const SelectLoginRegisterModal = ({ show, onClose }) => {
  if (!show) return null;

  const handleOutsideClick = (e) => {
    // Close the modal if the user clicks outside the modal content
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-yellow-400 p-8 rounded-3xl text-center shadow-lg"
        style={{ width: '700px' }}
        onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the overlay
      >
        <h2 className="text-blue-700 text-3xl font-bold mb-2">MASUK AKUN</h2>
        <p className="text-blue-600 text-lg mb-6">Anda akan masuk sebagai:</p>
        <div className="flex justify-center gap-10 mb-8">
          <Link href="/login">
            <button
              className="bg-white text-blue-700 font-bold py-10 px-20 rounded-2xl shadow-md border hover:border-blue-400 hover:scale-105"
              style={{ fontSize: '2.5rem' }}
            >
              PENJUAL
            </button>
          </Link>
          
          <button
            className="bg-white text-blue-700 font-bold py-10 px-20 rounded-2xl shadow-md border hover:border-blue-400 hover:scale-105"
            style={{ fontSize: '2.5rem' }}
          >
            PEMBELI
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectLoginRegisterModal;
