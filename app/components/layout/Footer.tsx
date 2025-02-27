'use client';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1F26' }} className="text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold">Vidsource</h3>
            <p className="text-gray-400">
              Professional video editing and production services for content creators.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 flex flex-col items-center sm:items-start">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-2 flex flex-col items-center sm:items-start">
              <li className="text-gray-400">Video Editing</li>
              <li className="text-gray-400">Motion Graphics</li>
              <li className="text-gray-400">Color Grading</li>
              <li className="text-gray-400">Sound Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-2 flex flex-col items-center sm:items-start">
              <li className="text-gray-400">info@vidsource.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">123 Video Street<br />Content City, CC 12345</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vidsource. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
