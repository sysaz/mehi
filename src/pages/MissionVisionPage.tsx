import { Target, Lightbulb, Award, Users, Zap, Globe } from 'lucide-react';

export default function MissionVisionPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to providing superior quality in every product and interaction',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Transparent and honest business practices with all stakeholders',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously improving processes and staying ahead of industry trends',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Responsible sourcing and environmentally conscious operations',
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Consistent delivery and dependable partnerships built on trust',
    },
    {
      icon: Lightbulb,
      title: 'Customer Focus',
      description: 'Understanding and exceeding client expectations in all endeavors',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Mission & Vision</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our purpose and aspirations for the future
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be the trusted global supplier of premium minerals and chemicals, delivering exceptional quality and reliable service to diverse industries across South Asia and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are committed to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl leading-none">•</span>
                  <span className="text-gray-700">Providing consistent, high-quality products that meet international standards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl leading-none">•</span>
                  <span className="text-gray-700">Building long-term partnerships based on trust and mutual growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl leading-none">•</span>
                  <span className="text-gray-700">Maintaining efficient supply chains and timely deliveries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl leading-none">•</span>
                  <span className="text-gray-700">Supporting sustainable and responsible business practices</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/mission.webp"
                alt="Our mission"
                className="rounded-xl shadow-lg w-full"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/vision.webp"
                alt="Our vision"
                className="rounded-xl shadow-lg w-full"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To become the preferred choice for minerals and chemicals in the South Asian market, recognized for exceptional quality, innovation, and customer service.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We envision:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl leading-none">•</span>
                  <span className="text-gray-700">Expanding our product range to serve emerging industrial needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl leading-none">•</span>
                  <span className="text-gray-700">Growing our market presence across multiple countries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl leading-none">•</span>
                  <span className="text-gray-700">Investing in technology and infrastructure for better service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-2xl leading-none">•</span>
                  <span className="text-gray-700">Contributing positively to industries and communities we serve</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Core Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all text-center"
                >
                  <div className="inline-block bg-blue-100 p-4 rounded-lg mb-4">
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Strategic Goals</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Short Term (1-2 Years)</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Strengthen market presence in existing regions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Expand product portfolio with specialized grades</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Enhance customer support and technical services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Improve operational efficiency and reduce costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Long Term (3-5 Years)</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Become a household name in South Asian markets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Achieve ISO certifications and quality standards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Expand into new markets and regions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">Develop sustainable practices across all operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of our mission to deliver excellence in minerals and chemicals worldwide.
          </p>
          <a
            href="https://wa.me/919830261334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
