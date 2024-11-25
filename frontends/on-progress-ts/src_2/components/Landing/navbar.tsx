'use client'
 
import { useState } from 'react'
import Modal from './modal';
const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <header className="flex justify-between items-center p-6 bg-white absolute w-full">
          <h1 className="text-xl font-semibold text-[#00509D]">TOKOLIKU</h1>
          <nav className="space-x-10 ">              
            <a href="#About" className="text-[#00509D] hover:text-yellow-300">Tentang Kami</a>
            <a href="#Benefit" className="text-[#00509D] hover:text-yellow-300">Kontak</a>
            <button onClick={() => setShowModal(true)} type="button" className="text-white bg-[#00296B] hover:bg-blue-800 hover:outline-none hover:ring-4 hover:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Masuk</button>
            <button onClick={() => setShowModal(true)} type="button" className="text-[#00296B] bg-[#FFD500] hover:bg-[#ffff37] hover:outline-none hover:ring-4 hover:ring-[#ffe66a] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Daftar</button>
          </nav>
      </header>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>

    
  );
};

export default Navbar;