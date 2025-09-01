export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f5f4f2] flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/dk Interior - Logo.png"
            alt="DK Interiors Logo"
            className="h-16 w-16 mx-auto object-contain animate-pulse"
          />
        </div>
        
        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#B85042]/20 border-t-[#B85042] rounded-full animate-spin mx-auto mb-4" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-[#A14237]/30 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-[#0f1115]">Loading...</h2>
          <p className="text-sm text-[#6b7280]">Preparing your experience</p>
        </div>
        
        
      </div>
    </div>
  )
}
