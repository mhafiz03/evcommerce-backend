'use client'
 
import { useState } from 'react'
const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <header className="flex justify-between items-center p-6 bg-white absolute w-full">
          <h1 className="text-xl font-semibold text-[#00509D]">TOKOLIKU</h1>
          <nav className="space-x-10 ">              
            <a href="#About" className="text-[#00509D] hover:text-yellow-300">Tentang Kami</a>
            <a href="#Benefit" className="text-[#00509D] hover:text-yellow-300">Kontak</a>
          </nav>
      </header>
    </>

    
  );
};

export default Navbar;