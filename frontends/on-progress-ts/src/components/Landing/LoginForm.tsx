// components/LoginForm.tsx
import React from "react";

interface LoginFormProps {
  isVisible: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-yellow-400 p-8 shadow-md rounded-t-lg transform transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <h1 className="text-xl font-bold text-center text-blue-900">
        MASUK AKUN
      </h1>
      <p className="text-center text-blue-900 mb-6">Silahkan masukkan:</p>
      <form>
        {["Nama Pengguna", "Kata Sandi"].map((label, index) => (
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
              placeholder={label}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-900 text-white w-full py-2 rounded-md hover:bg-blue-800 transition"
        >
          MASUK
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
