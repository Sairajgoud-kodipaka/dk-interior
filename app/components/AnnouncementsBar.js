'use client'

import { useEffect, useState } from 'react'

const AnnouncementsBar = () => {
  const [isClient, setIsClient] = useState(false)
  const [version] = useState(Date.now()) // Force re-render
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  const announcements = [
    "THE FIT-OUT PRO",
    "IN-HOUSE PRODUCTION", 
    "ONE STOP SOLUTION FOR DESIGN AND BUILD"
  ]

  if (!isClient) {
    return (
      <div className="bg-[#B85042] text-white overflow-hidden relative h-14 flex items-center">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-lg sm:text-xl font-extrabold tracking-wider uppercase text-white">
            THE FIT-OUT PRO
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#B85042] text-white overflow-hidden relative h-14 flex items-center" key={`announcements-${version}`}>
      <div className="w-full h-full relative flex items-center justify-center">
        {announcements.map((announcement, index) => (
          <span
            key={announcement}
            className={`
              absolute w-full text-center text-lg sm:text-xl font-extrabold tracking-wider uppercase text-white
              opacity-0 transform translate-x-full
              animate-slide-in-out
              ${index === 0 ? 'animate-delay-0' : ''}
              ${index === 1 ? 'animate-delay-3000' : ''}
              ${index === 2 ? 'animate-delay-6000' : ''}
            `}
            style={{
              animationDuration: '9000ms',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out'
            }}
          >
            {announcement}
          </span>
        ))}
      </div>
      
      <style jsx global>{`
        /* Cache busting - v3.0 - FIT-OUT with hyphen */
        @keyframes slide-in-out {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          10% {
            opacity: 1;
            transform: translateX(0);
          }
          30% {
            opacity: 1;
            transform: translateX(0);
          }
          40% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 0;
            transform: translateX(-100%);
          }
        }
        
        .animate-slide-in-out {
          animation-name: slide-in-out;
          animation-fill-mode: both;
          will-change: transform, opacity;
        }
        
        .animate-delay-0 {
          animation-delay: 0ms;
        }
        
        .animate-delay-3000 {
          animation-delay: 3000ms;
        }
        
        .animate-delay-6000 {
          animation-delay: 6000ms;
        }
        
        .animate-slide-in-out:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default AnnouncementsBar

