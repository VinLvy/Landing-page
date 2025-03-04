import { CheckCircle, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
    title: "Mudah Digunakan",
    description: "Dibangun dengan UI yang intuitif, membuat pengalaman pengguna lebih lancar.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
    title: "Keamanan Terjamin",
    description: "Kami menggunakan enkripsi tingkat tinggi untuk menjaga data Anda tetap aman.",
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    title: "Performa Cepat",
    description: "Optimasi maksimal untuk memastikan kecepatan akses dan responsivitas yang tinggi.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Fitur Unggulan</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Berikut adalah beberapa fitur utama yang membuat produk kami unggul.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md transform transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
