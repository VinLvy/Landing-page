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
        <section id="pricing" className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Paket Harga</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-10">
                    Pilih paket yang sesuai dengan kebutuhan proyek Anda.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div key={plan.id} className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                            <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">{plan.price}</p>
                            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 text-left">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        ✅ {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                                Pilih Paket
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
