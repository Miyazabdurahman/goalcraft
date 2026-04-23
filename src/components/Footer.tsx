import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id='footer' className="bg-gray-250 text-black py-16 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
           <div className='flex justify-center'>
            <img 
              src="logo.png" 
              alt="Knowify Logo" 
              className="h-24 sm:h-24 lg:h-40"
            />
          </div> <br />
            <p className="text-gray-1000 leading-relaxed">
              Give them the childhood<br /> we were lucky to live.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-gray-1000 hover:text-white transition-colors">
                <Phone size={20} />
                <span>+91  62357 91479</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-1000 hover:text-white transition-colors">
                <Mail size={20} />
                <span>knowify2026@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-1000  hover:text-white transition-colors">
                <MapPin size={20} />
                <span>Breeze Garden, Kooriyad, Malappuram</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/share/1Puskfy61C/?mibextid=wwXIfr"
                className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              
              <a
                href="https://www.instagram.com/knowifyy/"
                className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-black pt-8 text-center">
          <p className="text-gray-1000">
            © 2026 Knowfy Summer Camp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
