"use client"

import Link from "next/link"
import { useTheme } from "../ThemeProvider"

export default function ExperiencePage() {
  const { theme, toggleTheme } = useTheme()

  const experiences = [
    {
      company: "Jain Consultants",
      position: "Software Engineering Intern",
      duration: "May 2025 - August 2025",
      location: "Toronto, Ontario",
      description: [
        "• ...",
      ],
      technologies: ["React", "Node.js", "JavaScript", "Python"]
    },
    {
      company: "OneDrug",
      position: "Software Engineering Intern",
      duration: "May 2024 - August 2024",
      location: "Toronto, Ontario",
      description: [
        "• ...",
      ],
      technologies: ["SQL", "React"]
    },
    // Add more experiences as needed
    {
      company: "Accumine Technologies",
      position: "Software Engineering Intern",
      duration: "September 2022 - December 2022",
      location: "Toronto, Ontario",
      description: [
        "• ..."
      ],
      technologies: ["React"]
    }
  ]

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
            <Link href="/activity" className="hover:underline">
              activity
            </Link>
            <Link href="/experience" className="hover:underline font-semibold">
              experience
            </Link>
          </nav>
        </header>

        {/* Experience Page Content */}
        <div className="space-y-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Work Experience
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              My professional journey and internships
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border ${
                  theme === "dark" 
                    ? "bg-gray-900/50 border-gray-800" 
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                {/* Job Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      {exp.position}
                    </h3>
                    <p className={`text-lg font-medium ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"} mt-2 sm:mt-0 sm:text-right`}>
                    <p className="font-medium">{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  {exp.description.map((item, i) => (
                    <p key={i} className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} mb-2`}>
                      {item}
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        theme === "dark" 
                          ? "bg-gray-800 text-gray-300 border border-gray-700" 
                          : "bg-white text-gray-700 border border-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className={`p-6 rounded-xl border text-center ${
            theme === "dark" 
              ? "bg-gray-900/50 border-gray-800" 
              : "bg-gray-50 border-gray-200"
          }`}>
            <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              🚀 Looking for Opportunities
            </h3>
            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-4`}>
              I'm actively seeking internships and full-time opportunities in software development.
            </p>
            </div> className="space-x-4"</div>

        {/* Footer */}
        <footer
          className={`flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 border-t text-sm mt-16 ${
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
