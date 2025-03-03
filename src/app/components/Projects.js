import Image from "next/image";

const projects = [
    {
        id: 1,
        name: "Landing Page Design",
        description: "Desain landing page modern dan responsif untuk startup.",
        image: "/images/project1.jpg",
    },
    {
        id: 2,
        name: "E-Commerce Website",
        description: "Toko online dengan fitur cart dan pembayaran online.",
        image: "/images/project2.jpg",
    },
    {
        id: 3,
        name: "Company Profile",
        description: "Website profil perusahaan dengan informasi lengkap.",
        image: "/images/project3.jpg",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 dark:text-white">
                    Projects Kami
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Berikut adalah beberapa projects yang telah kami kerjakan untuk klien kami.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {projects.map((project, index) => (
                        <div key={project.id} className="dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                            <div className="relative w-full h-48">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                    priority={index === 0} // Optimasi hanya untuk gambar pertama
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                                {project.name}
                            </h3>
                            <p className="text-gray-600 mt-2 dark:text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
