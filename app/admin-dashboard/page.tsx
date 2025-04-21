"use client";
import { products } from "@/constants/products";
import { transactions } from "@/constants/transactions";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [completedTransactions, setCompletedTransactions] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    setTotalProducts(products.length);
    setTotalTransactions(transactions.length);

    const completed = transactions.filter(
      (transaction) => transaction.status === "Selesai"
    ).length;
    setCompletedTransactions(completed);

    const revenue = transactions
      .filter((transaction) => transaction.status === "Selesai")
      .reduce((acc, transaction) => acc + transaction.totalAmount, 0);
    setTotalRevenue(revenue);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Dashboard Admin
      </h1>

      {/* Ringkasan Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-lg font-semibold text-gray-800">Total Produk</h2>
          <p className="text-3xl font-bold text-blue-600">{totalProducts}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Total Transaksi
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {totalTransactions}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Transaksi Selesai
          </h2>
          <p className="text-3xl font-bold text-green-600">
            {completedTransactions}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Total Pendapatan
          </h2>
          <p className="text-3xl font-bold text-green-600">
            Rp {totalRevenue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Logout Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
