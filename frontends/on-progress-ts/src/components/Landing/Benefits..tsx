import React from 'react';
import BenefitCard from './benefitCard';
import {Palanquin} from "next/font/google"


interface BenefitsProps {
  type: "consumer" | "seller";
  benefits: {
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
  }[];
}
const palanquin = Palanquin({
  weight : ['400', '700'], subsets: ["latin"]
})

export default function Benefits({ type, benefits }: BenefitsProps) {
  return (
    <section className="py-16 bg-white" id='Benefit'>
      <h1 className={`${palanquin.className} text-3xl font-normal text-center text-[#5D7F9F] tracking-wider`}>
        {type === "consumer" ? "Sebagai seorang Konsumen" : "Sebagai seorang Penjual"}
      </h1>
      <h1 className={`${palanquin.className} text-4xl font-bold text-center text-[#5D7F9F] tracking-wider`}>
        Kenapa Harus <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#FFD500] to-[#00509D]'>TokoLiku</span>
      </h1>

      <div className="flex flex-wrap justify-center mt-8 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            image={benefit.image}
          />
        ))}
      </div>
    </section>
  );
}
// import Image from 'next/image'
// import React from 'react';


// interface Benefit {
//     title: string;
//     description: string;
// }

// interface BenefitsProps {
//     type: 'consumer' | 'seller';
//     benefits: Benefit[];
// }

// interface ImageProps {
//     src: string;
//     alt: string;
//     width?: number;
//     height?: number;
//   }



// const ImageComponent: React.FC<ImageProps> = ({ src, alt, width, height }) => {
//     return (
//       <Image
//         src={src}
//         alt={alt}
//         width={width || 300}
//         height={height || 200}
//         layout={width && height ? undefined : 'responsive'}
//       />
//     );
//   };

// const imageList: ImageProps[] = [
//   { src: '/assets/Vector1.png', alt: 'Image 1', width: 400, height: 300 },
//   { src: '/assets/Vector1.png', alt: 'Image 1', width: 400, height: 300 },
//   { src: '/assets/Vector1.png', alt: 'Image 1', width: 400, height: 300 },
//   { src: '/assets/Vector1.png', alt: 'Image 1', width: 400, height: 300 },
//   { src: '/assets/Vector1.png', alt: 'Image 1', width: 400, height: 300 },
//   { src: '/assets/Vector1.png', alt: 'Image 1', width: 400, height: 300 },
// ];

// function BenefitCard({ title, description }: Benefit) {
//     return (
//         <div className="max-w-xs text-center">
//             <div className="bg-yellow-100 rounded-full p-4 mx-auto mb-4">
//             {imageList.map((image, index) => (
//                     <ImageComponent key={index} {...image} />
//                 ))}
//             </div>
//             <h5 className="font-bold text-gray-800">{title}</h5>
//             <p className="text-gray-600 mt-2">{description}</p>
//         </div>
//     );
// }

// export default function Benefits({ type, benefits }: BenefitsProps) {
//     return (
//         <section className={`py-16 ${type === "consumer" ? "bg-white" : "bg-gray-100"}`}>
//             <h4 className="text-xl font-semibold text-center text-gray-800">
//                 {type === "consumer" ? "Sebagai seorang Konsumen, Kenapa Harus Tokoliku" : "Sebagai seorang Penjual, Kenapa Harus Tokoliku"}
//             </h4>
//             <div className="flex flex-wrap justify-center mt-8 gap-8">
//                 {benefits.map((benefit, index) => (
//                     <BenefitCard key={index} title={benefit.title} description={benefit.description} />
//                 ))}
//             </div>
//         </section>
//     );
// }
