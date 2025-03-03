import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">QuantumTech: Membangun Masa Depan</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-6 text-xl max-w-3xl mx-auto">
          Kami adalah pelopor dalam inovasi digital dan kecerdasan buatan, menghadirkan teknologi mutakhir untuk membantu bisnis berkembang lebih cepat dan lebih efisien.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-left transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400"> Misi Kami</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
              Mengembangkan solusi berbasis AI yang inovatif dan berkelanjutan, membantu perusahaan dalam transformasi digital dengan teknologi yang cerdas dan efisien.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-left transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400"> Visi Kami</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
              Menjadi pemimpin global dalam inovasi teknologi, menciptakan ekosistem digital yang merevolusi cara dunia bekerja dan berinteraksi.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}