import { CheckCircle } from "lucide-react";

export default function Pricing() {
    const pricingPlans = [
        {
            id: 1,
            name: "Basic Plan",
            price: "$29/month",
            features: [
                "Landing page sederhana",
                "Dukungan email",
                "Optimasi SEO dasar",
                "1 revisi desain",
            ],
        },
        {
            id: 2,
            name: "Pro Plan",
            price: "$59/month",
            features: [
                "Website dinamis dengan CMS",
                "Dukungan chat 24/7",
                "Optimasi SEO lanjutan",
                "3 revisi desain",
            ],
        },
        {
            id: 3,
            name: "Enterprise Plan",
            price: "$99/month",
            features: [
                "Website custom full fitur",
                "Dukungan prioritas",
                "Integrasi API dan pembayaran",
                "Revisi tak terbatas",
            ],
        },
    ];

    return (
        <section id="pricing" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Paket Harga</h2>
                <p className="text-gray-300 mb-10">
                    Pilih paket yang sesuai dengan kebutuhan proyek Anda.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div 
                            key={plan.id} 
                            className="relative p-8 bg-gray-800 rounded-2xl shadow-xl overflow-hidden text-center transform hover:scale-105 transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                            <p className="text-3xl font-bold text-blue-400 mt-4">{plan.price}</p>
                            <ul className="mt-6 space-y-3 text-gray-300 text-left">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-blue-400" size={20} /> {feature}
                                    </li>
                                ))}
                            </ul>
                            {/* <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                                Pilih Paket
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}