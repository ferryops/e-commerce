import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t-1 py-8 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="mb-4 text-center sm:mb-0 sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
            </p>
          </div>

          <div className="mb-4 flex space-x-6 sm:mb-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-2xl text-white hover:text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-white hover:text-pink-600" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl text-white hover:text-blue-400" />
            </a>
          </div>

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
  )
}

export default Footer
