import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 w-full">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left w-full gap-6">
          {/* Logo & Copyright */}
          <div className="w-full md:w-auto">
            <h2 className="text-xl font-semibold text-white">QuantumTech</h2>
            <p className="text-gray-400 text-sm mt-1">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          {/* Navigasi Footer */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 w-full md:w-auto">
            <Link href="#hero" className="hover:text-white transition">Home</Link>
            <Link href="#about" className="hover:text-white transition">About</Link>
            <Link href="#features" className="hover:text-white transition">Features</Link>
            <Link href="#projects" className="hover:text-white transition">Projects</Link>
            <Link href="#testimonials" className="hover:text-white transition">Testimonials</Link>
            <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="#faq" className="hover:text-white transition">FAQ</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4 w-full md:w-auto mb-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-white w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FontAwesomeIcon icon={faTwitter} size="lg" className="text-white w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" className="text-white w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-white w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
