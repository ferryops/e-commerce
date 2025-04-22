'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  db,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from '@/libs/firebase'
import Image from 'next/image'

type Product = {
  id?: string
  name?: string
  category?: string
  price?: number
  description?: string
  image?: string
}

const AdminProducts = () => {
  const router = useRouter()
  const [productList, setProductList] = useState<Product[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)

  const [form, setForm] = useState<Product>({
    name: '',
    category: '',
    price: 0,
    description: '',
    image: '',
  })

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'))
    const productsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setProductList(productsData)
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user || user !== 'admin123') {
      router.push('/login')
    } else {
      fetchProducts()
    }
  }, [router])

  const openAddModal = () => {
    setForm({
      name: '',
      category: '',
      price: 0,
      description: '',
      image: '',
    })
    setEditId(null)
    setShowModal(true)
  }

  const openEditModal = (product: Product) => {
    setForm({
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
      image: product.image,
    })
    setEditId(product?.id || null)
    setShowModal(true)
  }

  const handleDeleteProduct = async (id: string) => {
    const isConfirmed = window.confirm('Yakin mau dihapus nih?')
    if (isConfirmed) {
      await deleteDoc(doc(db, 'products', id))
      fetchProducts()
    }
  }

  const handleSubmit = async () => {
    if (editId) {
      await updateDoc(doc(db, 'products', editId), {
        ...form,
        price: form.price,
      })
    } else {
      await addDoc(collection(db, 'products'), {
        ...form,
        price: form.price,
      })
    }
    setShowModal(false)
    fetchProducts()
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-8 text-center text-3xl font-semibold">Kelola Produk</h1>

      <div className="mb-6 text-right">
        <button
          onClick={openAddModal}
          className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Tambah Produk
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg bg-[#1f1f1f] shadow-md">
          <thead className="text-white">
            <tr>
              <th className="px-6 py-3 text-left">Nama Produk</th>
              <th className="px-6 py-3 text-left">Kategori</th>
              <th className="px-6 py-3 text-left">Harga</th>
              <th className="px-6 py-3 text-left">Image</th>
              <th className="px-6 py-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product: Product) => (
              <tr key={product.id} className="border-b border-gray-200">
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">
                  Rp {product.price?.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <Image
                    src={
                      product?.image ||
                      'https://images.unsplash.com/photo-1594322436404-5a0526db4d13'
                    }
                    alt={product?.name || ''}
                    width={200}
                    height={50}
                  />
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openEditModal(product)}
                    className="mr-4 text-yellow-500 hover:text-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      product.id && handleDeleteProduct(product.id)
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="bg-opacity-25 fixed inset-0 z-50 flex items-center justify-center border-white bg-[#1f1f1f]/99">
          <div className="w-full max-w-lg rounded-md p-6">
            <h2 className="mb-4 text-xl font-semibold">
              {editId ? 'Edit Produk' : 'Tambah Produk'}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama Produk"
                className="w-full rounded border px-4 py-2"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Kategori"
                className="w-full rounded border px-4 py-2"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
              <input
                type="number"
                placeholder="Harga"
                className="w-full rounded border px-4 py-2"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: Number(e.target.value) })
                }
              />
              <input
                type="text"
                placeholder="Deskripsi"
                className="w-full rounded border px-4 py-2"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="URL Gambar"
                className="w-full rounded border px-4 py-2"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="mr-2 rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminProducts
