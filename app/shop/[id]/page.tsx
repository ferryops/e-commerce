"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/constants/products";

const ProductDetailPage = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const [product, setProduct] = useState<{
    id: any;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product.id === Number(id)
    );
    setProduct(selectedProduct || null);
  }, [id]);

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Nama dan Kategori Produk */}
        <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{product.category}</p>

        {/* Gambar Produk */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover mb-4 rounded-lg"
        />

        {/* Deskripsi Produk */}
        <p className="text-lg text-gray-700 mb-6">{product.description}</p>

        {/* Harga Produk */}
        <p className="text-xl font-semibold text-gray-900">
          Rp {product.price.toLocaleString()}
        </p>

        {/* Tombol Tambah ke Keranjang */}
        <button className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
