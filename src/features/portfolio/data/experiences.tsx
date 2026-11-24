import {
  AstroidIcon,
  BarChart3Icon,
  FlaskConicalIcon,
  GraduationCapIcon,
  NetworkIcon,
  SchoolIcon,
  UsersIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "braincore.id",
    companyName: "PT Algo Network Indonesia",
    companyLogo: "/logos/braincore-1.png",
    companyWebsite: "https://braincore.id/",
    positions: [
      {
        id: "braincore.id-1",
        title: "Bussiness Process Automation Engineering",
        employmentPeriod: {
          start: "01.2024",
          end: "03.2025",
        },
        employmentType: "Freelance",
        icon: <AstroidIcon />,
        description: `- Braincore.id is a consultancy and project provider specializing in **AI, Data Science, and Machine Learning**.
- Serves both students and professionals.
- Worked as a freelancer in **Business Process Automation**.
- Developed internal tools to improve operational efficiency.
- Contributed to projects including a **MoM (Minutes of Meeting) Maker** and an **LMS (Learning Management System)**.
- Expanded technical skills by learning **HTMX, Alpine.js, and Vue.js**.`,
        descriptionId: `- Braincore.id adalah konsultan dan penyedia proyek di bidang **AI, Data Science, dan Machine Learning**.
- Melayani kebutuhan mahasiswa maupun profesional.
- Bekerja sebagai freelancer di bidang **Business Process Automation**.
- Mengembangkan tools internal untuk meningkatkan efisiensi operasional.
- Terlibat dalam pembuatan **MoM (Minutes of Meeting) Maker** dan **LMS (Learning Management System)**.
- Memperluas kemampuan teknis dengan mempelajari **HTMX, Alpine.js, dan Vue.js**.`,
        skills: [
          "Business Process Automation",
          "Internal Tools Development",
          "HTMX",
          "Alpine.js",
          "Vue.js",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "bangkit-academy-batch-2-2023",
    companyName:
      "Bangkit Academy led By Google, Tokopedia, Gojek, and Traveloka",
    companyLogo: "/logos/bangkit.webp",
    companyWebsite: "https://grow.google/intl/id_id/ai-skills/",
    positions: [
      {
        id: "bangkit-academy-batch-2-2023-1",
        title: "Mobile Development Cohort",
        employmentPeriod: {
          start: "08.2023",
          end: "12.2023",
        },
        employmentType: "Cohort",
        icon: <AstroidIcon />,
        description: `- Completed the **Bangkit Academy** programme, supported by Google, GoTo, Tokopedia, and Traveloka.
- Developed Android applications using **Kotlin**, **Android Studio**, and **MVVM architecture**.
- Applied the **Singleton design pattern** in Android development.
- Collaborated with participants from the **Machine Learning** and **Cloud Computing** learning paths.
- Co-developed **Jasa Karya**, an app connecting users with art services and creative companies.
- Implemented **API integration** and **Firebase Authentication**.
- Used **Firebase Realtime Database** to support the app’s data needs.
- Focused on delivering a smooth and user-friendly experience.`,
        descriptionId: `- Menyelesaikan program **Bangkit Academy** yang didukung oleh Google, GoTo, Tokopedia, dan Traveloka.
- Mengembangkan aplikasi Android menggunakan **Kotlin**, **Android Studio**, dan arsitektur **MVVM**.
- Menerapkan **Singleton design pattern** dalam pengembangan Android.
- Berkolaborasi dengan peserta dari jalur pembelajaran **Machine Learning** dan **Cloud Computing**.
- Mengembangkan **Jasa Karya**, aplikasi yang menghubungkan pengguna dengan layanan seni dan perusahaan kreatif.
- Mengintegrasikan **API** dan **Firebase Authentication**.
- Menggunakan **Firebase Realtime Database** untuk mendukung kebutuhan data aplikasi.
- Berfokus pada pengalaman pengguna yang lancar dan mudah digunakan.`,
        skills: [
          "Kotlin",
          "Android Development",
          "Android Studio",
          "MVVM Architecture",
          "Singleton Pattern",
          "API Integration",
          "Firebase Authentication",
          "Firebase Realtime Database",
          "Team Collaboration",
          "UI/UX",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  //   {
  //     id: "dinus-lab-assistant",
  //     companyName: "Universitas Dian Nuswantoro",
  //     companyLogo: "/logos/udinus.webp",
  //     companyWebsite: "https://dinus.ac.id",
  //     positions: [
  //       {
  //         id: "dinus-lab-1",
  //         title: "Laboratory Assistant",
  //         employmentPeriod: {
  //           start: "08.2025",
  //           end: "07.2026",
  //         },
  //         employmentType: "Part-time",
  //         icon: <FlaskConicalIcon />,
  //         description: `- Supported 4+ weekly lab sessions for programming and software development courses, assisting students with coding exercises, debugging, and practical implementation.
  // - Mentored 140+ junior students in programming fundamentals, helping them strengthen problem-solving skills through guided hands-on practice.`,
  //         descriptionId: `- Mendukung 4+ sesi laboratorium mingguan untuk mata kuliah pemrograman dan pengembangan perangkat lunak, membantu mahasiswa dalam latihan coding, debugging, dan implementasi praktis.
  // - Membimbing 140+ mahasiswa junior dalam dasar-dasar pemrograman, membantu mereka memperkuat kemampuan problem-solving melalui praktik langsung yang terarah.`,
  //         skills: [
  //           "Teaching",
  //           "Mentorship",
  //           "Programming Fundamentals",
  //           "Debugging",
  //           "Software Development",
  //         ],
  //       },
  //     ],
  //     isCurrentEmployer: false,
  //   },
  {
    id: "dicoding-academy",
    companyName: "MSIB Dicoding x Kampus Merdeka Cycle 4",
    companyLogo: "/logos/dicoding-academy.webp",
    companyWebsite: "https://dicoding.com",
    positions: [
      {
        id: "dicoding-academy-1",
        title: "Pengembangan Front-End Web dan Back-End",
        employmentPeriod: {
          start: "02.2023",
          end: "06.2023",
        },
        employmentType: "Cohort",
        icon: <NetworkIcon />,
        description: `- Completed the **Kampus Merdeka x Dicoding programme**, which prepares participants for careers in Indonesia’s technology industry.
- Focused on **Front-End Web Development**.
- Collaborated with other participants to develop a web application about **local fashion in Indonesia**.
- Integrated APIs to retrieve and display fashion-related information.`,
        descriptionId: `- Menyelesaikan program **Kampus Merdeka x Dicoding** yang mempersiapkan peserta untuk berkarier di industri teknologi Indonesia.
- Berfokus pada bidang **Front-End Web Development**.
- Berkolaborasi dengan peserta lain dalam mengembangkan aplikasi web tentang **fashion lokal di Indonesia**.
- Mengintegrasikan API untuk mengambil dan menampilkan informasi terkait fashion.`,
        skills: [
          "Front-End Web Development",
          "HTML",
          "CSS",
          "JavaScript",
          "API Integration",
          "Team Collaboration",
        ],
      },
    ],
  },
  //   {
  //     id: "blockvizo",
  //     companyName: "Blockvizo Research",
  //     companyLogo: "/logos/blockvizo.svg",
  //     positions: [
  //       {
  //         id: "blockvizo-1",
  //         title: "Research and Data Analyst",
  //         employmentPeriod: {
  //           start: "06.2024",
  //           end: "07.2025",
  //         },
  //         employmentType: "Part-time",
  //         icon: <BarChart3Icon />,
  //         description: `- Analyzed 50,000+ blockchain transaction records to identify behavioral patterns and predictive signals related to user activity, generating over Rp50 million in profit on crypto games by utilizing these insights.
  // - Developed machine learning models using Python and Scikit-learn, including Random Forest and Logistic Regression, achieving up to 85% prediction accuracy.
  // - Built analytical dashboards and visual reports to communicate key findings and support data-driven decision-making.`,
  //         descriptionId: `- Menganalisis 50.000+ catatan transaksi blockchain untuk mengidentifikasi pola perilaku dan sinyal prediktif terkait aktivitas pengguna, menghasilkan lebih dari Rp50 juta profit pada crypto games dengan memanfaatkan wawasan tersebut.
  // - Mengembangkan model machine learning menggunakan Python dan Scikit-learn, termasuk Random Forest dan Logistic Regression, mencapai akurasi prediksi hingga 85%.
  // - Membangun dashboard analitik dan laporan visual untuk mengomunikasikan temuan utama dan mendukung pengambilan keputusan berbasis data.`,
  //         skills: [
  //           "Data Analysis",
  //           "Python",
  //           "Machine Learning",
  //           "Dashboards",
  //           "Blockchain Analytics",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: "gdgoc-dinus",
  //     companyName: "GDGOC Universitas Dian Nuswantoro",
  //     companyLogo: "/logos/gdgoc.webp",
  //     companyWebsite: "https://gdg.community.dev",
  //     positions: [
  //       {
  //         id: "gdgoc-1",
  //         title: "Developer Community Member",
  //         employmentPeriod: {
  //           start: "11.2023",
  //           end: "11.2025",
  //         },
  //         employmentType: "Community",
  //         icon: <UsersIcon />,
  //         description: `- Participated in collaborative machine learning discussions and project reviews within the developer community, contributing insights on model development, data preprocessing, and evaluation techniques across multiple projects.
  // - Contributed to 10+ community discussions across 4 projects, sharing insights on development and analytics.`,
  //         descriptionId: `- Berpartisipasi dalam diskusi machine learning kolaboratif dan review proyek di dalam komunitas developer, memberikan kontribusi wawasan mengenai pengembangan model, data preprocessing, dan teknik evaluasi di berbagai proyek.
  // - Berkontribusi dalam 10+ diskusi komunitas di 4 proyek, berbagi wawasan seputar pengembangan dan analitik.`,
  //         skills: [
  //           "Community",
  //           "Machine Learning",
  //           "Project Reviews",
  //           "Data Preprocessing",
  //           "Evaluation",
  //         ],
  //       },
  //     ],
  //   },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "edu-uhamka",
        title: "Universitas Muhammadiyah Prof. Dr. HAMKA",
        employmentPeriod: {
          start: "2020",
          end: "2024",
        },
        icon: <GraduationCapIcon />,
        description: `- Developed strong teamwork skills through collaborative academic projects and group assignments across multiple semesters.
- Coordinate tasks and ensure they are completed on time.
- Practiced effective time management by balancing coursework, organizational activities, and personal development simultaneously.
- Strengthened communication skills through presentations, team discussions, and cross-functional collaboration with peers from diverse backgrounds.`,
        descriptionId: `- Mengembangkan kemampuan kerja tim yang kuat melalui proyek akademik kolaboratif dan tugas kelompok di berbagai semester.
- Mengoordinasikan tugas, dan memastikan penyelesaian tepat waktu.
- Melatih manajemen waktu yang efektif dengan menyeimbangkan perkuliahan, kegiatan organisasi, dan pengembangan diri secara bersamaan.
- Memperkuat kemampuan komunikasi melalui presentasi, diskusi tim, dan kolaborasi lintas fungsi dengan rekan-rekan dari latar belakang yang beragam.`,
        skills: [
          "Teamwork",
          "Leadership",
          "Time Management",
          "Communication",
          "Problem Solving",
        ],
      },
      //       {
      //         id: "edu-sma3",
      //         title: "SMA 3 Rembang",
      //         employmentPeriod: {
      //           start: "2020",
      //           end: "2023",
      //         },
      //         icon: <SchoolIcon />,
      //         description: `- Actively participated in various seminars and workshops to broaden knowledge and stay updated with current trends.
      // - Developed strong communication skills through active engagement in class discussions, presentations, and extracurricular activities.
      // - Built teamwork and problem-solving abilities by collaborating with peers on group projects and academic challenges.
      // - Frequently provided advice and support to friends facing personal or academic problems, strengthening interpersonal and empathy skills.`,
      //         descriptionId: `- Aktif berpartisipasi dalam berbagai seminar dan workshop untuk memperluas wawasan dan mengikuti perkembangan tren terkini.
      // - Mengembangkan kemampuan komunikasi yang kuat melalui keterlibatan aktif dalam diskusi kelas, presentasi, dan kegiatan ekstrakurikuler.
      // - Membangun kemampuan kerja tim dan pemecahan masalah dengan berkolaborasi bersama teman-teman dalam proyek kelompok dan tantangan akademik.
      // - Sering memberikan saran dan dukungan kepada teman-teman yang menghadapi masalah pribadi atau akademik, memperkuat kemampuan interpersonal dan empati.`,
      //         skills: [
      //           "Communication",
      //           "Teamwork",
      //           "Problem Solving",
      //           "Public Speaking",
      //           "Interpersonal Skills",
      //         ],
      //       },
    ],
  },
]
