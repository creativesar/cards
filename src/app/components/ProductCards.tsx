import React from 'react';
import Image from 'next/image';

const ProductCards = () => {
  return (
    <div className="grid gap-5 px-4 py-10 md:grid-cols-2 lg:grid-cols-3">
      {/* Product 1 */}
      <div className="p-4 border rounded-lg hover:shadow-lg hover:shadow-blue-500 hover:border-blue-600 transition-all duration-300">
        <div className="flex items-center justify-center h-80">
          <Image
            src="/blue perfume.png"
            alt="Blue Perfume"
            width={200}
            height={200}
          />
        </div>
        <p className="text-center pt-10">$ 150</p>
        <div className="flex justify-center items-center my-3">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="p-4 border rounded-lg hover:shadow-lg hover:shadow-blue-500 hover:border-blue-600 transition-all duration-300">
        <div className="flex items-center justify-center h-80">
          <Image
            src="/golden.png"
            alt="Golden Product"
            width={200}
            height={200}
          />
        </div>
        <p className="text-center pt-10">$ 250</p>
        <div className="flex justify-center items-center my-3">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>

      {/* Product 3 */}
      <div className="p-4 border rounded-lg hover:shadow-lg hover:shadow-blue-500 hover:border-blue-600 transition-all duration-300">
        <div className="flex items-center justify-center h-80">
          <Image
            src="/chpee.png"
            alt="Cheap Product"
            width={200}
            height={200}
          />
        </div>
        <p className="text-center pt-10">$ 200</p>
        <div className="flex justify-center items-center my-3">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
