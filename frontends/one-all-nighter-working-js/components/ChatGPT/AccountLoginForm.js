import Link from 'next/link';
import React from 'react';

const AccountLoginForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-yellow-400 p-8 rounded-3xl text-center shadow-lg" style={{ width: '600px' }}>
        <h2 className="text-blue-700 text-3xl font-bold mb-2">MASUK AKUN</h2>
        <p className="text-blue-600 text-lg mb-4">Silahkan masukkan:</p>
        <div className="text-left mb-4">
          <label className="block text-blue-700 text-lg font-bold" htmlFor="username">
            NAMA PENGGUNA
          </label>
          <input
            id="username"
            type="text"
            className="w-full p-4 text-lg rounded-lg mb-4 border border-gray-300 focus:outline-none"
          />
        </div>
        <div className="text-left mb-8">
          <label className="block text-blue-700 text-lg font-bold" htmlFor="password">
            KATA SANDI
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-4 text-lg rounded-lg mb-4 border border-gray-300 focus:outline-none"
          />
        </div>
        <div className="text-right">
        <Link href="/store">
          <button
            className="px-6 py-3 bg-blue-700 text-white font-bold text-lg rounded-full shadow-md cursor-pointer"
            >
            MASUK
          </button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountLoginForm;
