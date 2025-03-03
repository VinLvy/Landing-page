import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Tentang QuantumTech</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
          QuantumTech adalah perusahaan inovatif yang berfokus pada pengembangan teknologi berbasis AI dan solusi
          digital. Kami berkomitmen untuk memberikan layanan terbaik dengan teknologi mutakhir yang membantu bisnis
          berkembang lebih cepat dan efisien.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md text-left">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Misi Kami</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Menciptakan solusi berbasis teknologi yang inovatif dan berkelanjutan, membantu perusahaan dalam
              transformasi digital dengan sistem yang lebih cerdas dan efisien.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md text-left">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Visi Kami</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Menjadi pemimpin global dalam teknologi digital, membawa revolusi dalam industri dengan inovasi yang
              mengubah cara dunia bekerja dan berinteraksi.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Image
            src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="QuantumTech"
            width={400}
            height={400}
            className="rounded-xl shadow-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
