"use client"

import Link from "next/link"
import { useTheme } from "../ThemeProvider"

export default function ActivityPage() {
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
            <Link href="/" className="hover:underline">Devansh Jain</Link>
          </h1>
          <nav className="text-sm space-x-4">
            <Link href="/blog" className="hover:underline">
              blog
            </Link>
            <Link href="/activity" className="hover:underline font-semibold">
              activity
            </Link>
          </nav>
        </header>

        {/* Activity Page Content */}
        <section className="mb-16">
          <h2 className={`text-4xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            GitHub Activity
          </h2>
          
          {/* GitHub Stats */}
          <div className="mb-12">
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Stats Overview
            </h3>
            <div className="space-y-4">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=Devansh015&show_icons=true&theme=${theme === "dark" ? "dark" : "light"}&count_private=true`}
                alt="GitHub Stats"
                className="rounded-lg max-w-full h-auto"
              />
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=Devansh015&theme=${theme === "dark" ? "dark" : "light"}`}
                alt="GitHub Streak"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Contribution Heatmap */}
          <div className="mb-12">
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Contribution Activity
            </h3>
            <img 
              src={`https://ghchart.rshah.org/${theme === "dark" ? "white" : "black"}/Devansh015`}
              alt="GitHub Contribution Heatmap"
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          {/* Language Stats */}
          <div className="mb-12">
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Most Used Languages
            </h3>
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Devansh015&layout=compact&theme=${theme === "dark" ? "dark" : "light"}`}
              alt="Top Languages"
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          {/* Recent Activity */}
          <div className="mb-12">
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Recent Activity
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Coming soon: Live GitHub activity feed showing recent commits, pull requests, and repository updates.
            </p>
            <div className="text-sm">
              <Link href="https://github.com/Devansh015" className="hover:underline" target="_blank">
                View full activity on GitHub →
              </Link>
            </div>
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
