import React from 'react';
import ProductCard from './ProductCard';

const HorizontalScroll = () => {
  return (
    <div className="overflow-x-scroll py-6 px-4">
      <div className="inline-flex space-x-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HorizontalScroll;
