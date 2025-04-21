"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/constants/products";

const AdminProducts = () => {
  const router = useRouter();
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user || user !== "admin123") {
      router.push("/login");
    }
  }, [router]);

  const handleAddProduct = () => {
    router.push("/admin/add-product");
  };

  const handleEditProduct = (id: number) => {
    router.push(`/admin/edit-product/${id}`);
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProductList = productList.filter(
      (product) => product.id !== id
    );
    setProductList(updatedProductList);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Kelola Produk</h1>

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
              <th className="px-6 py-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.id} className="border-b border-gray-200">
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">
                  Rp {product.price.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEditProduct(product.id)}
                    className="text-yellow-500 hover:text-yellow-700 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
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

export default AdminProducts;
