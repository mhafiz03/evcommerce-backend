import React, { useEffect } from 'react';

const AccountRegisterModal = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      // Prevent body scroll when the modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable body scroll when the modal is closed
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

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
      className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-start"
      style={{ height: '100vh', overflowY: 'scroll', paddingTop: '5vh', paddingBottom: '5vh' }}
      onClick={handleOutsideClick}
    >
      <div
        className="bg-yellow-400 p-8 rounded-3xl text-center shadow-lg"
        style={{ width: '600px', maxWidth: '90%' }}
        onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the overlay
      >
        <h2 className="text-blue-700 text-3xl font-bold mb-6">DAFTAR AKUN</h2>
        <form className="text-left space-y-6">
          {['NAMA PENGGUNA', 'NAMA LENGKAP', 'EMAIL', 'NOMOR TELEPON', 'ALAMAT RUMAH', 'KATA SANDI'].map((label, index) => (
            <div key={index}>
              <label className="block text-blue-700 text-lg font-bold mb-2" htmlFor={label}>
                {label}
              </label>
              <input
                id={label}
                type={label === 'EMAIL' ? 'email' : (label === 'KATA SANDI' ? 'password' : 'text')}
                className="w-full p-4 text-lg rounded-lg border border-gray-300 focus:outline-none"
              />
            </div>
          ))}
        </form>
        <div className="text-left mt-6">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-700 text-white font-bold text-lg rounded-full shadow-md cursor-pointer"
          >
            DAFTAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountRegisterModal;
