import { useState } from "react";
import { Palanquin } from 'next/font/google';
import React from 'react';
import RegisterForm from "./RegisterForm";

const palanquin = Palanquin({
  weight : '400', subsets: ["latin"]
})

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000] bg-black bg-opacity-50 transition-opacity duration-300 ${
          show ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        >
        <div
          className={`bg-yellow-400 p-20 rounded-3xl text-center w-[1024px] transform transition-transform duration-300 ${
            show ? 'translate-y-0' : 'translate-y-full'
          }`}
          >
          <h2 className="text-blue-700 text-6xl">MASUK AKUN</h2>
          <p className={`${palanquin.className} text-blue-600 text-3xl`}>Anda akan masuk sebagai:</p>
          <div   className="flex justify-around mt-4">
            <button onClick={toggleForm} className="bg-white text-[#00509D] text-3xl border-2 p-20 mx-8 cursor-pointer rounded-md shadow-lg w-[417px] ">
              PENJUAL
            </button>
            <button onClick={toggleForm} className="bg-white text-[#00509D] text-3xl border-2 p-20 mx-8 cursor-pointer rounded-md shadow-lg w-[417px] ">
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
        <RegisterForm isVisible={isFormVisible} />
      </div>
    </>
  );
};

export default Modal;
// import Link from 'next/link'
// import React from 'react';

// interface ModalProps {
//   show: boolean;
//   onClose: () => void;
// }

// const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
//   if (!show) return null;

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000]">
//       <div className="bg-yellow-400 p-5 rounded-3xl text-center w-auto">
//         <h2 className="text-blue-700">MASUK AKUN</h2>
//         <p className="text-blue-600">Anda akan masuk sebagai:</p>
//         <div className="flex justify-around mt-4">
//           <button className="bg-white text-[#00509D] text-3xl border-2 p-20 mx-8 cursor-pointer rounded-md shadow-md ">
//             <Link href="/Dashboard">Masuk</Link>
//           </button>
//           <button className="bg-white text-[#00509D] text-3xl border-2  p-20 mx-8 cursor-pointer rounded-md shadow-md">
//             PEMBELI
//           </button>
//         </div>
//         <button
//           onClick={onClose}
//           className="mt-5 px-4 py-2 bg-red-600 text-white border-none rounded-md cursor-pointer"
//         >
//           Close
//         </button>
//       </div>
//     </div>

//   );
// };

// export default Modal;