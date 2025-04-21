"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  // Check user is logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  const banners = [
    {
      id: 1,
      image: "/images/banner1.jpg",
      title: "Diskon 50% Untuk Semua Produk!",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      title: "Promo Akhir Tahun, Buruan Belanja!",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Produk A",
      image: "/images/product1.jpg",
      price: 100000,
      description: "Produk unggulan berkualitas tinggi.",
    },
    {
      id: 2,
      name: "Produk B",
      image: "/images/product2.jpg",
      price: 200000,
      description: "Produk dengan harga terjangkau.",
    },
    {
      id: 3,
      name: "Produk C",
      image: "/images/product3.jpg",
      price: 300000,
      description: "Produk premium dengan fitur lengkap.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800">
          Selamat Datang di E-Shop
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Temukan produk terbaik dengan harga terbaik hanya di E-Shop!
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-5">
          Banner Promosi
        </h2>
        <div className="flex justify-center space-x-4">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  {banner.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-5">
          Produk Unggulan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
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
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    Rp {product.price.toLocaleString()}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
