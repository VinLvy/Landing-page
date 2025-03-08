"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
    return (
        <section id="contact" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
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
                                <input
                                    type="text"
                                    className="w-full p-3 mt-1 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                                    placeholder="Nama Anda"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 mt-1 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                                    placeholder="Email Anda"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300">Pesan</label>
                                <textarea
                                    className="w-full p-3 mt-1 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 resize-none"
                                    placeholder="Tulis pesan Anda"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
                            >
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
                        {/* Google Maps */}
                        <div className="mt-12">
                            <iframe
                                className="w-full h-77 rounded-xl shadow-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.467218865065!2d107.61678937427978!3d-7.187358992823659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9c36f0f05f9%3A0x5bbd51f8431db3d1!2sJl.%20Teknologi%2C%20Bandung!5e0!3m2!1sen!2sid!4v1700000000000"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
