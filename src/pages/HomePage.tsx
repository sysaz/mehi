import { ArrowRight, Globe, Zap, Shield, Users, Award, Truck, Network, FileText } from 'lucide-react';
import BlurImage from '../components/BlurImage';

const HEADER_PLACEHOLDER = "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJYgAAW9vLS9fboPEvaoAA/lte6o4HNZj/8tPWOjYUFN00Xn1R4fOFB+GCdPCg0Apjqz6Ns6T2lyKbgVT0I4AA";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: '600px' }}>
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <BlurImage
            src="/images/hero-ship.png"
            alt="Global shipping and logistics"
            className="w-full h-full object-cover object-center"
            placeholder={HEADER_PLACEHOLDER}
            width="1400"
            height="600"
            fetchPriority="high"
          />
          {/* Gradient overlay: solid navy on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/10" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-xl">
            <p className="text-[#5B82AD] text-sm font-semibold uppercase tracking-widest mb-4">
              Global Merchant Export Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Connecting Indian Products to Global Markets
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              MEHI Worldwide Trading Private Limited specializes in merchant exports, international sourcing, industrial products, chemicals, and global trade coordination with a focus on reliability, professionalism, and long-term partnerships.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919830261334"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-navy hover:bg-brand-navy-dark text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors border border-white/20"
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} />
              </a>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-brand-navy mb-2">15+</p>
              <p className="text-brand-gray">Industries Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-brand-navy mb-2">5</p>
              <p className="text-brand-gray">Key Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-brand-navy mb-2">25+</p>
              <p className="text-brand-gray">Product Types</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-brand-navy mb-2">3</p>
              <p className="text-brand-gray">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose MEHI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Globe className="text-brand-navy mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Reach</h3>
              <p className="text-brand-gray text-sm">
                Serving clients across Bangladesh, Sri Lanka, and India with reliable supply chains.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Shield className="text-brand-navy mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Assured</h3>
              <p className="text-brand-gray text-sm">
                Premium grade materials meeting international standards for all applications.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Zap className="text-brand-navy mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h3>
              <p className="text-brand-gray text-sm">
                Quick turnaround times and efficient logistics for on-time shipments.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Users className="text-brand-navy mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Support</h3>
              <p className="text-brand-gray text-sm">
                Dedicated team with deep industry expertise to assist your operations.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Award className="text-brand-navy mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">IEC Registered</h3>
              <p className="text-brand-gray text-sm">
                Certified Merchant Exporter
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Truck className="text-brand-navy mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Logistics</h3>
              <p className="text-brand-gray text-sm">
                Worldwide Shipment Coordination
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Network className="text-brand-navy mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Reliable Sourcing</h3>
              <p className="text-brand-gray text-sm">
                Trusted Supplier Network
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <FileText className="text-brand-navy mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Export Documentation</h3>
              <p className="text-brand-gray text-sm">
                Professional Compliance Handling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to partner with us?
          </h2>
          <p className="text-xl text-brand-navy-mid mb-8 max-w-2xl mx-auto">
            Connect with our team today to discuss your mineral and chemical requirements.
          </p>
          <a
            href="https://wa.me/919830261334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
