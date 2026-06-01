import { Layers } from 'lucide-react';
import ProductShowcase from '../components/ProductShowcase';
import { products } from '../data/products';

export default function ProductsPage() {
  const chemicals = [
    {
      category: 'Dow Chemicals',
      description: 'Specialized chemical products from Dow',
    },
    {
      category: 'BYK Products',
      description: 'Additives and specialty chemicals from BYK',
    },
    {
      category: 'Everlight Products',
      description: 'Performance chemicals from Everlight',
    },
  ];

  return (
    <div>
      {/* Hero Section — navy header band, kept untouched */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive range of premium minerals and chemicals for diverse industrial applications
          </p>
        </div>
      </section>

      {/* Product Showcase — replaces plain text minerals grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <Layers className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Minerals &amp; Chemicals</h2>
          </div>
          <ProductShowcase products={products} />
        </div>
      </section>

      {/* Specialty Chemicals Section — kept exactly as original */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <Layers className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Specialty Chemicals</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {chemicals.map((chem, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 rounded-xl text-center hover:shadow-lg transition-shadow hover:border-blue-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Layers className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{chem.category}</h3>
                <p className="text-gray-700 text-sm">{chem.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-gray-900 font-semibold mb-2">
              Wide Selection of Premium Chemical Products
            </p>
            <p className="text-gray-700 text-sm">
              In addition to our core mineral offerings, we source and supply high-quality chemical products from leading global manufacturers including Dow, BYK, and Everlight.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Our Products Excel</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-700">
                All products meet international quality standards and undergo rigorous testing for purity and consistency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Supply</h3>
              <p className="text-gray-700">
                Consistent availability with efficient logistics ensuring timely delivery to all our clients.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-700">
                Transparent pricing with volume discounts for bulk orders and long-term partnerships.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Support</h3>
              <p className="text-gray-700">
                Expert guidance on product selection and application for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need a specific product or grade?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team for custom requirements, samples, or bulk pricing.
          </p>
          <a
            href="https://wa.me/919830261334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Information
          </a>
        </div>
      </section>
    </div>
  );
}
