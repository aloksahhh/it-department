import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer >
      
      {/* Main Footer Section */}
      <div className="bg-[#1E355E] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1 - Institute Info */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Information Technology
            </h2>
            <p className="text-sm text-gray-300 mb-2">
              Since 1996
            </p>
            <p className="text-sm text-gray-300">
              ICARE Complex, Hatiberia<br/>
              Haldia, Dist-Purba Medinipore, WB<br/>
              Pin-721657
            </p>
          </div>

          {/* Column 2 - Admission Inquiry */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              For Admission Inquiry :
            </h2>
            <p className="text-sm text-gray-300">
              Corporate Office :<br/>
              54, Harish Mukherjee Road (2nd Floor)<br/>
              Kolkata-700025
            </p>
            <p className="text-sm text-gray-300 mt-3">
              +91 85839 37675<br/>
              +91 94344 53140
            </p>
          </div>

          {/* Column 3 - Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Connect with us
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaFacebookF className="text-blue-400" />
                <span className="text-sm">Facebook</span>
              </div>
              <div className="flex items-center gap-3">
                <FaInstagram className="text-pink-400" />
                <span className="text-sm">Instagram</span>
              </div>
              <div className="flex items-center gap-3">
                <FaYoutube className="text-red-500" />
                <span className="text-sm">YouTube</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#2C4A7A] text-center text-white text-sm py-3">
        Copyright © 2026 Department of Information Technology, 
        Haldia Institute of Technology. All Rights Reserved.
      </div>

      {/* Bottom Notice Strip */}
      <div className="bg-red-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
          <div className="bg-white text-black px-4 py-1 rounded-full">
            Urgent notice for fees payment and semester clearance
          </div>
          <div className="bg-white text-black px-4 py-1 rounded-full">
            HIT Location (How to reach at HIT, Haldia)
          </div>
        </div>
      </div>

    </footer>
  );
}