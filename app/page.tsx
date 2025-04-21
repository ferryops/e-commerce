'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const HomePage = () => {
  const router = useRouter()

  // Check user is logged in
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    }
  }, [router])

  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1667525245005-ab89e935ff70',
      title: 'Diskon 50% Untuk Semua Produk!',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1629362050323-b40efaa4c217',
      title: 'Promo Akhir Tahun, Buruan Belanja!',
    },
  ]

  const products = [
    {
      id: 1,
      name: 'Produk A',
      image: 'https://images.unsplash.com/photo-1623593476737-0fc80f6be51d',
      price: 100000,
      description: 'Produk unggulan berkualitas tinggi.',
    },
    {
      id: 2,
      name: 'Produk B',
      image: 'https://images.unsplash.com/photo-1700225195141-30a6a826cef8',
      price: 200000,
      description: 'Produk dengan harga terjangkau.',
    },
    {
      id: 3,
      name: 'Produk C',
      image: 'https://images.unsplash.com/photo-1725182525091-ae6076964336',
      price: 300000,
      description: 'Produk premium dengan fitur lengkap.',
    },
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-semibold">Selamat Datang di E-commerce</h1>
        <p className="mt-4 text-lg">
          Temukan produk terbaik dengan harga terbaik hanya di E-commerce!
        </p>
      </div>

      <div className="mb-10">
        <h2 className="mb-5 text-center text-3xl font-semibold">
          Banner Promosi
        </h2>
        <div className="flex justify-center space-x-4">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="w-full max-w-sm overflow-hidden rounded-lg bg-[#1f1f1f] shadow-lg"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{banner.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-center text-3xl font-semibold">
          Produk Unggulan
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-lg bg-[#1f1f1f] shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="mt-2">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    Rp {product.price.toLocaleString()}
                  </span>
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
