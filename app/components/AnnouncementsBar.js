'use client'

const AnnouncementsBar = () => {
  return (
    <div className="bg-[#B85042] text-white overflow-hidden relative h-14 flex items-center">
      <div className="announcement-wrapper">
        <div className="announcement-container">
          <span className="announcement-span">THE FITOUT PRO</span>
          <span className="announcement-span">THE FITOUT PRO</span>
          <span className="announcement-span">THE FITOUT PRO</span>
          <span className="announcement-span">THE FITOUT PRO</span>
          <span className="announcement-span">THE FITOUT PRO</span>
        </div>
      </div>
      
      <style jsx>{`
        .announcement-wrapper {
          width: 100%;
          overflow: hidden;
        }
        
        .announcement-container {
          display: flex;
          animation: scroll-right-to-left 20s linear infinite;
          white-space: nowrap;
        }
        
        .announcement-span {
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          font-size: 1.125rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ffffff;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
          padding: 0 4rem;
          display: inline-block;
        }
        
        @media (min-width: 640px) {
          .announcement-span {
            font-size: 1.25rem;
            letter-spacing: 0.2em;
            padding: 0 5rem;
          }
        }
        
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .announcement-container:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default AnnouncementsBar
