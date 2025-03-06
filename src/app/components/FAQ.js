"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const faqs = [
        {
            question: "Apa itu layanan yang ditawarkan?",
            answer: "Kami menawarkan berbagai paket pembuatan website mulai dari landing page sederhana hingga website custom dengan fitur lengkap."
        },
        {
            question: "Apakah saya bisa melakukan revisi desain?",
            answer: "Ya, setiap paket memiliki jumlah revisi yang berbeda. Basic Plan mendapatkan 1 revisi, Pro Plan 3 revisi, dan Enterprise Plan revisi tak terbatas."
        },
        {
            question: "Bagaimana cara pembayaran dilakukan?",
            answer: "Pembayaran dapat dilakukan melalui transfer bank, kartu kredit, atau metode pembayaran digital lainnya."
        },
        {
            question: "Apakah ada dukungan setelah website selesai dibuat?",
            answer: "Ya, setiap paket termasuk dukungan sesuai dengan level paket yang dipilih, mulai dari dukungan email hingga prioritas."
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Pertanyaan yang Sering Diajukan</h2>
                <p className="text-gray-300 mb-10">
                    Temukan jawaban untuk pertanyaan umum terkait layanan kami.
                </p>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 rounded-xl p-5 shadow-lg cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                                <ChevronDown 
                                    size={20} 
                                    className={`text-blue-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </div>
                            <div 
                                className={`transition-all duration-500 overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-300 mt-3">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
