"use client"

import Link from "next/link"
import DegreeProgress from "./DegreeProgress"
import TypewriterName from "./TypewriterName"
import { useTheme } from "./ThemeProvider"

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        theme === "dark" ? "bg-[#0f0f0f] text-[#d4d4d4]" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-[720px] mx-auto px-6 py-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-16">
          <h1 className={`text-xl font-bold mb-4 sm:mb-0 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Devansh Jain
          </h1>
          <nav className="text-sm">
            <Link href="/blog" className="hover:underline">
              blog
            </Link>
          </nav>
        </header>

        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className={`text-4xl font-bold mb-4 flex items-baseline gap-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            <span>Hi, I'm</span>
            <TypewriterName/>
          </h2>
          <ul className="mb-6 space-y-2">
            <li>🎓 Third Year Computer Science @ Wilfrid Laurier University</li>
            <li>🧠 I enjoy building meaningful full-stack apps</li>
          </ul>
          <p className="leading-relaxed">
            In my free time, I enjoy film, basketball, and learning more about machine learning to help solve real-world
            problems.
          </p>
        </section>

        {/* Latest Posts Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Latest Posts
            </h2>
            <Link href="/blog" className="text-sm hover:underline">
              See all posts
            </Link>
          </div>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/summer-2025-internship-shopify" className="hover:underline">
                • Interning at an Engineering Consulting Firm Summer 2025
              </Link>
            </li>
            <li>
              <Link href="/blog/brain-simulation-engine" className="hover:underline">
                • What University Doesn't Teach You About Real World development
              </Link>
            </li>
            <li>
              <Link href="/blog/learning-relational-algebra" className="hover:underline">
                • Notes on Learning Linear Algebra
              </Link>
            </li>
          </ul>
        </section>

        {/* Recent Projects Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Recent Projects
            </h2>
            <Link href="https://github.com/Devansh015?tab=repositories" className="text-sm hover:underline">
              See all projects
            </Link>
          </div>
          <ul className="space-y-3">
            <li>
              <Link href="https://github.com/Devansh015/DARP" className="hover:underline">
                • DARP – Brain Simulation using Cellular Automata
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Devansh015/wluNest-App" className="hover:underline">
                • wluNest – Student Housing Database
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Devansh015/go-url-shortner" className="hover:underline">
                • URL Shortener – Fast & Minimal Link Tool in Go
              </Link>
            </li>
          </ul>
        </section>

        {/* Degree Progress Section */}
        <section className="mb-16">
          <h2 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Degree Progress
          </h2>
          <DegreeProgress theme={theme} />
        </section>

        {/* Know More Section */}
        <section className="mb-16">
          <h2 className={`text-lg font-semibold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Let's Connect!
          </h2>
          <div className="text-sm">
            <Link href="mailto:devansh@example.com" className="hover:underline" target="_blank">
              email
            </Link>
            <span className="mx-2">/</span>
            <Link href="https://github.com/Devansh015" className="hover:underline" target="_blank">
              github
            </Link>
            <span className="mx-2">/</span>
            <Link href="https://linkedin.com/in/devanshj15" className="hover:underline" target="_blank">
              linkedin
            </Link>
            <span className="mx-2">/</span>
            <Link href="https://x.com/__devanshjain" className="hover:underline" target="_blank">
              twitter
            </Link>
            <span className="mx-2">/</span>
            <Link href="/resume.pdf" className="hover:underline" target="_blank">
              resume
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 border-t text-sm ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="mb-4 sm:mb-0">© 2025 | Devansh Jain</div>
          <div className="flex items-center space-x-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:underline">
              Back to the top
            </button>
            <button
              onClick={toggleTheme}
              className="hover:underline transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
