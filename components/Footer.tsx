import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8 border-t-1">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Hak Cipta */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p>
              &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
            </p>
          </div>

          {/* Media Sosial */}
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white hover:text-blue-600 text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-pink-600 text-2xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-blue-400 text-2xl" />
            </a>
          </div>

          {/* Tautan Penting */}
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="hover:text-white">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
