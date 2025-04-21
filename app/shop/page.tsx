"use client";
import { products } from "@/constants/products";
import Link from "next/link";
import { useState } from "react";

const ShopPage = () => {
  // State for search, filter, and sorting
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  // Filter products based on search, category, and price
  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || product.category === selectedCategory;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    return matchesSearchQuery && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-5">
          Toko Kami
        </h1>
        <div className="flex justify-center space-x-4">
          <div className="w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="w-full sm:w-1/3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="Semua">Semua Kategori</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Pakaian">Pakaian</option>
              <option value="Makanan">Makanan</option>
            </select>
          </div>

          <div className="w-full sm:w-1/3 flex space-x-2">
            <input
              type="number"
              placeholder="Min Harga"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="Max Harga"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-lg font-semibold text-gray-900">
                Rp {product.price.toLocaleString()}
              </p>
              <div className="flex flex-col">
                <Link href={`/shop/${product.id}`}>
                  <span className="text-xs underline">Lihat Detail</span>
                </Link>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4">
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
