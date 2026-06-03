import { Building2, Globe, TrendingUp } from 'lucide-react';

export default function ClientsPage() {
  const clients = [
    {
      name: 'Asia Coatings',
      country: 'Bangladesh',
      industry: 'Paints & Coatings',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg',
    },
    {
      name: 'JAT Holdings',
      country: 'Sri Lanka',
      industry: 'Multi-Industry',
      image: 'https://images.pexels.com/photos/3155026/pexels-photo-3155026.jpeg',
    },
    {
      name: 'Lanka Tiles',
      country: 'Sri Lanka',
      industry: 'Ceramics & Tiles',
      image: 'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg',
    },
    {
      name: 'Mackson Tiles',
      country: 'Sri Lanka',
      industry: 'Ceramics & Tiles',
      image: 'https://images.pexels.com/photos/439405/pexels-photo-439405.jpeg',
    },
    {
      name: 'Jaya Coconut',
      country: 'India',
      industry: 'Food & Agriculture',
      image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Valued Clients</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by leading companies across South Asia for quality minerals and chemicals
          </p>
        </div>
      </section>

      {/* Client Stats */}
      <section className="bg-brand-navy-light py-12 border-b border-[#ADBFD9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-brand-navy mb-2">5</p>
              <p className="text-brand-gray font-semibold">Key Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-navy mb-2">3</p>
              <p className="text-brand-gray font-semibold">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-navy mb-2">4</p>
              <p className="text-brand-gray font-semibold">Industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-[#84A0C3] transition-all duration-300"
              >
                {/* Client Image */}
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Client Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{client.name}</h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="text-brand-navy flex-shrink-0" size={18} />
                      <span className="text-brand-gray font-medium">{client.country}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building2 className="text-brand-navy flex-shrink-0" size={18} />
                      <span className="text-brand-gray text-sm">{client.industry}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center space-x-2 text-sm text-green-600 font-semibold">
                      <TrendingUp size={16} />
                      <span>Active Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Clients Choose MEHI
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-navy mb-3">100%</div>
              <p className="text-brand-gray font-semibold">Quality Commitment</p>
              <p className="text-gray-600 text-sm mt-2">
                Consistent premium-grade products meeting international standards
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-navy mb-3">Fast</div>
              <p className="text-brand-gray font-semibold">Reliable Delivery</p>
              <p className="text-gray-600 text-sm mt-2">
                On-time shipments with efficient logistics across regions
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-brand-navy mb-3">Expert</div>
              <p className="text-brand-gray font-semibold">Support Team</p>
              <p className="text-gray-600 text-sm mt-2">
                Dedicated professionals with deep industry knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-navy to-brand-navy-dark text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl text-brand-navy-mid mb-8 max-w-2xl mx-auto">
              Join our network of satisfied clients and experience the MEHI difference
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919830261334"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Partnership
              </a>
              <button className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-navy transition-colors">
                Request Samples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Map */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Geographic Presence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">India</h3>
              <p className="text-brand-gray text-sm">
                Corporate headquarters in Kharagpur with registered office in Kolkata
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🇧🇩</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bangladesh</h3>
              <p className="text-brand-gray text-sm">
                Serving leading coatings and industrial manufacturers
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🇱🇰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sri Lanka</h3>
              <p className="text-brand-gray text-sm">
                Supporting ceramics, tiles, and multi-industry clients
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
