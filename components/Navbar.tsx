'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<string>()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    setUser(storedUser || undefined)

    const handleUserChange = () => {
      const updatedUser = localStorage.getItem('user')
      setUser(updatedUser || undefined)
    }

    window.addEventListener('userChanged', handleUserChange)

    return () => {
      window.removeEventListener('userChanged', handleUserChange)
    }
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: user ? 'Logout' : 'Login', href: user ? '/logout' : '/login' },
  ]

  const adminLinks = [
    { label: 'Admin Dashboard', href: '/admin-dashboard' },
    { label: 'Admin Products', href: '/admin-products' },
    { label: 'Admin Transactions', href: '/admin-transactions' },
  ]

  return (
    <nav className="border-b text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">E-Commerce</span>
          </div>

          <div className="hidden space-x-4 md:flex">
            {/* Admin Links (only for admin123) */}
            {user === 'admin123' &&
              adminLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-red-400 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              className="hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            {/* Admin Links for mobile */}
            {user === 'admin123' &&
              adminLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-yellow-400 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
