// components/RegisterForm.tsx
import React from "react";
import Link from 'next/link';

interface RegisterFormProps {
  isVisible: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed items-center w-[1024px] bg-yellow-400 p-8 shadow-md rounded-lg transform transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <h1 className="text-xl font-bold text-center text-blue-900 mb-6">
        DAFTAR AKUN
      </h1>
      <form>
        {["Nama Pengguna", "Nama Lengkap", "Email", "Nomor Telepon", "Alamat Rumah", "Kata Sandi"].map(
          (label, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={label.toLowerCase().replace(" ", "_")}
                className="sr-only"
              >
                {label}
              </label>
              <input
                type={label === "Kata Sandi" ? "password" : "text"}
                id={label.toLowerCase().replace(" ", "_")}
                name={
                  label === "Nama Pengguna"
                    ? "username"
                    : label
                        .toLowerCase()
                        .replace(" ", "_")
                        .replace("kata", "password")
                }
                placeholder={label}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          )
        )}
        <button
          type="submit"
          className="bg-blue-900 text-white w-full py-2 rounded-md hover:bg-blue-800 transition"
        >
          <Link href="/page.tsx">Daftar</Link>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
