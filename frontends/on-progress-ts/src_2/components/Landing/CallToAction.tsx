import Image from 'next/image'

const CallToAction: React.FC = () => {
    return (
        <section className="flex flex-row justify-between items-center text-center bg-[#fffdfd] py-16 mx-10">
            <div className="mt-8 ">
                <Image src="/assets/Hero2.png" alt="Illustration" width={728} height={350} className="max-w-3xl" />
            </div>
            <div className=' h-full'>
                <h4 className="text-2xl font-bold text-gray-800">SUDAH SIAP MENCARI UANG DENGAN CARA MUDAH?</h4>
                <div className="flex justify-center gap-4 mt-8">
                    <a href="#" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">Pilih</a>
                    <a href="#" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg">Daftar</a>
                </div>
            </div>

        </section>
    );
  };
  
  export default CallToAction;