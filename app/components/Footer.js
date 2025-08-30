const Footer = () => {
  return (
    <footer className="bg-[#0f1115] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7W1N74WxkHAhjXRyAx0pAKvu1HCXEU.png"
              alt="DK Interiors Logo"
              className="h-10 w-auto mb-4 object-contain filter brightness-0 invert"
            />
            <p className="text-[#6b7280] mb-4 max-w-md">
              Transforming spaces with innovative design solutions. 
              Your trusted partner for premium interior fitouts across India.
            </p>
            <div className="text-[#6b7280]">
              <p>📧 info@dkinteriors.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Mumbai, Maharashtra</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B85042]">Services</h3>
            <ul className="space-y-2 text-[#6b7280]">
              <li>Retail Fitouts</li>
              <li>Commercial Spaces</li>
              <li>Residential Design</li>
              <li>Project Management</li>
              <li>Design Consultation</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B85042]">Company</h3>
            <ul className="space-y-2 text-[#6b7280]">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Factory</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#6b7280]/20 mt-8 pt-8 text-center">
          <p className="text-[#6b7280]">
            © {new Date().getFullYear()} DK Interiors — The Fitout Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer