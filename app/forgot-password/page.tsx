'use client'
import { useState } from 'react'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      setError('Format email tidak valid!')
      return
    }

    setError(null)
    setMessage('Instruksi pemulihan password telah dikirim ke email Anda.')
    setEmail('')
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-[#1f1f1f] p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Lupa Password
        </h2>

        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        {message && (
          <p className="mb-4 text-center text-green-500">{message}</p>
        )}

        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Kirim Instruksi Pemulihan
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Ingat kata sandi Anda?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Masuk di sini
          </a>
        </p>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
