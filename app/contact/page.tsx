'use client'

const ContactPage = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-semibold">Hubungi Kami</h1>
        <p className="mt-4 text-lg">
          Kami siap membantu Anda. Silakan hubungi kami melalui formulir di
          bawah ini.
        </p>
      </div>

      <div className="mb-12 rounded-lg bg-[#1f1f1f] p-6 shadow-md">
        <h2 className="mb-4 text-3xl font-semibold">Informasi Kontak</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>Email:</strong> support@eshop.com
          </li>
          <li>
            <strong>Telepon:</strong> +62 812 3456 7890
          </li>
          <li>
            <strong>Alamat:</strong> Jl. Raya No. 123, Jakarta, Indonesia
          </li>
        </ul>
      </div>

      <div className="rounded-lg bg-[#1f1f1f] p-6 shadow-md">
        <h2 className="mb-4 text-3xl font-semibold">Formulir Kontak</h2>
        <form action="#" method="POST">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium">
                Nama Anda
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Masukkan nama Anda"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">
                Email Anda
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Masukkan email Anda"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium">
                Subjek
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                placeholder="Masukkan subjek pesan"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium">
                Pesan Anda
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tulis pesan Anda di sini"
                rows={5}
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
