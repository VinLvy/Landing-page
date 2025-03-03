import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white text-center px-4">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D"
          alt="QuantumTech Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-gray-100 dark:to-gray-900"></div>
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-6xl font-bold">Selamat Datang di QuantumTech</h1>
        <p className="mt-4 text-lg">Inovasi Teknologi untuk Masa Depan yang Lebih Cerdas</p>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-blue-500 hover:text-blue-600 transition motion-safe:animate-bounce"
      >
        <ChevronDown className="w-12 h-12" />
      </a>
    </section>
  );
}