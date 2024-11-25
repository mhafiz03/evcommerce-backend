import React from "react";
import {Palanquin} from "@next/font/google"

const palanquin = Palanquin({
  weight : '400', subsets: ["latin"]
})


const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between min-h-screen bg-gray-50 px-4 mx-10">
    <div className="max-w-lg ml-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">ADA YANG INGIN DISAMPAIKAN?</h1>
        <p className={`${palanquin.className} text-gray-600 text-lg mb-6`}>
          Apakah ada yang ingin disampaikan ke kami? Jika ada, anda bisa menyampaikan apa yang anda inginkan
          mengenai Tokoliku melalui laman formulir ini.
        </p>
        </div>
      <div className="max-w-lg w-full bg-white rounded-lg p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-600">
              NAMA
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-600">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-blue-600">
              PESAN
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tulis pesan Anda"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
