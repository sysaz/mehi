import { useState } from 'react';
import { UtensilsCrossed, Pill, Sparkles, Smile, Droplets, Paintbrush, Layers, PawPrint, Settings2, FileText, Hammer, Gem, Zap, Wheat, Flame, X, FlaskConical } from 'lucide-react';
import { products } from '../data/products';
import type { Product } from '../data/products';

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const waLink = `https://wa.me/919830261334?text=${encodeURIComponent(`Hi, I'd like to request a quote for ${product.name}.`)}`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative h-52 rounded-t-2xl overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1.5 text-brand-gray shadow-md transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex flex-wrap items-start gap-2">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            {product.formula && (
              <span className="inline-flex items-center gap-1 bg-brand-navy-light text-brand-navy-dark text-xs font-mono px-2.5 py-1 rounded-full border border-[#ADBFD9] mt-1">
                <FlaskConical size={11} />{product.formula}
              </span>
            )}
          </div>
          <p className="text-brand-gray text-sm leading-relaxed">{product.description}</p>
          {product.applications.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Applications</p>
              <div className="flex flex-wrap gap-1.5">
                {product.applications.map((app) => (
                  <span key={app} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full">{app}</span>
                ))}
              </div>
            </div>
          )}
          {product.grades.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Available Grades</p>
              <ul className="list-disc list-inside space-y-0.5">
                {product.grades.map((grade) => <li key={grade} className="text-brand-gray text-sm">{grade}</li>)}
              </ul>
            </div>
          )}
          {product.packaging.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Packaging</p>
              <div className="flex flex-wrap gap-1.5">
                {product.packaging.map((pkg) => (
                  <span key={pkg} className="bg-brand-navy-light text-brand-navy-dark text-xs px-2.5 py-1 rounded-full border border-brand-navy-mid">{pkg}</span>
                ))}
              </div>
            </div>
          )}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (name: string) => {
    const match = products.find((p) => p.name.toLowerCase() === name.toLowerCase());
    if (match) setSelectedProduct(match);
  };
  const industries = [
    {
      name: 'Food & Beverages',
      icon: UtensilsCrossed,
      products: ['Talc', 'Calcium Carbonate', 'Hydrated Lime', 'PVD Salt'],
      description: 'Premium food-grade minerals ensuring safety and quality standards',
    },
    {
      name: 'Pharmaceuticals',
      icon: Pill,
      products: ['Talc', 'Calcium Carbonate', 'Kaolin', 'Hydrated Lime', 'Bentonite'],
      description: 'High-purity ingredients meeting pharmaceutical regulations',
    },
    {
      name: 'Cosmetics',
      icon: Sparkles,
      products: ['Talc', 'Calcium Carbonate', 'Kaolin', 'Bentonite'],
      description: 'Premium cosmetic-grade minerals for skincare and beauty applications',
    },
    {
      name: 'Oral Care',
      icon: Smile,
      products: ['Calcium Carbonate', 'Sodium Chloride', 'PVD Salt'],
      description: 'Specialized products for toothpaste and oral hygiene products',
    },
    {
      name: 'Soap & Detergent',
      icon: Droplets,
      products: ['Dolomite', 'Calcium Carbonate', 'Feldspar', 'China Clay', 'Sodium Chloride', 'PVD Salt', 'Hydrated Lime'],
      description: 'Functional fillers and additives for detergent manufacturing',
    },
    {
      name: 'Paints & Coatings',
      icon: Paintbrush,
      products: ['Talc', 'Calcium Carbonate', 'Kaolin', 'Feldspar', 'Dolomite', 'China Clay'],
      description: 'Essential minerals improving paint quality and performance',
    },
    {
      name: 'Plastics',
      icon: Layers,
      products: ['Talc', 'Calcium Carbonate', 'Calcined Kaolin', 'Kaolin'],
      description: 'Reinforcing fillers for plastic strength and durability',
    },
    {
      name: 'Animal Feed',
      icon: PawPrint,
      products: ['Calcium Carbonate', 'PVD Salt'],
      description: 'Nutritional supplements for livestock and poultry',
    },
    {
      name: 'Rubber',
      icon: Settings2,
      products: ['Talc', 'Calcium Carbonate', 'Kaolin', 'China Clay'],
      description: 'Performance-enhancing additives for rubber processing',
    },
    {
      name: 'Paper & Pulp',
      icon: FileText,
      products: ['Talc', 'Calcium Carbonate', 'Hydrated Lime', 'Kaolin', 'China Clay'],
      description: 'Coating and filling materials for superior paper quality',
    },
    {
      name: 'Foundry',
      icon: Hammer,
      products: ['Kaolin', 'Feldspar', 'Bentonite', 'Ball Clay Powder'],
      description: 'Specialized materials for foundry operations and metal casting',
    },
    {
      name: 'Ceramics & Glass',
      icon: Gem,
      products: ['Talc', 'Kaolin', 'Calcined Kaolin', 'Quartz', 'Calcium Carbonate', 'Feldspar', 'Dolomite', 'Ball Clay Powder', 'China Clay', 'Bauxite'],
      description: 'Raw materials ensuring exceptional ceramic and glass properties',
    },
    {
      name: 'Wire & Cables',
      icon: Zap,
      products: ['Talc', 'Calcium Carbonate', 'Calcined Kaolin'],
      description: 'Functional additives for insulation and sheathing compounds',
    },
    {
      name: 'Agriculture & Fertilizers',
      icon: Wheat,
      products: ['Calcium Carbonate', 'Kaolin', 'Feldspar', 'Hydrated Lime', 'Quick Lime', 'Bentonite'],
      description: 'Soil amendments and fertilizer components for crop enhancement',
    },
    {
      name: 'Refractories',
      icon: Flame,
      products: ['Bauxite', 'China Clay', 'Calcined Kaolin', 'Dolomite', 'Quick Lime'],
      description: 'High-temperature resistant materials for industrial furnaces',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our minerals and chemicals support 15+ major industries across South Asia
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg hover:border-[#84A0C3] transition-all"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-brand-navy-mid p-3 rounded-lg flex-shrink-0">
                    <industry.icon className="text-brand-navy" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{industry.name}</h3>
                </div>

                <p className="text-brand-gray mb-4 text-sm leading-relaxed">
                  {industry.description}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wider">
                    Products Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.products.map((product, idx) => {
                      const hasData = products.some((p) => p.name.toLowerCase() === product.toLowerCase());
                      return hasData ? (
                        <button
                          key={idx}
                          onClick={() => handleProductClick(product)}
                          className="bg-brand-navy-light text-brand-navy-dark text-xs font-medium px-3 py-1 rounded-full border border-[#ADBFD9] hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors cursor-pointer"
                        >
                          {product}
                        </button>
                      ) : (
                        <span
                          key={idx}
                          className="bg-brand-navy-light text-brand-navy-dark text-xs font-medium px-3 py-1 rounded-full border border-[#ADBFD9]"
                        >
                          {product}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-gradient-to-r from-brand-navy-light to-brand-navy-mid py-16 border-y border-[#ADBFD9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-4xl font-bold text-brand-navy mb-2">15+</p>
              <p className="text-brand-gray font-semibold">Industries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-navy mb-2">25+</p>
              <p className="text-brand-gray font-semibold">Product Solutions</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-navy mb-2">100+</p>
              <p className="text-brand-gray font-semibold">Industry Applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Can't find your industry?
          </h2>
          <p className="text-xl text-brand-navy-mid mb-8 max-w-2xl mx-auto">
            Our team can help identify the right products for your specific needs. Reach out today.
          </p>
          <a
            href="https://wa.me/919830261334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Consult Our Experts
          </a>
        </div>
      </section>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}
