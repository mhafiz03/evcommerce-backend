import React from 'react';
import HorizontalScroll from '@/components/ChatGPT/HorizontalScroll';
import GridDisplay from '@/components/ChatGPT/GridDisplay';
import Header from '@/components/ChatGPT/SearchBar';

const Page = () => {
    return (
        <main className="min-h-screen bg-gray-100">
            <Header />
            {/* Hero Section */}
            <section className="bg-gray-200 py-32">
                <div className="container mx-auto px-6">
                    <div className="flex items-center">
                        {/* Image */}
                        <div className="w-32 h-32 bg-blue-700 mr-4"></div>
                        <div className="w-32 h-32 bg-yellow-400"></div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">PRODUK NAIK DAUN</h2>
                    <p className="text-gray-700 text-center mb-6">
                        Yuk cek produk terbaik kita yang naik daun dan sedang hangat dibeli!
                    </p>
                    <HorizontalScroll />
                </div>
            </section>

            {/* New Products Section */}
            <section className="py-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">PRODUK BARU</h2>
                    <p className="text-gray-700 text-center mb-6">
                        Yuk cek produk terbaru kita yang ada hari ini!
                    </p>
                    <GridDisplay />
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-yellow-400 py-10">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-blue-700 text-3xl font-bold mb-6">TOKOLIKU</h3>
                    <div className="flex justify-between items-center text-sm text-gray-800">
                        <div className="text-left">
                            <h4 className="font-bold mb-2">BANTUAN</h4>
                            <p>Info lebih lanjut</p>
                            <p>Syarat Penjualan: Belum Masuk</p>
                        </div>
                        <div>
                            <p>&copy; 2024 Tokoliku. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Page;
