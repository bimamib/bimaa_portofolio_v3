"use client"

import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import type { Project } from "@/features/portfolio/types/projects"
import type { Language } from "@/hooks/use-language-preference"
import { localize } from "@/lib/i18n/localize"
import { useTranslation } from "@/lib/i18n/use-translation"

function getDisplayDomain(url?: string): string {
  if (!url) return ""
  try {
    const parsed = new URL(url)
    return parsed.hostname.replace(/^www\./, "")
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
  }
}

const SHORT_PROJECT_NAMES: Record<
  string,
  { name: string; desc: string; descId?: string }
> = {
  ngemeals: {
    name: "Ngemeals",
    desc: "Meal Discovery and Recipe Explorer",
    descId: "Penjelajah Makanan dan Resep",
  },
  bookshelfApps: {
    name: "Bookshelf Apps",
    desc: "Personal Book Collection Manager",
    descId: "Pengelola Koleksi Buku Pribadi",
  },
  githubUserApp: {
    name: "GitHub User Finder",
    desc: "Android GitHub Profile Explorer",
    descId: "Penjelajah Profil GitHub Android",
  },
  "moosic-apps": {
    name: "Moosic",
    desc: "Music Discovery and Player App",
    descId: "Aplikasi Penjelajah dan Pemutar Musik",
  },
  "notes-apps": {
    name: "Notes Apps",
    desc: "React Note Management App",
    descId: "Aplikasi Pengelolaan Catatan React",
  },
  // "financial-assistant-bot": {
  //   name: "Finance Bot",
  //   desc: "Personal Budgeting Assistant",
  //   descId: "Asisten Anggaran Pribadi",
  // },
  // floodsegmen: {
  //   name: "FloodSeg",
  //   desc: "Aerial Flood Area Segmentation",
  //   descId: "Segmentasi Area Banjir dari Udara",
  // },
  // "brazilian-ecommerce-dashboard": {
  //   name: "Olist Analytics",
  //   desc: "E-commerce Sales & Delivery Dashboard",
  //   descId: "Dashboard Penjualan & Pengiriman E-commerce",
  // },
  // lostandfound: {
  //   name: "SITEMU",
  //   desc: "Campus Lost & Found Portal",
  //   descId: "Portal Barang Hilang & Ditemukan Kampus",
  // },
  // "diabetes-classification": {
  //   name: "Diabetes Predictor",
  //   desc: "Health Screening & Early Risk Model",
  //   descId: "Skrining Kesehatan & Model Risiko Dini",
  // },
  // imageclas: {
  //   name: "Veggie Classifier",
  //   desc: "Vegetable Image Recognition App",
  //   descId: "Aplikasi Pengenalan Gambar Sayuran",
  // },
}

function parseProjectInfo(project: Project, language: Language) {
  const short = SHORT_PROJECT_NAMES[project.id]
  if (short) {
    return {
      name: short.name,
      desc: localize(language, short.desc, short.descId),
    }
  }
  if (project.title.includes(" - ")) {
    const [name, ...rest] = project.title.split(" - ")
    return { name: name.trim(), desc: rest.join(" - ").trim() }
  }
  if (project.title.includes(" – ")) {
    const [name, ...rest] = project.title.split(" – ")
    return { name: name.trim(), desc: rest.join(" – ").trim() }
  }
  return {
    name: project.title,
    desc: localize(language, project.tagline, project.taglineId),
  }
}

export function ProjectCard({
  project,
  eager,
}: {
  project: Project
  eager?: boolean
}) {
  const { language } = useTranslation()
  const { name, desc } = parseProjectInfo(project, language)
  const domain = getDisplayDomain(
    project.link || project.links.live || project.links.repo
  )

  return (
    <div className="mx-3 border-b border-line/70 last:border-b-0 sm:mx-5">
      <Link
        href={`/projects/${project.id}`}
        prefetch={false}
        className="group -mx-2.5 flex items-start gap-3.5 rounded-xl px-2.5 py-3 transition-[background-color] duration-200 ease-out hover:bg-accent-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:gap-4 sm:py-3.5"
      >
        {/* Rectangular Image / Thumbnail */}
        <div className="relative mt-0.5 aspect-video w-20 shrink-0 overflow-hidden rounded-md border border-line bg-muted select-none sm:w-20">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 640px) 80px, 80px"
            quality={85}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
          />
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-4">
          {/* Name + Domain */}
          <div className="flex min-w-0 flex-col sm:w-56 sm:shrink-0 md:w-64">
            <div className="flex items-center gap-1.5 text-sm leading-snug font-semibold text-foreground sm:text-base">
              <span className="truncate">{name}</span>
              <ArrowUpRightIcon
                className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden
              />
            </div>
            {domain && (
              <span className="truncate text-xs text-muted-foreground/80 sm:text-sm">
                {domain}
              </span>
            )}
          </div>

          {/* Description / Subtitle */}
          <p className="mt-0.5 line-clamp-2 min-w-0 flex-1 text-xs leading-snug text-muted-foreground sm:mt-0.5 sm:text-sm">
            {desc}
          </p>
        </div>
      </Link>
    </div>
  )
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="relative bg-background py-1">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} eager={index === 0} />
      ))}
    </div>
  )
}
