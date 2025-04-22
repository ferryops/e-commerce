'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  db,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
  doc,
} from '@/libs/firebase'

type Product = {
  id: number
  name: string
  category: string
  price: number
  description: string
  image: string
}

type Transaction = {
  id: string
  user: string
  product: Product
  date: string
  totalAmount: number
  status: string
}

const AdminTransactions = () => {
  const router = useRouter()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)

  const [form, setForm] = useState({
    user: '',
    productName: '',
    category: '',
    price: '',
    description: '',
    image: '',
    date: '',
    status: 'Diproses',
  })

  const fetchTransactions = async () => {
    const querySnapshot = await getDocs(collection(db, 'transactions'))
    const transactionsData = querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as Transaction[]
    setTransactions(transactionsData)
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user || user !== 'admin123') {
      router.push('/login')
    } else {
      fetchTransactions()
    }
  }, [router])

  const openEditModal = (transaction: Transaction) => {
    setEditId(transaction.id)
    setForm({
      user: transaction.user,
      productName: transaction.product.name,
      category: transaction.product.category,
      price: transaction.product.price.toString(),
      description: transaction.product.description,
      image: transaction.product.image,
      date: transaction.date,
      status: transaction.status,
    })
    setShowModal(true)
  }

  const openAddModal = () => {
    setEditId(null)
    setForm({
      user: '',
      productName: '',
      category: '',
      price: '',
      description: '',
      image: '',
      date: '',
      status: 'Diproses',
    })
    setShowModal(true)
  }

  const handleDeleteTransaction = async (id: string) => {
    const isConfirmed = window.confirm('Yakin mau dihapus nih?')
    if (isConfirmed) {
      await deleteDoc(doc(db, 'transactions', id))
      fetchTransactions()
    }
  }

  const handleSubmit = async () => {
    const product: Product = {
      id: Math.floor(Math.random() * 1000), // id acak
      name: form.productName,
      category: form.category,
      price: parseInt(form.price),
      description: form.description,
      image: form.image,
    }

    const newData = {
      user: form.user,
      product,
      date: form.date,
      totalAmount: product.price,
      status: form.status,
    }

    if (editId) {
      await updateDoc(doc(db, 'transactions', editId), newData)
    } else {
      await addDoc(collection(db, 'transactions'), newData)
    }

    setShowModal(false)
    fetchTransactions()
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-8 text-center text-3xl font-semibold">
        Daftar Transaksi Pengguna
      </h1>

      <div className="mb-6 text-right">
        <button
          onClick={openAddModal}
          className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Tambah Transaksi
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg bg-[#1f1f1f] shadow-md">
          <thead className="text-white">
            <tr>
              <th className="px-6 py-3 text-left">Nama Produk</th>
              <th className="px-6 py-3 text-left">Kategori</th>
              <th className="px-6 py-3 text-left">Harga</th>
              <th className="px-6 py-3 text-left">Tanggal</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-200">
                <td className="px-6 py-4">{transaction.product.name}</td>
                <td className="px-6 py-4">{transaction.product.category}</td>
                <td className="px-6 py-4">
                  Rp {transaction.product.price.toLocaleString()}
                </td>
                <td className="px-6 py-4">{transaction.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-md px-2 py-1 ${
                      transaction.status === 'Selesai'
                        ? 'bg-green-500'
                        : 'bg-yellow-500'
                    } text-white`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openEditModal(transaction)}
                    className="mr-4 text-yellow-500 hover:text-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTransaction(transaction.id)}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden border-white bg-[#1f1f1f]/99">
          <div className="w-full max-w-lg rounded-md p-6">
            <h2 className="mb-4 text-xl font-semibold text-black">
              {editId ? 'Edit Transaksi' : 'Tambah Transaksi'}
            </h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="User"
                value={form.user}
                onChange={(e) => setForm({ ...form, user: e.target.value })}
                className="w-full rounded border px-4 py-2"
              />
              <input
                type="text"
                placeholder="Nama Produk"
                value={form.productName}
                onChange={(e) =>
                  setForm({ ...form, productName: e.target.value })
                }
                className="w-full rounded border px-4 py-2"
              />
              <input
                type="text"
                placeholder="Kategori"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full rounded border px-4 py-2"
              />
              <input
                type="number"
                placeholder="Harga"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full rounded border px-4 py-2"
              />
              <input
                type="text"
                placeholder="Deskripsi"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full rounded border px-4 py-2"
              />
              <input
                type="text"
                placeholder="URL Gambar"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="w-full rounded border px-4 py-2"
              />
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded border px-4 py-2"
              />
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full rounded border px-4 py-2"
              >
                <option value="Diproses">Diproses</option>
                <option value="Selesai">Selesai</option>
              </select>
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

export default AdminTransactions
