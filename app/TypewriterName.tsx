"use client"

import { useState, useEffect } from "react"

export default function TypewriterName() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [nameIndex, setNameIndex] = useState(0)

  const names = ["Devansh", "Dev"]
  const currentName = names[nameIndex]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < currentName.length) {
            setDisplayText(currentName.substring(0, currentIndex + 1))
            setCurrentIndex(currentIndex + 1)
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setDisplayText(currentName.substring(0, currentIndex - 1))
            setCurrentIndex(currentIndex - 1)
          } else {
            // Finished deleting, switch to next name
            setIsDeleting(false)
            setNameIndex((nameIndex + 1) % names.length)
            setCurrentIndex(0)
          }
        }
      },
      isDeleting ? 100 : 150,
    ) // Faster deletion, slower typing

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, nameIndex, currentName])

  return (
    <span className="inline-block text-[120px] font-bold">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
