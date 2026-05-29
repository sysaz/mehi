import { CheckCircle, Beaker, Gauge, Leaf, BarChart3, Users } from 'lucide-react';

export default function QualityPage() {
  const qualityFeatures = [
    {
      icon: Beaker,
      title: 'Rigorous Testing',
      description: 'Every batch undergoes comprehensive laboratory testing for purity and consistency',
    },
    {
      icon: Gauge,
      title: 'Precision Processing',
      description: 'State-of-the-art equipment ensures exact particle size and composition',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Multiple checkpoints throughout production ensure zero defects',
    },
    {
      icon: Users,
      title: 'Expert Oversight',
      description: 'Experienced quality managers monitor all aspects of production',
    },
    {
      icon: Leaf,
      title: 'Environmental Care',
      description: 'Sustainable practices and responsible sourcing are paramount',
    },
    {
      icon: BarChart3,
      title: 'Continuous Improvement',
      description: 'Data-driven quality enhancement and innovation in processes',
    },
  ];

  const standards = [
    {
      category: 'International Standards',
      items: [
        'ISO Quality Management compliance',
        'International purity specifications',
        'Global safety standards',
      ],
    },
    {
      category: 'Industry Certifications',
      items: [
        'Food-grade material certifications',
        'Pharmaceutical grade quality',
        'Cosmetic industry approvals',
      ],
    },
    {
      category: 'Quality Metrics',
      items: [
        'Consistency in batch composition',
        'Zero defect manufacturing',
        'Customer satisfaction tracking',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Quality Commitment</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Excellence in every product, from sourcing to delivery
          </p>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Quality Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At MEHI, quality is not just a requirement—it's our promise to every client. We believe that delivering superior products is essential for the success of our partners and the industries they serve.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our approach to quality encompasses:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Rigorous testing at every production stage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Strict adherence to international standards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Continuous improvement and innovation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Complete transparency with clients</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
                alt="Quality assurance"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Quality Control Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  <div className="bg-blue-100 inline-block p-3 rounded-lg mb-4">
                    <IconComponent className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Standards & Compliance
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{standard.category}</h3>
                <ul className="space-y-3">
                  {standard.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3 text-gray-700 text-sm"
                    >
                      <CheckCircle className="text-blue-600 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Testing Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Quality Testing Process
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  1
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Raw Material Inspection</h3>
                  <p className="text-gray-700">
                    All incoming raw materials are tested for purity and composition before acceptance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  2
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">In-Process Testing</h3>
                  <p className="text-gray-700">
                    Multiple quality checks are performed during manufacturing to ensure consistency
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  3
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Final Product Analysis</h3>
                  <p className="text-gray-700">
                    Finished products undergo comprehensive laboratory analysis for all quality parameters
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  4
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation & Certification</h3>
                  <p className="text-gray-700">
                    Complete test reports and certificates are provided with every shipment
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  5
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Post-Delivery Support</h3>
                  <p className="text-gray-700">
                    We provide ongoing support and address any quality concerns promptly and professionally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Our Quality Guarantee</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We stand behind every product we deliver. If quality standards are not met, we will work with you to resolve the issue immediately.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-blue-100">Quality Assurance</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p className="text-blue-100">Customer Support</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">0</p>
                <p className="text-blue-100">Defect Tolerance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Experience Quality Excellence
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Request samples or learn more about our quality standards and certifications
          </p>
          <a
            href="https://wa.me/919830261334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Quality Team
          </a>
        </div>
      </section>
    </div>
  );
}
