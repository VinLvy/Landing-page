import Image from "next/image";

const projects = [
    {
        id: 1,
        name: "Landing Page Startup",
        description: "Desain landing page modern dan responsif untuk startup. Proyek ini dirancang untuk meningkatkan konversi pengguna dengan tampilan yang menarik dan navigasi yang mudah. Kami menggunakan teknologi terbaru seperti Next.js dan Tailwind CSS untuk memastikan kecepatan dan performa yang optimal.",
        image: "/images/project1.png",
    },
    {
        id: 2,
        name: "Point of Sale System",
        description: "Sistem POS yang memudahkan pengelolaan transaksi bisnis secara efisien. Aplikasi ini dilengkapi dengan fitur pencatatan stok barang, laporan penjualan, dan integrasi dengan berbagai metode pembayaran digital untuk memudahkan transaksi pelanggan.",
        image: "/images/project2.png",
    },
    {
        id: 3,
        name: "Company Profile",
        description: "Website profil perusahaan yang menampilkan informasi lengkap tentang layanan, visi, dan misi perusahaan. Kami memastikan desain yang profesional dengan tata letak yang bersih dan responsif agar mudah diakses oleh calon klien dan mitra bisnis.",
        image: "/images/project3.png",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white">
                    Projects Kami
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Berikut adalah beberapa projects yang telah kami kerjakan untuk klien kami.
                </p>
                <div className="mt-10 space-y-12">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                    priority={index === 0}
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-left">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 mt-2 dark:text-gray-300">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}