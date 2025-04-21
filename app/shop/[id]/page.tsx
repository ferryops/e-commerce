'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { products } from '@/constants/products'

const ProductDetailPage = () => {
  const params = useParams<{ id: string }>()
  const id = params?.id

  const [product, setProduct] = useState<{
    id: any
    name: string
    category: string
    price: number
    description: string
    image: string
  } | null>(null)

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product.id === Number(id)
    )
    setProduct(selectedProduct || null)
  }, [id])

  if (!product) {
    return <div>Produk tidak ditemukan</div>
  }

  return (
    <div className="min-h-screenp-8">
      <div className="mx-auto max-w-4xl rounded-lg bg-[#1f1f1f] p-6 shadow-lg">
        {/* Nama dan Kategori Produk */}
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="mb-4 text-lg">{product.category}</p>

        {/* Gambar Produk */}
        <img
          src={product.image}
          alt={product.name}
          className="mb-4 h-96 w-full rounded-lg object-cover"
        />

        {/* Deskripsi Produk */}
        <p className="mb-6 text-lg">{product.description}</p>

        {/* Harga Produk */}
        <p className="text-xl font-semibold">
          Rp {product.price.toLocaleString()}
        </p>

        {/* Tombol Tambah ke Keranjang */}
        <button className="mt-6 w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage
