import React from "react";

const ProductCard: React.FC = () => {
  return (
    <div className="relative w-[418px] h-[688px]">
      {/* Main Product Card */}
      <div className="absolute inset-0 bg-white shadow-md rounded-[22px]">
        {/* Image Section */}
        <div className="absolute inset-x-0 top-0 bottom-[41.86%] bg-gray-300 rounded-t-[16px]"></div>

        {/* Buttons */}
        <div className="absolute left-[43.3%] right-[21.53%] top-[62.21%] bottom-[31.83%] bg-blue-700 shadow-md"></div>
        <div className="absolute left-[5.26%] right-[59.57%] top-[62.21%] bottom-[31.83%] bg-red-700 shadow-md"></div>

        {/* Details */}
        <div className="absolute">
          <div className="absolute left-[5.26%] right-[59.57%] top-[63.52%] bottom-[33.58%] font-semibold text-lg text-white flex items-center text-center">
            Trending 1
          </div>
          <div className="absolute left-[5.26%] right-[45.45%] top-[69.91%] bottom-[27.18%] font-semibold text-xl text-black flex items-center">
            Tank Top Anak-Anak
          </div>
          <div className="absolute left-[5.26%] right-[5.26%] top-[77.76%] bottom-[10.61%] text-gray-500 text-base flex items-center">
            Tank top ini terbuat dari 100% katun, yang dikhususkan untuk
            menyerap keringat, sehingga keringat tidak mudah membasahi pakaian
            luar.
          </div>
          <div className="absolute left-[5.26%] right-[76.32%] top-[73.69%] bottom-[23.11%] font-semibold text-lg text-black flex items-center">
            Rp50.000
          </div>
        </div>

        {/* CTA */}
        <div className="absolute left-[66.75%] right-[10.77%] top-[93.31%] bottom-[4.51%] flex items-center">
          <div className="bg-blue-700 rounded-full w-[80px] h-[40px] flex items-center justify-center text-white text-lg font-semibold">
            Lihat Produk
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
