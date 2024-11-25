import React from 'react';
import Image from 'next/image';
import {Palanquin} from "next/font/google"

interface BenefitCardProps {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

const palanquin = Palanquin({
  weight : ['400','700'], subsets: ["latin"]
})

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, image }) => {
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
      <h5 className={`${palanquin.className} mb-2 text-xl font-bold text-[#627B92]`}>{title}</h5>
      <p className={`${palanquin.className} font-normal text-[#627B92] text-center`} >{description}</p>
    </div>
  );
};

export default BenefitCard;
