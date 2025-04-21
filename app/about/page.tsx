const AboutPage = () => {
  const team = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      image: "/images/team1.jpg",
      bio: "John adalah pendiri E-Shop dan bertanggung jawab atas arah dan visi perusahaan. Dengan pengalaman lebih dari 10 tahun di industri e-commerce, John memiliki visi untuk membuat belanja online lebih mudah dan terjangkau bagi semua orang.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "COO",
      image: "/images/team2.jpg",
      bio: "Jane mengelola operasi harian E-Shop dan memastikan segala sesuatu berjalan dengan lancar. Dia memiliki latar belakang yang kuat dalam manajemen dan logistik, memastikan pelanggan kami mendapatkan pengalaman terbaik.",
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "CTO",
      image: "/images/team3.jpg",
      bio: "Alex adalah orang yang bertanggung jawab atas pengembangan teknologi di E-Shop. Dengan pengalaman di dunia teknologi, Alex memimpin tim IT untuk memastikan platform kami selalu inovatif dan aman.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800">Tentang E-Shop</h1>
        <p className="mt-4 text-lg text-gray-600">
          Pelajari lebih lanjut tentang toko kami, latar belakang, dan tim
          pengelola.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Latar Belakang Toko
        </h2>
        <p className="text-gray-700 text-lg">
          E-commerce didirikan pada tahun 2025 dengan tujuan untuk memberikan
          pengalaman belanja online yang mudah dan menyenangkan. Kami
          menyediakan berbagai macam produk dengan harga yang bersaing, serta
          layanan pelanggan yang ramah dan responsif. Kami berkomitmen untuk
          menyediakan produk berkualitas dengan harga yang wajar kepada setiap
          pelanggan.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-5">
          Tim Pengelola
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
                <p className="mt-2 text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
