import Image from 'next/image'


const Hero: React.FC = () => {
    return (
        <section className="flex flex-row justify-between items-center text-center bg-[#fffdfd] py-16 mx-10">
            <div className=' h-full'>
                <h1 className="text-8xl text-start font-normal text-[#00509D]">
                    TANPA LAPAK, <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-[#666666]">UANGPUN </span ><span className='text-yellow-400'>JADI</span>
                </h1>
                <p className="text-gray-600 text-start mt-4 max-w-lg">
                    Platform untuk berjualan tanpa harus memiliki toko fisik. Mulai jualan sekarang dan nikmati kesmudahan yang kami tawarkan.
                </p>
            </div>
            <div className="mt-8 ">
                <Image src="/assets/HeroImage.png" alt="Illustration" width={728} height={546} className="max-w-3xl" />
            </div>
        </section>
    );
  };
  
  export default Hero; 