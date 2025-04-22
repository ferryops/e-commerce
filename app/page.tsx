import { banners } from '@/constants/banners'
import { products } from '@/constants/products'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
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
              <Image
                src={banner.image}
                alt={banner.title}
                className="h-48 w-full object-cover"
                width={200}
                height={200}
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
          {[...products]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-lg bg-[#1f1f1f] shadow-md"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                  width={200}
                  height={200}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2">{product.description}</p>
                  <Link href={`/shop/${product.id}`}>
                    <span className="text-xs underline">Lihat Detail</span>
                  </Link>

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
