import React from 'react';
import '../components/Footer.css'

function Footer() {
  return (
    <div className="footer text-white p-6 max-w-xs text-start mb-6 md:mb-0 mt-14">
          <h3 className="text-xl font-semibold">Hanya <br/> Rp.70.000,00</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center justify-start">
              <span className="mr-2"> Konten Eksklusif     ✔️</span>
            </li>
            <li className="flex items-center justify-start">
              <span className="mr-2"> Bebas Iklan   ✔️</span>
            </li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-white text-blue-500 rounded-full font-semibold">
            Berlangganan
          </button>
        </div>
  );
}

export default Footer;