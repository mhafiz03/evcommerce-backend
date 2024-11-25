import React from 'react';
import Image from 'next/image';


const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg  justify-items-center">
      {image && (
        <div className="mb-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 100}
            height={image.height || 100}
            className="rounded"
          />
        </div>
      )}
      <h5 className="mb-2 text-lg font-semibold text-gray-800">{title}</h5>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default BenefitCard;
