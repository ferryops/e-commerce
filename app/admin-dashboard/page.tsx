'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { db, collection, getDocs } from '@/libs/firebase'

type Product = {
  id?: string
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

const AdminDashboard = () => {
  const router = useRouter()
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [completedTransactions, setCompletedTransactions] = useState(0)
  const [totalRevenue, setTotalRevenue] = useState(0)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user || user !== 'admin123') {
      router.push('/login')
    }
  }, [router])

  useEffect(() => {
    const fetchData = async () => {
      const productsSnap = await getDocs(collection(db, 'products'))
      const transactionsSnap = await getDocs(collection(db, 'transactions'))

      const products = productsSnap.docs.map((doc) => doc.data())
      const transactions = transactionsSnap.docs.map((doc) =>
        doc.data()
      ) as Transaction[]

      setTotalProducts(products.length)
      setTotalTransactions(transactions.length)

      const completed = transactions.filter((t) => t.status === 'Selesai')
      setCompletedTransactions(completed.length)

      const revenue = completed.reduce((acc, t) => acc + t.totalAmount, 0)
      setTotalRevenue(revenue)
    }

    fetchData()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-8 text-center text-3xl font-semibold">
        Dashboard Admin
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-[#1f1f1f] p-6 text-center shadow-lg">
          <h2 className="text-lg font-semibold">Total Produk</h2>
          <p className="text-3xl font-bold text-blue-600">{totalProducts}</p>
        </div>

        <div className="rounded-lg bg-[#1f1f1f] p-6 text-center shadow-lg">
          <h2 className="text-lg font-semibold">Total Transaksi</h2>
          <p className="text-3xl font-bold text-blue-600">
            {totalTransactions}
          </p>
        </div>

        <div className="rounded-lg bg-[#1f1f1f] p-6 text-center shadow-lg">
          <h2 className="text-lg font-semibold">Transaksi Selesai</h2>
          <p className="text-3xl font-bold text-green-600">
            {completedTransactions}
          </p>
        </div>

        <div className="rounded-lg bg-[#1f1f1f] p-6 text-center shadow-lg">
          <h2 className="text-lg font-semibold">Total Pendapatan</h2>
          <p className="text-3xl font-bold text-green-600">
            Rp {totalRevenue.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleLogout}
          className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default AdminDashboard
