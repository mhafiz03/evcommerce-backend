import {Palanquin} from "next/font/google"

const palanquin = Palanquin({
  weight : '400', subsets: ["latin"]
})

const About: React.FC = () => {
    return (
    <section className="text-center py-2 bg-white" id="About">
        <p className="text-4xl font-normal text-[#5D7F9F] whitespace-pre">A  P  A    I  T  U </p>
        <p className="text-8xl font-normal text-[#00509D]">TOKOLIKU</p>
        <p className={`${palanquin.className} text-gray-600 max-w-2xl mx-auto mt-4`}>
            Tokoliku adalah situs jual beli yang ditujukan untuk mereka yang ingin berjualan tanpa harus mencari lahan sedikitpun, baik itu sempit maupun luas. cukup akses dan kontrol semua pesanan dari pelanggan dan kirim pesanan secepatnya!
        </p>
    </section>
    );
  };
  
  export default About;