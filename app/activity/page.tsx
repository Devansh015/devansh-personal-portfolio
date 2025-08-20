"use client"

import Link from "next/link"
import { useTheme } from "../ThemeProvider"
import { memo, useMemo, useState, useCallback } from "react"

// Memoized components for better performance
const GitHubStatsCard = memo(({ theme }: { theme: "light" | "dark" }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  return (
    <div className={`p-6 rounded-xl border ${
      theme === "dark" 
        ? "bg-gray-900/50 border-gray-800" 
        : "bg-gray-50 border-gray-200"
    }`}>
      <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        📊 Overview
      </h3>
      {!imageLoaded && (
        <div className={`h-48 rounded animate-pulse ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`} />
      )}
      <img 
        src={`https://github-readme-stats.vercel.app/api?username=Devansh015&show_icons=true&theme=${theme === "dark" ? "dark" : "light"}&count_private=true&hide_border=true&cache_seconds=1800`}
        alt="GitHub Stats"
        className={`w-full h-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
    </div>
  )
})

const StreakCard = memo(({ theme }: { theme: "light" | "dark" }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  return (
    <div className={`p-6 rounded-xl border ${
      theme === "dark" 
        ? "bg-gray-900/50 border-gray-800" 
        : "bg-gray-50 border-gray-200"
    }`}>
      <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        🔥 Streak
      </h3>
      {!imageLoaded && (
        <div className={`h-48 rounded animate-pulse ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`} />
      )}
      <img 
        src={`https://github-readme-streak-stats.herokuapp.com/?user=Devansh015&theme=${theme === "dark" ? "dark" : "light"}&hide_border=true&cache_seconds=1800`}
        alt="GitHub Streak"
        className={`w-full h-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
    </div>
  )
})

const ContributionCard = memo(({ theme }: { theme: "light" | "dark" }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  return (
    <div className={`p-6 rounded-xl border ${
      theme === "dark" 
        ? "bg-gray-900/50 border-gray-800" 
        : "bg-gray-50 border-gray-200"
    } mb-8`}>
      <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        📅 Contribution Activity
      </h3>
      <div className="overflow-x-auto">
        {!imageLoaded && (
          <div className={`h-32 rounded animate-pulse ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} min-w-[800px]`} />
        )}
        <img 
          src={`https://ghchart.rshah.org/${theme === "dark" ? "white" : "black"}/Devansh015`}
          alt="GitHub Contribution Heatmap"
          className={`w-full h-auto min-w-[800px] transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
      <p className={`text-sm mt-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
        Past year of contributions • Updated daily
      </p>
    </div>
  )
})

const LanguagesCard = memo(({ theme }: { theme: "light" | "dark" }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  return (
    <div className={`lg:col-span-2 p-6 rounded-xl border ${
      theme === "dark" 
        ? "bg-gray-900/50 border-gray-800" 
        : "bg-gray-50 border-gray-200"
    }`}>
      <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        💻 Most Used Languages
      </h3>
      {!imageLoaded && (
        <div className={`h-48 rounded animate-pulse ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`} />
      )}
      <img 
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Devansh015&layout=compact&theme=${theme === "dark" ? "dark" : "light"}&hide_border=true&cache_seconds=1800`}
        alt="Top Languages"
        className={`w-full h-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
    </div>
  )
})

// Set display names for better debugging
GitHubStatsCard.displayName = 'GitHubStatsCard'
StreakCard.displayName = 'StreakCard'
ContributionCard.displayName = 'ContributionCard'
LanguagesCard.displayName = 'LanguagesCard'

export default function ActivityPage() {
  const { theme, toggleTheme } = useTheme()

  // Memoize scroll handler to prevent unnecessary re-renders
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

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
            <Link href="https://substack.com/@devanshjaiin" className="hover:underline">
              blog
            </Link>
            <Link href="/activity" className="hover:underline font-semibold">
              activity
            </Link>
            <Link href="/experience" className="hover:underline">
              experience
            </Link>
          </nav>
        </header>

        {/* Activity Page Content */}
        <div className="space-y-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              GitHub Activity
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              A visual overview of my coding journey and contributions
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <GitHubStatsCard theme={theme} />
            <StreakCard theme={theme} />
          </div>

          {/* Contribution Heatmap Card */}
          <ContributionCard theme={theme} />

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <LanguagesCard theme={theme} />

            {/* Quick Links Card */}
            <div className={`p-6 rounded-xl border ${
              theme === "dark" 
                ? "bg-gray-900/50 border-gray-800" 
                : "bg-gray-50 border-gray-200"
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🔗 Quick Links
              </h3>
              <div className="space-y-3">
                <Link 
                  href="https://github.com/Devansh015" 
                  className={`block p-3 rounded-lg border transition-colors ${
                    theme === "dark" 
                      ? "border-gray-700 hover:border-gray-600 hover:bg-gray-800/50" 
                      : "border-gray-200 hover:border-gray-300 hover:bg-white"
                  }`}
                  target="_blank"
                >
                  <div className="flex items-center gap-2">
                    <span>📂</span>
                    <span className="text-sm font-medium">View Repositories</span>
                  </div>
                </Link>
                <Link 
                  href="https://github.com/Devansh015?tab=followers" 
                  className={`block p-3 rounded-lg border transition-colors ${
                    theme === "dark" 
                      ? "border-gray-700 hover:border-gray-600 hover:bg-gray-800/50" 
                      : "border-gray-200 hover:border-gray-300 hover:bg-white"
                  }`}
                  target="_blank"
                >
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span className="text-sm font-medium">Follow on GitHub</span>
                  </div>
                </Link>
                <div className={`p-3 rounded-lg border ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}>
                  <div className="flex items-center gap-2">
                    <span>⚡</span>
                    <span className="text-sm font-medium">Live Activity</span>
                  </div>
                  <p className={`text-xs mt-1 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                    Coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className={`flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 border-t text-sm ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="mb-4 sm:mb-0">© 2025 | Devansh Jain</div>
          <div className="flex items-center space-x-4">
            <button onClick={handleScrollToTop} className="hover:underline">
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
