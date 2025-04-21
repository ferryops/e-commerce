"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();

  // Cek apakah user sudah login
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800">Hubungi Kami</h1>
        <p className="mt-4 text-lg text-gray-600">
          Kami siap membantu Anda. Silakan hubungi kami melalui formulir di
          bawah ini.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Informasi Kontak
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
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

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Formulir Kontak
        </h2>
        <form action="#" method="POST">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Nama Anda
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Masukkan nama Anda"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email Anda
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Masukkan email Anda"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium"
              >
                Subjek
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                placeholder="Masukkan subjek pesan"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Pesan Anda
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tulis pesan Anda di sini"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
