import React from 'react';

const UsernameModal = ({ show, onClose }) => {
  if (!show) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-[300px] mt-16 mr-8 p-6 relative">
        {/* Greeting */}
        <h3 className="text-blue-700 text-lg font-bold mb-4">HALO, USERNAME!</h3>
        <hr className="border-gray-300 mb-4" />

        {/* Menu Items */}
        <div className="space-y-4">
          <button className="flex items-center justify-between w-full bg-yellow-400 text-blue-700 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition">
            <span>KERANJANG</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18l-1.5 13.5a2 2 0 01-2 1.5H6.5a2 2 0 01-2-1.5L3 3zm3 0V1h2v2H6zm10 0V1h2v2h-2zm-6 7a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z"
              />
            </svg>
          </button>
          <button className="flex items-center justify-between w-full bg-yellow-400 text-blue-700 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition">
            <span>TERSIMPAN</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18l-1.5 13.5a2 2 0 01-2 1.5H6.5a2 2 0 01-2-1.5L3 3zm3 0V1h2v2H6zm10 0V1h2v2h-2zm-6 7a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z"
              />
            </svg>
          </button>
          <button className="flex items-center justify-between w-full bg-yellow-400 text-blue-700 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition">
            <span>PENGATURAN</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
          </button>
        </div>

        {/* Logout */}
        <button className="flex items-center justify-between w-full border-2 border-red-500 text-red-500 font-bold py-2 px-4 rounded-lg hover:bg-red-100 transition mt-4">
          <span>KELUAR</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 17l5-5m0 0l-5-5m5 5H9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UsernameModal;
