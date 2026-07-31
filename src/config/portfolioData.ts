import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://daffarch.github.io/portofolio", // update if you have a custom domain
    pdf: "/CV- Daffa Rachel P.pdf",
  },
  personal: {
    name: "Daffa Rachel Putra",
    title: "Technology Enthusiast | Data Analytics | Web Development | Visual Storytelling",
    headline: "Web Development · Data Analytics · Visual Storytelling",
    // avatar can be a string, an object with { url, label }, or an array of those.
    avatar: [
      // use public root path so Vite serves the static asset from /public/profile.jpg
      { url: "./foto1.jpeg", label: "" },
      { url: "./foto2.jpeg", label: "" },
    ],
    summary:
      "Lulusan D3 Teknologi Informasi Universitas Brawijaya dengan minat di bidang Data Analytics dan Software Development. Berpengalaman dalam membangun aplikasi web modern, mengelola data, dan mengotomatisasi proses bisnis. Aktif mengembangkan kemampuan di bidang Web Development, SQL, dan pembuatan konten visual.",
    // optional hero summary used in the site hero; keeps a concise, senior-level intro tuned to your data
    hero: {
      summary:
        "Lulusan D3 Teknologi Informasi Universitas Brawijaya dengan minat di bidang Data Analytics dan Software Development. Memiliki pengalaman sebagai Data Analyst Intern dalam mengelola data, membangun dashboard, dan mengotomatisasi proses menggunakan Microsoft Excel serta VBA Macro. Saat ini saya juga aktif mengembangkan aplikasi web yang modern, responsif, dan berfokus pada pengalaman pengguna. Saya senang mempelajari teknologi baru dan terus meningkatkan kemampuan di bidang SQL, Power BI, serta pengembangan perangkat lunak untuk membangun solusi yang efisien dan bermanfaat.",
    },
    contact: {
      email: "daffarachel72@gmail.com",
      phone: "081553171503",
      location: "Pasuruan, Jawa timur Indonesia",
      website: "https://daffarch.github.io/portofolio",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/daffa-rachel-putra-310180312/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/daffarch",
          icon: "SiGithub",
        },
        {
          label: "Instagram",
          url: "https://www.instagram.com/daffarchh?igsh=MTIxMGlwYXFsN21xcg%3D%3D&utm_source=qr",
          icon: "SiInstagram",
        },

      ],
    },
  },
  highlights: [
    "Lulusan D3 Teknologi Informasi Universitas Brawijaya",
    "Memiliki Pengalaman Magang sebagai Data Analyst",
    "Berfokus pada Software Development dan Web Development",
    "Berkontribusi dalam Digitalisasi dan Pengelolaan Jadwal Kerja",
    "Mampu Bekerja Sama dalam Tim dan Beradaptasi dengan Cepat",
    "Terus Mengembangkan Kemampuan Mengikuti Perkembangan Teknologi",
  ],
  skills: [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          level: 80,
          icon: "SiReact",
          category: "frontend",
          years: 1,
          note: "Used since 2025",
        },
        {
          name: "JavaScript",
          level: 80,
          icon: "SiJavascript",
          category: "frontend",
          years: 1,
          note: "Used since 2025",
        },
        {
          name: "HTML5",
          level: 85,
          icon: "SiHtml5",
          category: "frontend",
          years: 3,
          note: "Used since 2023",
        },
        {
          name: "CSS3",
          level: 85,
          icon: "SiCss3",
          category: "frontend",
          years: 3,
          note: "Used since 2023",
        },
        {
          name: "Tailwind CSS",
          level: 85,
          icon: "SiTailwindcss",
          category: "frontend",
          years: 3,
          note: "Used since 2023",
        },
        {
          name: "UI",
          level: 80,
          icon: "SiFigma",
          category: "frontend",
          years: 3,
          note: "Used since 2023",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "PHP Native",
          level: 85,
          icon: "SiPhp",
          category: "backend",
          years: 3,
        },
        {
          name: "Laravel",
          level: 85,
          icon: "SiLaravel",
          category: "backend",
          years: 3,
        },
        {
          name: "Python",
          level: 80,
          icon: "SiPython",
          category: "backend",
          years: 1.5,
        },
        {
          name: "Node.js",
          level: 80,
          icon: "SiNodedotjs",
          category: "backend",
          years: 1,
        },
        {
          name: "Excel VBA",
          level: 80,
          icon: "SiMicrosoftexcel",
          category: "backend",
          years: 0.5,
        },
      ],
    },
    {
      title: "Video Editor & Design",
      skills: [
        {
          name: "CapCut",
          level: 95,
          category: "multimedia",
          years: 9,
        },
        {
          name: "VN Video Editor",
          level: 95,
          category: "multimedia",
          years: 9,
        },
        {
          name: "Canva",
          level: 85,
          icon: "SiCanva",
          category: "multimedia",
          years: 5,
        },
      ],
    },

    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          level: 85,
          icon: "SiMysql",
          category: "database",
          years: 3,
        },
        {
          name: "Microsoft Excel",
          level: 70,
          icon: "SiMicrosoftexcel",
          category: "database",
          years: 0.5,
        },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        {
          name: "GitHub",
          level: 85,
          icon: "SiGithub",
          category: "tooling",
          years: 3,
        },
        {
          name: "VS Code",
          level: 85,
          icon: "SiVisualstudiocode",
          category: "tooling",
          years: 3,
        },
        {
          name: "Power BI",
          level: 70,
          icon: "SiPowerbi",
          category: "tooling",
          years: 1,
        },
        {
          name: "Postman",
          level: 75,
          icon: "SiPostman",
          category: "tooling",
          years: 1,
        },
      ],
    },
  ],
  experience: [
    {
      id: "kraft-heinz-intern",
      title: "Data Analyst Intern",
      company: "PT Kraft Heinz ABC",
      location: "Pasuruan, Jawa Timur",
      date: { start: "2024-01", end: "2024-06" },
      summary:
        "Magang sebagai Data Analyst yang bertanggung jawab dalam mengelola data, membangun dashboard, dan mengotomatisasi proses kerja menggunakan Microsoft Excel serta VBA Macro.",
      bullets: [
        "Mengelola dan menganalisis data karyawan untuk area assembling.",
        "Membangun sistem digitalisasi jadwal shift karyawan berbasis web menggunakan Laravel dan MySQL.",
        "Mengotomatisasi pembuatan jadwal shift menggunakan Excel VBA Macro.",
        "Menyusun dokumen Work Instruction (SOP) untuk pengoperasian mesin SOLPAC.",
      ],
      tech: [
        "Laravel",
        "MySQL",
        "Excel VBA",
        "Microsoft Excel",
        "JavaScript",
      ],
    },
  ],
  projects: [
    {
      id: "jadwal-shift-assembling",
      title: "Digitalisasi Jadwal Shift Karyawan Assembling",
      description:
        "Sistem informasi berbasis web untuk mengelola jadwal shift karyawan pada area assembling di PT Kraft Heinz ABC secara digitalisasi. Aplikasi ini bertujuan untuk mempermudah admin dalam melakukan absensi dan pengelolaan data karyawan.",
      tags: ["Laravel", "Bootstrap", "Node.js", "MySQL", "CSS", "JavaScript", "Python"],
      image: ["./jadwalshift.mp4", "./karyawan.mp4"],
      isUnderDevelopment: false,
    },
    {
      id: "aplikasi-lelang",
      title: "Platform Lelang Online Interaktif",
      description:
        "Sebuah platform lelang digital seru yang dirancang untuk mempertemukan kolektor dan antusias dalam satu wadah yang aman dan terpercaya. Dibangun menggunakan PHP Native dan MySQL, aplikasi ini memberikan pengalaman menawar (bidding) yang real-time, transparan, dan sangat mudah digunakan. Sistem ini memungkinkan para pengguna untuk berkompetisi secara langsung demi mendapatkan barang impian mereka dengan penawaran terbaik!",
      tags: ["PHP Native", "MySQL", "CSS", "JavaScript"],
      image: "./lelang.mp4",
      isUnderDevelopment: false,
    },
    {
      id: "haji-umrah-ticketing",
      title: "Website Jadwal & Tiket Haji dan Umrah",
      description:
        "Platform pemesanan tiket dan penjadwalan penerbangan khusus untuk perjalanan ibadah Haji dan Umrah. Dilengkapi dengan fitur pencarian jadwal, manajemen tiket, dan antarmuka pengguna yang modern dan interaktif.",
      tags: ["HTML", "Tailwind CSS"],
      image: "./project1mubarak.mp4",
      isUnderDevelopment: false,
    },

    {
      id: "jadwal-shift-excel-macro",
      title: "Otomatisasi Jadwal Shift Karyawan",
      description:
        "Proyek pembuatan jadwal shift karyawan yang sebelumnya dilakukan melalui input manual, kini telah diotomatisasi. Pengguna hanya perlu memilih data dari dropdown yang terintegrasi dengan Macro Excel. Hasil jadwal langsung jadi secara otomatis dan siap dicetak sebagai hardfile, sehingga sangat mempermudah pekerjaan admin menjadi lebih praktis dan tidak ribet.",
      tags: ["Excel", "Macro", "VBA", "Data Entry"],
      image: "./excel.mp4",
      isUnderDevelopment: false,
    },
    {
      id: "film-pendek-covid",
      title: "Film Pendek: Juara Favorit",
      description:
        "Menceritakan dua orang siswa bernama Daffa dan Irsyad yang merupakan salah satu dari sekian banyak siswa yang terkena dampak pandemi COVID-19. Mereka merasa bosan dengan hanya berdiam diri di kos. Karya ini berhasil meraih penghargaan sebagai Juara Favorit.",
      tags: ["CapCut", "Camera", "Cinematography"],
      image: ["./film.mp4", "./fotojuara.png"],
      isUnderDevelopment: false,
    },
    {
      id: "sop-solpac-machine",
      title: "Work Instruction (SOP) Development – SOLPAC Machine",
      description:
        "Menyusun dan mengembangkan dokumen Work Instruction (SOP) untuk proses pengoperasian dan pembersihan Mesin SOLPAC berdasarkan observasi lapangan serta koordinasi dengan operator. Dokumentasi mencakup langkah operasional, persyaratan keselamatan (K3), dan visual pendukung sehingga prosedur kerja menjadi lebih terstruktur dan mudah dipahami.",
      tags: ["Microsoft Word", "Microsoft Excel", "Canva", "Microsoft Visio", "SOP Development", "Technical Documentation"],
      image: "./ikmesin.mp4",
      isUnderDevelopment: false,
    },
  ],
  education: [
    {
      degree: "D3 Teknologi Informasi",
      school: "Universitas Brawijaya",
      date: "2022-2025",
    },
  ],
  certifications: [],  // Tambahkan sertifikasi kamu di sini nanti
  extras: {
    languages: [
      { name: "Bahasa Indonesia", level: "Native" },
      { name: "English", level: "Intermediate" },
    ],
    interests: ["web development", "data analytics", "video editing", "cinematography"],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  Chatbot: "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  // Landing Zone Orchestrator tags
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  GCP: "bg-red-600 text-white",
  Algorithms: "bg-blue-500 text-blue-100",
  DSA: "bg-purple-300 text-purple-900",
  ML: "bg-blue-200 text-blue-800",
  AI: "bg-gray-200 text-gray-800",
  "AI & ML": "bg-amber-100 text-amber-900",
  Visualization: "bg-orange-100 text-purple-900",
  "Next.js": "bg-black text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
  Excel: "bg-green-100 text-green-800",
  Macro: "bg-yellow-100 text-yellow-800",
  VBA: "bg-blue-100 text-blue-800",
  "Microsoft Word": "bg-blue-600 text-white",
  "Microsoft Excel": "bg-green-600 text-white",
  Canva: "bg-cyan-500 text-white",
  "Microsoft Visio": "bg-indigo-600 text-white",
  "SOP Development": "bg-slate-100 text-slate-800",
  "Technical Documentation": "bg-stone-100 text-stone-800",
  CapCut: "bg-gray-800 text-white",
  Camera: "bg-neutral-100 text-neutral-800",
  Cinematography: "bg-rose-100 text-rose-800",
};
