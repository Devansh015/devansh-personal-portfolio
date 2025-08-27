"use client"

import Link from "next/link"
import DegreeProgress from "./DegreeProgress"
import TypewriterName from "./TypewriterName"
import { useTheme } from "./ThemeProvider"
import { useCallback } from "react"

export default function Portfolio() {
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
            Devansh Jain
          </h1>
          <nav className="text-sm space-x-4">
            <Link href="https://substack.com/@devanshjaiin" className="hover:underline">
              blog
            </Link>
            <Link href="/activity" className="hover:underline">
              activity
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
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Latest Posts
            </h2>
            <Link href="https://substack.com/@devanshjaiin"className="text-sm hover:underline">
              See all posts
            </Link>
          </div>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/summer-2025-internship-shopify" className={`block p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"}`}>
                • Interning at an Engineering Consulting Firm Summer 2025
              </Link>
            </li>
            <li>
              <Link href="https://open.substack.com/pub/devanshjaiin/p/what-university-doesnt-teach-you?r=6ahwx6&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true" className={`block p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"}`}>
                • What University Doesn't Teach You About Real World Development
              </Link>
            </li>
            <li>
              <Link href="/blog/learning-relational-algebra" className={`block p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"}`}>
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
              <Link href="https://github.com/Devansh015/neuropharma-simlab" className={`block p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"}`}>
                • Neuropharma-Simlab – Brain Simulation using Cellular Automata
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Devansh015/wluNest-App" className={`block p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"}`}>
                • wluNest – Student Housing Database
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Devansh015/go-url-shortner" className={`block p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"}`}>
                • URL Shortener – Fast & Minimal Link Tool in Go
              </Link>
            </li>
          </ul>
        </section>

        {/* Experience Timeline Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Experience Timeline
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-6 top-0 w-0.5 h-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}></div>
            
            <div className="space-y-8">
              {/* Jain Consultants */}
              <div className="relative flex items-start">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 ${
                  theme === "dark" 
                    ? "bg-[#0f0f0f] border-blue-500 text-blue-400" 
                    : "bg-white border-blue-500 text-blue-600"
                }`}>
                  🏢
                </div>
                <div className="ml-6 flex-grow">
                  <div className={`p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                    theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                          Software Engineering Intern
                        </h3>
                        <p className={`text-base font-medium ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                          Jain Consultants
                        </p>
                      </div>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        theme === "dark" 
                          ? "bg-green-900/30 text-green-400 border border-green-700" 
                          : "bg-green-50 text-green-700 border border-green-200"
                      }`}>
                        May 2025 - Aug 2025
                      </span>
                    </div>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Toronto, Ontario
                    </p>
                  </div>
                </div>
              </div>

              {/* OneDrug */}
              <div className="relative flex items-start">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 ${
                  theme === "dark" 
                    ? "bg-[#0f0f0f] border-purple-500 text-purple-400" 
                    : "bg-white border-purple-500 text-purple-600"
                }`}>
                  💊
                </div>
                <div className="ml-6 flex-grow">
                  <div className={`p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                    theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                          Software Engineering Intern
                        </h3>
                        <p className={`text-base font-medium ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>
                          OneDrug
                        </p>
                      </div>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        theme === "dark" 
                          ? "bg-blue-900/30 text-blue-400 border border-blue-700" 
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}>
                        May 2024 - Aug 2024
                      </span>
                    </div>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Toronto, Ontario
                    </p>
                  </div>
                </div>
              </div>

              {/* Accumine Technologies */}
              <div className="relative flex items-start">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 ${
                  theme === "dark" 
                    ? "bg-[#0f0f0f] border-orange-500 text-orange-400" 
                    : "bg-white border-orange-500 text-orange-600"
                }`}>
                  ⚙️
                </div>
                <div className="ml-6 flex-grow">
                  <div className={`p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                    theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                          Software Engineering Intern
                        </h3>
                        <p className={`text-base font-medium ${theme === "dark" ? "text-orange-400" : "text-orange-600"}`}>
                          Accumine Technologies
                        </p>
                      </div>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        theme === "dark" 
                          ? "bg-gray-800 text-gray-400 border border-gray-600" 
                          : "bg-gray-100 text-gray-700 border border-gray-300"
                      }`}>
                        Sep 2022 - Dec 2022
                      </span>
                    </div>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Toronto, Ontario
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <Link href="mailto:devansh_jain@outlook.com" className="hover:underline" target="_blank">
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
            <Link href="/2025Resume.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">
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
