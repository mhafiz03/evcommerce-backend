'use client'
import React, { useState } from 'react';
import ProductModal from './ProductModal';

const ProductCard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Product Card */}
      <div className="bg-white rounded-lg shadow-md w-[300px] p-4 overflow-hidden">
        {/* Product Image */}
        <div className="w-full h-48 bg-gray-300 rounded-t-lg mb-4"></div>

        {/* Product Tags */}
        <div className="flex gap-2 mb-4">
          <span className="bg-red-500 text-white font-semibold px-3 py-1 rounded-lg text-sm">Trending 1</span>
          <span className="bg-blue-700 text-white font-semibold px-3 py-1 rounded-lg text-sm">Pakaian Dalam</span>
        </div>

        {/* Product Title and Description */}
        <h3 className="text-xl font-bold mb-2">Tank Top Anak-Anak</h3>
        <p className="text-lg font-semibold mb-2">Rp50.000</p>
        <p className="text-gray-700 mb-4">
          Tank top ini terbuat dari 100% katun, yang dikhususkan untuk menyerap keringat, sehingga keringat tidak mudah
          membasahi pakaian luar.
        </p>

        {/* Lihat Produk Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 3a7 7 0 015.708 3.29l.582.58a7.003 7.003 0 010 8.26l-.582.58A7 7 0 1110 3zm0 2a5 5 0 00-4.73 3.29l-.58.58a5 5 0 000 5.26l.58.58A5 5 0 1010 5zm0 3a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Lihat Produk
          </button>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default ProductCard;
