import React from 'react';

const ProductModal = ({ show, onClose }) => {
  if (!show) return null;

  const handleBackgroundClick = (e) => {
    // Close the modal only if the background (not modal content) is clicked
    if (e.target.id === 'modal-background') {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-[600px] p-6 relative">
        {/* Product Image */}
        <div className="w-full h-56 bg-gray-300 rounded-t-lg mb-6"></div>

        {/* Product Tags */}
        <div className="flex gap-2 mb-4">
          <span className="bg-red-500 text-white font-semibold px-3 py-1 rounded-lg text-sm">Trending 1</span>
          <span className="bg-blue-700 text-white font-semibold px-3 py-1 rounded-lg text-sm">Pakaian Dalam</span>
        </div>

        {/* Product Details */}
        <h3 className="text-2xl font-bold mb-2">Tank Top Anak-Anak</h3>
        <p className="text-xl font-semibold mb-2">Rp50.000</p>
        <p className="text-gray-700 mb-6">
          Tank top ini terbuat dari 100% katun, yang dikhususkan untuk menyerap keringat, sehingga keringat tidak mudah
          membasahi pakaian luar.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="flex items-center bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 10a7 7 0 1014 0 7 7 0 00-14 0zM8 9V7h4v2h-4zm0 2v4h4v-4h-4z" />
            </svg>
            Simpan Produk
          </button>
          <button className="flex items-center bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M16 6a2 2 0 100-4 2 2 0 000 4zM4 6a2 2 0 100-4 2 2 0 000 4zm12 4H4a4 4 0 00-4 4v1a2 2 0 002 2h16a2 2 0 002-2v-1a4 4 0 00-4-4z" />
            </svg>
            Masukkan Ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
