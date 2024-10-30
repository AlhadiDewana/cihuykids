// components/PremiumContent.js
import React from 'react';
import { MdMargin } from 'react-icons/md';

function PremiumContent() {
  return (
    <div className='premium mt-24'>
      <div className="relative overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-500">Konten Premium</h2>
        <p className="text-lg text-blue-600">
          Dapatkan Akses Penuh ke Dunia Seru dan Edukatif di Cihuy Kids Premium
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-around items-center">
        {/* Pricing Section */}
        <div className="bg-blue-500 text-white p-6 rounded-lg max-w-xs text-center mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Hanya Rp.70.000,00</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center justify-center">
              <span className="mr-2">✔️</span> Konten Eksklusif
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">✔️</span> Bebas Iklan
            </li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-white text-blue-500 rounded-full font-semibold">
            Berlangganan
          </button>
        </div>

        {/* Card Carousel Section */}
        <div className="flex space-x-4 overflow-auto">
          <img src="https://via.placeholder.com/150" alt="Content 1" className="rounded-lg shadow-lg" />
          <img src="https://via.placeholder.com/150" alt="Content 2" className="rounded-lg shadow-lg" />
          <img src="https://via.placeholder.com/150" alt="Content 3" className="rounded-lg shadow-lg" />
          <img src="https://via.placeholder.com/150" alt="Content 4" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default PremiumContent;
