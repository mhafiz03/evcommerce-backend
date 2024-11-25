import Navbar from '@/components/Landing/NavBar';
import Hero from '@/components/Landing/Hero';
import About from '@/components/Landing/About';
import Benefits from '@/components/Landing/Benefits';
import CallToAction from '@/components/Landing/CallToAction';

const benefitCustomer = [
    {
      title: "Kemudahan Berbelanja",
      description: "EvCommerse menyediakan produk bervariasi, jika dibandingkan dengan produk yang ada di pasar atau lapak khusus",
      image: {
        src: "/assets/Vector1.png",
        alt: "Shopping",
        width: 150,
        height: 100,
      },
    },
    {
      title: "Harga Kompetitif",
      description: "DEvCommerse menyediakan produk bervariasi, jika dibandingkan dengan produk yang ada di pasar atau lapak khusus.",
      image: {
        src: "/assets/carbon_delivery.png",
        alt: "Competitive Price",
        width: 150,
        height: 100,
      },
    },
    {
        title: "Harga Kompetitif",
        description: "EvCommerse menyediakan produk bervariasi, jika dibandingkan dengan produk yang ada di pasar atau lapak khusus.",
        image: {
          src: "/assets/magnifier.png",
          alt: "Competitive Price",
          width: 150,
          height: 100,
        },
      },
    
  ];

  const benefitSeller = [
   
      {
        title: "Harga Kompetitif",
        description: "EvCommerse menyediakan produk bervariasi, jika dibandingkan dengan produk yang ada di pasar atau lapak khusus.",
        image: {
          src: "/assets/time.png",
          alt: "Competitive Price",
          width: 150,
          height: 100,
        },
      },
      {
        title: "Harga Kompetitif",
        description: "EvCommerse menyediakan produk bervariasi, jika dibandingkan dengan produk yang ada di pasar atau lapak khusus.",
        image: {
          src: "/assets/chart.png",
          alt: "Competitive Price",
          width: 150,
          height: 100,
        },
      },
      {
        title: "Lebih Bervariasi",
        description: "EvCommerse menyediakan produk bervariasi, jika dibandingkan dengan produk yang ada di pasar atau lapak khusus",
        image: {
          src: "/assets/doubleArrow.png",
          alt: "Competitive Price",
          width: 150,
          height: 100,
        },
      },
  ];

export default function HomePage() {
    return (
        <div >
            <Navbar />
            <Hero />
            <About />
            <Benefits type="consumer" benefits={benefitCustomer} />;
            <Benefits type="seller" benefits={benefitSeller} />;
            <CallToAction />
        </div>
    );
}

