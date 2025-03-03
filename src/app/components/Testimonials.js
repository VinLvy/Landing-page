import { Star, UserCircle } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    feedback: "Produk ini sangat membantu pekerjaan saya, tampilannya intuitif dan mudah digunakan.",
    rating: 5,
  },
  {
    name: "Siti Aisyah",
    feedback: "Keamanan data yang diberikan sangat terjamin, saya merasa lebih aman menggunakannya.",
    rating: 5,
  },
  {
    name: "Rizky Ramadhan",
    feedback: "Performa yang luar biasa, akses cepat dan responsif! Sangat direkomendasikan.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Testimoni Pengguna</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Berikut adalah beberapa ulasan dari pengguna kami yang puas.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md transform transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <UserCircle className="w-12 h-12 text-gray-500 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>
              <div className="flex justify-center mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}