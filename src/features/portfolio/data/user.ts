import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Bima",
  lastName: "Prasetio",
  displayName: "Bima Prasetio",
  username: "bimamib",
  gender: "male",
  pronouns: "he/him",

  bio: "I'm Bima Prasetio, a Front-End Web and Mobile Developer based in Indonesia. I build responsive web applications and intuitive mobile experiences, turning ideas into practical, user-friendly digital products.",
  bioId:
    "Saya Bima Prasetio, seorang Front-End Web dan Mobile Developer yang berbasis di Indonesia. Saya membangun aplikasi web responsif dan pengalaman mobile yang intuitif, mengubah ide menjadi produk digital yang praktis dan mudah digunakan.",

  flipSentences: [
    "Front-End Web Developer",
    "Mobile Developer",
    "Responsive UI Developer",
    "User Experience Builder",
  ],
  flipSentencesId: [
    "Front-End Web Developer",
    "Mobile Developer",
    "Pengembang UI Responsif",
    "Perancang Pengalaman Pengguna",
  ],

  address: "Indonesia",
  email: "YmltYXByYXN0MTYwMUBnbWFpbC5jb20=", // base64 of bimaprast1601@gmail.com
  phone: "+62 812-1238-2274",
  website: "https://bimaa-portofolio-v3.vercel.app/",

  jobTitle: "Front-End Web Developer",
  seoTitle: "Bima Prasetio | Front-End Web Developer",
  seoDescription:
    "I'm Bima Prasetio, a Front-End Web Developer from Indonesia. I build responsive, user-friendly web applications with a focus on intuitive interfaces and polished digital experiences.",

  jobs: [
    // {
    //   title: "AI Engineer Intern",
    //   company: "PT Custompedia Creative Group",
    //   website: "https://www.instagram.com/custompedia/",
    //   experienceId: "custompedia",
    // },
  ],

  about: `I'm a Front-End Web and Mobile Developer based in Indonesia, specializing in building intuitive, responsive web applications and engaging mobile experiences. I focus on creating reliable, user-centered products that turn ideas into practical digital solutions.`,
  aboutId: `Saya seorang Front-End Web dan Mobile Developer yang berbasis di Indonesia, dengan spesialisasi dalam membangun aplikasi web yang intuitif dan responsif serta pengalaman mobile yang menarik. Saya fokus menciptakan produk yang andal dan berorientasi pada pengguna, mengubah ide menjadi solusi digital yang praktis.`,

  avatar: "/image/bimss.webp",
  ogImage: "/image/og-1.png",
  sameAs: [
    "https://bimaa-portofolio-v3.vercel.app/",
    "https://github.com/bimamib",
    "https://linkedin.com/in/bimamib/",
    // "https://medium.com/@zickriann",
    // "https://huggingface.co/zickrian",
    // "https://www.pinterest.com/espejodaniel50/",
  ],
  timeZone: "Asia/Jakarta",

  keywords: [
    "Bima Prasetio",
    "bimsss",
    "Bima Prasetio portfolio",
    "bimsss portfolio",
    "Front-End Web Developer Indonesia",
    "Front-End Developer Indonesia",
    "Mobile Developer Indonesia",
    "web development",
    "mobile development",
    "responsive web applications",
    "user interface development",
    "React developer",
    "front-end portfolio",
    "mobile developer portfolio",
  ],

  // Full ISO 8601 datetimes: Schema.org dateCreated/dateModified expect a
  // time component, and date-only values trip up structured-data validators.
  dateCreated: "2023-11-01T00:00:00Z",
  dateModified: "2026-07-20T00:00:00Z",
}
