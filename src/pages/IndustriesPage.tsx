import { Factory } from 'lucide-react';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Food & Beverages',
      products: ['Talc', 'Calcium Carbonate', 'Hydrated Lime', 'PVD Salt'],
      description: 'Premium food-grade minerals ensuring safety and quality standards',
    },
    {
      name: 'Pharmaceuticals',
      products: ['Talc', 'Calcium Carbonate', 'Kaolin', 'Hydrated Lime', 'Bentonite'],
      description: 'High-purity ingredients meeting pharmaceutical regulations',
    },
    {
      name: 'Cosmetics',
      products: ['Talc', 'Calcium Carbonate', 'Kaolin', 'Bentonite'],
      description: 'Premium cosmetic-grade minerals for skincare and beauty applications',
    },
    {
      name: 'Oral Care',
      products: ['Calcium Carbonate', 'Sodium Chloride', 'PVD Salt'],
      description: 'Specialized products for toothpaste and oral hygiene products',
    },
    {
      name: 'Soap & Detergent',
      products: ['Dolomite', 'Calcium Carbonate', 'Feldspar', 'China Clay', 'Sodium Chloride', 'PVD Salt', 'Hydrated Lime'],
      description: 'Functional fillers and additives for detergent manufacturing',
    },
    {
      name: 'Paints & Coatings',
      products: ['Talc', 'Calcium Carbonate', 'Kaolin', 'Feldspar', 'Dolomite', 'China Clay'],
      description: 'Essential minerals improving paint quality and performance',
    },
    {
      name: 'Plastics',
      products: ['Talc', 'Calcium Carbonate', 'Calcined Kaolin', 'Kaolin'],
      description: 'Reinforcing fillers for plastic strength and durability',
    },
    {
      name: 'Animal Feed',
      products: ['Calcium Carbonate', 'PVD Salt'],
      description: 'Nutritional supplements for livestock and poultry',
    },
    {
      name: 'Rubber',
      products: ['Talc', 'Calcium Carbonate', 'Kaolin', 'China Clay'],
      description: 'Performance-enhancing additives for rubber processing',
    },
    {
      name: 'Paper & Pulp',
      products: ['Talc', 'Calcium Carbonate', 'Hydrated Lime', 'Kaolin'],
      description: 'Coating and filling materials for superior paper quality',
    },
    {
      name: 'Foundry',
      products: ['Kaolin', 'Feldspar'],
      description: 'Specialized materials for foundry operations and metal casting',
    },
    {
      name: 'Ceramics & Glass',
      products: ['Talc', 'Kaolin', 'Quartz', 'Calcium Carbonate'],
      description: 'Raw materials ensuring exceptional ceramic and glass properties',
    },
    {
      name: 'Wire & Cables',
      products: ['Talc', 'Calcium Carbonate', 'Calcined Kaolin'],
      description: 'Functional additives for insulation and sheathing compounds',
    },
    {
      name: 'Agriculture & Fertilizers',
      products: ['Calcium Carbonate', 'Kaolin', 'Feldspar', 'Hydrated Lime', 'Bentonite'],
      description: 'Soil amendments and fertilizer components for crop enhancement',
    },
    {
      name: 'Refractories',
      products: ['Bauxite', 'China Clay'],
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
                  <div className="bg-brand-navy-mid p-3 rounded-lg">
                    <Factory className="text-brand-navy" size={24} />
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
                    {industry.products.map((product, idx) => (
                      <span
                        key={idx}
                        className="bg-brand-navy-light text-brand-navy-dark text-xs font-medium px-3 py-1 rounded-full border border-[#ADBFD9]"
                      >
                        {product}
                      </span>
                    ))}
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
          <div className="grid md:grid-cols-3 gap-8 text-center">
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
    </div>
  );
}
