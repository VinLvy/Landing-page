export default function Hero() {
    return (
      <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold">Selamat Datang di Website Kami</h1>
        <p className="mt-4 text-lg">Solusi terbaik untuk bisnis Anda</p>
        <a href="#features" className="mt-6 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition">
          Pelajari Lebih Lanjut
        </a>
      </section>
    );
  }
  