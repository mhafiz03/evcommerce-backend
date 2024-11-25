import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFD500] text-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-3 items-start">
        {/* Bagian kiri - Nama Brand */}
        <div>
          <h1 className="text-2xl font-bold">TOKOLIKU</h1>
        </div>

        {/* Bagian tengah - Bantuan */}
        <div>
          <h2 className="text-lg font-bold">BANTUAN</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Lupa Kata Sandi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dana Pembelian Belum Masuk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm bg-[#FFD500] py-3">
        © 2024 Tokoliku, All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
