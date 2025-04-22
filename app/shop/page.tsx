'use client'
import { products } from '@/constants/products'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const ShopPage = () => {
  // State for search, filter, and sorting
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000000)

  // Filter products based on search, category, and price
  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === 'Semua' || product.category === selectedCategory
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice

    return matchesSearchQuery && matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen p-8">
      <div className="mb-10">
        <h1 className="mb-5 text-center text-4xl font-semibold">Toko Kami</h1>
        <div className="flex justify-center space-x-4">
          <div className="w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>

          <div className="w-full sm:w-1/3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2"
            >
              <option value="Semua">Semua Kategori</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Pakaian">Pakaian</option>
              <option value="Makanan">Makanan</option>
            </select>
          </div>

          <div className="flex w-full space-x-2 sm:w-1/3">
            <input
              type="number"
              placeholder="Min Harga"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
            <input
              type="number"
              placeholder="Max Harga"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
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
              <p className="">{product.category}</p>
              <p className="text-lg font-semibold">
                Rp {product.price.toLocaleString()}
              </p>
              <div className="flex flex-col">
                <Link href={`/shop/${product.id}`}>
                  <span className="text-xs underline">Lihat Detail</span>
                </Link>
                <button className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopPage
