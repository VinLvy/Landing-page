"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Garis Pembatas Tengah */}
      <div className="w-24 border-t-2 border-gray-700 mx-auto mb-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Hubungi Kami</h2>
        <p className="text-gray-400 text-center mt-2">Kami siap membantu! Silakan kirim pesan atau hubungi kami.</p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Formulir Kontak */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-300">Nama</label>
                <input type="text" className="w-full p-3 mt-1 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500" placeholder="Nama Anda" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Email</label>
                <input type="email" className="w-full p-3 mt-1 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500" placeholder="Email Anda" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Pesan</label>
                <textarea className="w-full p-3 mt-1 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500" placeholder="Tulis pesan Anda" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Informasi Kontak */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 w-6 h-6" />
              <p className="text-gray-300">contact@quantumtech.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-green-400 w-6 h-6" />
              <p className="text-gray-300">+62 812-3456-7890</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400 w-6 h-6" />
              <p className="text-gray-300">Jl. Teknologi No. 123, Jakarta</p>
            </div>

            {/* Social Media */}
            {/* <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FontAwesomeIcon icon={faFacebookF} className="text-white w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FontAwesomeIcon icon={faTwitter} className="text-white w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FontAwesomeIcon icon={faInstagram} className="text-white w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white w-6 h-6" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
