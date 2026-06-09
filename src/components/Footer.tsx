import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    {/* Fixed WhatsApp button — always visible */}
    <a
      href="https://wa.me/919830261334"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold text-sm"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
      <span>WhatsApp</span>
    </a>

    <footer className="bg-brand-navy text-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/logos/mehi-logo-new.png"
                alt="Mehi Worldwide Trading"
                className="h-14 w-auto object-contain"
                width="56"
                height="56"
                loading="lazy"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <img
                src="/images/logos/makeinindia.png"
                alt="Make in India"
                className="h-14 w-auto object-contain"
                width="80"
                height="56"
                loading="lazy"
              />
              <img
                src="/images/logos/fassa.png"
                alt="FSSAI"
                className="h-8 w-auto object-contain"
                width="56"
                height="32"
                loading="lazy"
              />
              <img
                src="/images/logos/iso.png"
                alt="ISO"
                className="h-14 w-auto object-contain"
                width="80"
                height="56"
                loading="lazy"
              />
            </div>
            <p className="text-white font-semibold text-base mb-0.5">
              Mehi Worldwide
            </p>
            <p className="text-white/70 text-xs mb-3 tracking-wide">
              Trading PVT. LTD.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Global Merchant Export Solutions
            </p>
            <p className="text-xs text-gray-500">
              CIN: U51909WB2021PTC249675
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#5B82AD] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a href="tel:+919830261334" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +91 98302 61334
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#5B82AD] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:mehiwt@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    mehiwt@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Locations</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#5B82AD] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium">Corporate Office</p>
                  <p className="text-gray-400 text-sm">1st Floor, Sai Complex, OT Road, Inda, Kharagpur, West Bengal, India - 721301</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#5B82AD] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium">Registered Office</p>
                  <p className="text-gray-400 text-sm">5th Floor, 22 Hemanta Basu Sarani, Kolkata, West Bengal, India, 700001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#1a4a7a] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright {currentYear} Mehi Worldwide Trading Private Limited. All rights reserved.
            </p>
            <a
              href="https://wa.me/919830261334"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
          <p className="text-gray-600 text-xs mt-3 text-center">
            Crafted with ♥ by{' '}
            <a
              href="https://avnaya.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="hover:text-gray-400 transition-colors duration-200 underline underline-offset-2"
            >
              Aviara Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
