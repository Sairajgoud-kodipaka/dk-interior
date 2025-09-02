'use client'

const AnnouncementsBar = () => {
  return (
    <div className="bg-[#B85042] text-white overflow-hidden relative h-14 flex items-center" key="announcements-v2">
      <div className="announcement-wrapper">
        <div className="announcement-container">
          <span className="announcement-span">THE FIT OUT PRO</span>
          <span className="announcement-span">IN-HOUSE PRODUCTION</span>
          <span className="announcement-span">ONE STOP SOLUTION FOR DESIGN AND BUILD</span>
        </div>
      </div>
      
      <style jsx>{`
        /* Cache busting - v2.0 */
        .announcement-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .announcement-container {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .announcement-span {
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          font-size: 1.125rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ffffff;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          position: absolute;
          width: 100%;
          text-align: center;
          opacity: 0;
          transform: translateX(100%);
          animation: slideInOut 9s ease-in-out infinite;
        }
        
        .announcement-span:nth-child(1) {
          animation-delay: 0s;
        }
        
        .announcement-span:nth-child(2) {
          animation-delay: 3s;
        }
        
        .announcement-span:nth-child(3) {
          animation-delay: 6s;
        }
        
        @media (min-width: 640px) {
          .announcement-span {
            font-size: 1.25rem;
            letter-spacing: 0.2em;
          }
        }
        
        @keyframes slideInOut {
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
        
        /* Force animation restart */
        .announcement-span {
          animation-fill-mode: both;
          will-change: transform, opacity;
        }
        
        .announcement-container:hover .announcement-span {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default AnnouncementsBar

