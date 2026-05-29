import { ArrowRight, Globe, Zap, Shield, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Global Supplier of Premium Minerals & Chemicals
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Serving 15+ industries across Asia with high-quality minerals, calcined materials, and industrial chemicals for over a decade.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </button>
                <a
                  href="https://wa.me/919830261334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1">
                <img
                  src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
                  alt="Industrial minerals and chemicals"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
              <p className="text-gray-700">Industries Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">5</p>
              <p className="text-gray-700">Key Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">25+</p>
              <p className="text-gray-700">Product Types</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">3</p>
              <p className="text-gray-700">Countries</p>
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
              <Globe className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Reach</h3>
              <p className="text-gray-700 text-sm">
                Serving clients across Bangladesh, Sri Lanka, and India with reliable supply chains.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Shield className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Assured</h3>
              <p className="text-gray-700 text-sm">
                Premium grade materials meeting international standards for all applications.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-700 text-sm">
                Quick turnaround times and efficient logistics for on-time shipments.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Users className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Support</h3>
              <p className="text-gray-700 text-sm">
                Dedicated team with deep industry expertise to assist your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to partner with us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with our team today to discuss your mineral and chemical requirements.
          </p>
          <a
            href="https://wa.me/919830261334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
