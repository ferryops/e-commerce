import Image from 'next/image'

const AboutPage = () => {
  const team = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Founder & CEO',
      image: '/assets/people/team1.png',
      bio: 'John adalah pendiri E-commerce dan bertanggung jawab atas arah dan visi perusahaan. Dengan pengalaman lebih dari 10 tahun di industri e-commerce, John memiliki visi untuk membuat belanja online lebih mudah dan terjangkau bagi semua orang.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'COO',
      image: '/assets/people/team2.png',
      bio: 'Jane mengelola operasi harian E-commerce dan memastikan segala sesuatu berjalan dengan lancar. Dia memiliki latar belakang yang kuat dalam manajemen dan logistik, memastikan pelanggan kami mendapatkan pengalaman terbaik.',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      role: 'CTO',
      image: '/assets/people/team3.png',
      bio: 'Alex adalah orang yang bertanggung jawab atas pengembangan teknologi di E-commerce. Dengan pengalaman di dunia teknologi, Alex memimpin tim IT untuk memastikan platform kami selalu inovatif dan aman.',
    },
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-semibold">Tentang E-commerce</h1>
        <p className="mt-4 text-lg">
          Pelajari lebih lanjut tentang toko kami, latar belakang, dan tim
          pengelola.
        </p>
      </div>

      <div className="mb-12 rounded-lg bg-[#1f1f1f] p-6 shadow-md">
        <h2 className="mb-4 text-3xl font-semibold">Latar Belakang Toko</h2>
        <p className="text-lg">
          E-commerce didirikan pada tahun 2025 dengan tujuan untuk memberikan
          pengalaman belanja online yang mudah dan menyenangkan. Kami
          menyediakan berbagai macam produk dengan harga yang bersaing, serta
          layanan pelanggan yang ramah dan responsif. Kami berkomitmen untuk
          menyediakan produk berkualitas dengan harga yang wajar kepada setiap
          pelanggan.
        </p>
      </div>

      <div>
        <h2 className="mb-5 text-center text-3xl font-semibold">
          Tim Pengelola
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden rounded-lg bg-[#1f1f1f] shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="h-48 w-full object-cover"
                width={1000}
                height={1000}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                <p className="mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
