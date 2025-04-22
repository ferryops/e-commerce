'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (username === 'admin123' && password === '12345') {
      localStorage.setItem('user', 'admin123')
      window.dispatchEvent(new Event('userChanged'))
      router.push('/admin-dashboard')
    } else if (username === 'user123' && password === '12345') {
      localStorage.setItem('user', 'user')
      window.dispatchEvent(new Event('userChanged'))
      router.push('/home')
    } else {
      setError('Username atau password salah!')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm rounded-lg bg-[#1f1f1f] p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold">Login</h2>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Masuk
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Belum punya akun?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Daftar di sini
          </a>
        </p>
        <p className="mt-4 text-center text-sm">
          Lupa kata sandi?{' '}
          <a href="/forgot-password" className="text-blue-600 hover:underline">
            Klik di sini
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
