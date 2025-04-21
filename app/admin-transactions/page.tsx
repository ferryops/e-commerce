"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { transactions } from "@/constants/transactions";

const AdminTransactions = () => {
  const router = useRouter();
  const [userTransactions, setAdminTransactions] = useState(transactions);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user || user !== "admin123") {
      router.push("/login");
    }
  }, [router]);

  const handleAddProduct = () => {
    router.push("/admin/add-product");
  };

  const handleEditTransaction = (id: number) => {
    router.push(`/user/edit-transaction/${id}`);
  };

  const handleDeleteTransaction = (id: number) => {
    const updatedTransactions = userTransactions.filter(
      (transaction) => transaction.id !== id
    );
    setAdminTransactions(updatedTransactions);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Daftar Transaksi Pengguna
      </h1>

      <div className="text-right mb-6">
        <button
          onClick={handleAddProduct}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Tambah Produk
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#1f1f1f] shadow-md rounded-lg">
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
            {userTransactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-200">
                <td className="px-6 py-4">{transaction.product.name}</td>
                <td className="px-6 py-4">{transaction.product.category}</td>
                <td className="px-6 py-4">
                  Rp {transaction.product.price.toLocaleString()}
                </td>
                <td className="px-6 py-4">{transaction.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      transaction.status === "Selesai"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    } text-white`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEditTransaction(transaction.id)}
                    className="text-yellow-500 hover:text-yellow-700 mr-4"
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
    </div>
  );
};

export default AdminTransactions;
