"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Array of images
const images = ["/header1", "/header", "/header3"]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Change image every 4 seconds, or pause on hover
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image animation with framer-motion */}
      <AnimatePresence>
        <motion.div
          key={currentIndex} // Changes key to apply exit and enter animations
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} // Adjust animation duration
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]} // Current image
            alt={`header ${currentIndex + 1}`}
            layout="fill" // Fits the image to the container
            objectFit="cover" // Maintains aspect ratio and covers the container
            className="object-cover w-full h-full"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots below the carousel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-gray-300" : "bg-gray-400"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
