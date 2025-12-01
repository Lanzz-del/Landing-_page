// App.js (Komponen React dengan Tailwind CSS)

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react'; // Menggunakan ikon dari 'lucide-react'

// Konstanta untuk data profil
const PROFILE = {
  name: 'Jefferson Khal El Kurniawan',
  role: 'AI-Powered Web Developer & Educator',
  slogan: 'Menerjemahkan Kecerdasan Buatan menjadi Solusi Digital yang Intuitif, didukung oleh Semangat Mengajar dan Organisasi.',
  about: 'Seorang AI-Powered Web Developer dengan kemampuan adaptasi teknologi yang mumpuni. Saya membawa pengalaman kepemimpinan dari organisasi tingkat kabupaten dan skill komunikasi sebagai pengajar ekstrakurikuler, yang memungkinkan saya tidak hanya membangun sistem yang kompleks, tetapi juga menjelaskan dan mengimplementasikannya dengan efektif.',
  skillsAI: ['Python', 'Scikit-learn', 'TensorFlow/Keras', 'LLM/NLP'],
  skillsWebDev: ['HTML', 'CSS', 'JavaScript (React)', 'Node.js/Flask', 'Git', 'Tailwind CSS'],
  projects: [
    {
      title: 'Interactive Image Classifier API',
      tech: 'Flask + TensorFlow',
      desc: 'Model Klasifikasi Gambar yang di-deploy sebagai API menggunakan Flask, memungkinkan pengguna mengunggah gambar untuk prediksi real-time.',
      image: 'https://via.placeholder.com/400x250/007bff/ffffff?text=Image+Classifier+API',
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Modern E-Commerce Dashboard',
      tech: 'React + Tailwind',
      desc: 'Dashboard Admin E-Commerce yang responsif dan cepat, dibangun dengan React dan styling utility-first dari Tailwind CSS.',
      image: 'https://via.placeholder.com/400x250/007bff/ffffff?text=E-Commerce+Dashboard',
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Real-time Text Sentiment Analyzer',
      tech: 'Node.js + NLTK (via API)',
      desc: 'Aplikasi web yang menganalisis sentimen teks input secara instan, menggunakan Node.js untuk backend ringan dan NLTK untuk pemrosesan.',
      image: 'https://via.placeholder.com/400x250/007bff/ffffff?text=Sentiment+Analyzer',
      liveLink: '#',
      codeLink: '#',
    },
  ],
};

const PrimaryColor = '#007bff'; // Biru Elektrik

// Komponen Reusable: Skill Badge
const SkillBadge = ({ name }) => (
  <span className="inline-block bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-white hover:text-[#007bff] transition duration-300 mr-2 mb-2">
    {name}
  </span>
);

// =================================================================
// 1. HERO SECTION
// =================================================================
const HeroSection = () => (
  <section id="home" className="py-24 md:py-32 bg-gray-900 text-white min-h-screen flex items-center">
    <div className="container mx-auto px-6 max-w-5xl text-center">
      <p className="text-lg font-medium text-[#007bff] mb-3">{PROFILE.role}</p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
        Halo, Saya <span className="text-[#007bff]">{PROFILE.name}</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
        {PROFILE.slogan}
      </p>
      <div className="flex justify-center space-x-4 mb-10">
        <a href="#portfolio" className="bg-[#007bff] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-[#007bff]/50">
          Lihat Portofolio
        </a>
      </div>
      
      {/* Social Links */}
      <div className="flex justify-center space-x-6 text-gray-400">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#007bff] transition duration-300">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#007bff] transition duration-300">
          <Linkedin size={28} />
        </a>
        <a href="mailto:email@example.com" className="hover:text-[#007bff] transition duration-300">
          <Mail size={28} />
        </a>
      </div>
    </div>
  </section>
);

// =================================================================
// 2. ABOUT ME SECTION
// =================================================================
const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-gray-800 text-white">
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#007bff]">Tentang Saya</h2>
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl">
        <p className="text-lg leading-relaxed text-gray-300">
          {PROFILE.about}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-300 font-semibold">
          Keahlian saya terletak pada persimpangan antara pengembangan web modern dan implementasi model kecerdasan buatan.
        </p>
      </div>
    </div>
  </section>
);

// =================================================================
// 3. SKILLS/TECH STACK SECTION
// =================================================================
const SkillsSection = () => (
  <section id="skills" className="py-20 md:py-28 bg-gray-900 text-white">
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#007bff]">Keahlian Teknis</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Kolom AI/ML */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-[#007bff]">
          <h3 className="text-2xl font-semibold mb-4 text-white">AI / Machine Learning</h3>
          <div className="flex flex-wrap">
            {PROFILE.skillsAI.map((skill, index) => (
              <SkillBadge key={index} name={skill} />
            ))}
          </div>
        </div>

        {/* Kolom Web Development */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-[#007bff]">
          <h3 className="text-2xl font-semibold mb-4 text-white">Web Development</h3>
          <div className="flex flex-wrap">
            {PROFILE.skillsWebDev.map((skill, index) => (
              <SkillBadge key={index} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// =================================================================
// 4. PORTFOLIO SECTION
// =================================================================
const PortfolioSection = () => (
  <section id="portfolio" className="py-20 md:py-28 bg-gray-800 text-white">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#007bff]">Portofolio Proyek</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {PROFILE.projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-500 border-b-4 border-[#007bff]">
            {/* Placeholder Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-[#007bff] mb-3 font-medium">{project.tech}</p>
              <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
              
              <div className="flex space-x-3">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#007bff] text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Demo Live
                </a>
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white text-sm px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// =================================================================
// 5. CONTACT SECTION & FOOTER
// =================================================================
const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-gray-900 text-white">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#007bff]">Hubungi Saya</h2>
      
      <form className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-2xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nama Lengkap</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-[#007bff] focus:border-[#007bff] transition duration-300"
            placeholder="Masukkan nama Anda"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Alamat Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-[#007bff] focus:border-[#007bff] transition duration-300"
            placeholder="Masukkan email aktif Anda"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Pesan</label>
          <textarea 
            id="message" 
            rows="4} 
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-[#007bff] focus:border-[#007bff] transition duration-300"
            placeholder="Apa yang bisa saya bantu?"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-[#007bff] hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-[1.01]"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  </section>
);

// =================================================================
// FOOTER
// =================================================================
const Footer = () => (
  <footer className="bg-gray-950 py-6 text-center text-gray-400 border-t border-gray-800">
    <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved. | Built with React & Tailwind CSS.</p>
  </footer>
);

// =================================================================
// MAIN APP COMPONENT
// =================================================================
function App() {
  return (
    <div className="bg-[#333] min-h-screen font-sans">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
