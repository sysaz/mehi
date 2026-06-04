import { Building2, Users, Award, Briefcase } from 'lucide-react';

export default function AboutPage() {
  const directors = [
    { name: 'Mahip Kumar Sirohia', title: 'Director' },
    { name: 'Vinay Agarwala', title: 'Director' },
    { name: 'Vishal Agarwala', title: 'Director' },
    { name: 'Shruti Agarwal', title: 'Director' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About MEHI</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A trusted global supplier of premium minerals and chemicals serving diverse industries since 2021
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-lg text-brand-gray mb-4 leading-relaxed">
                MEHI Worldwide Trading Private Limited is a leading supplier of industrial minerals and chemicals, serving major industries across South Asia.
              </p>
              <p className="text-lg text-brand-gray mb-4 leading-relaxed">
                Established in 2021 with a commitment to excellence, we provide high-quality materials that meet international standards for food, pharmaceuticals, cosmetics, and 15+ other industries.
              </p>
              <p className="text-lg text-brand-gray leading-relaxed">
                Our strength lies in understanding client needs and delivering reliable solutions with consistent quality and on-time service.
              </p>
            </div>
            <div>
              <img
                src="/images/about-who-we-are.png"
                alt="Company overview"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Company Details</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="text-brand-navy" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Legal Information</h3>
              </div>
              <div className="space-y-4 text-brand-gray">
                <div>
                  <p className="text-sm font-medium text-gray-600">Company Name</p>
                  <p className="font-semibold">MEHI Worldwide Trading Private Limited</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">CIN</p>
                  <p className="font-semibold">U51909WB2021PTC249675</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="text-brand-navy" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Registered Office</h3>
              </div>
              <p className="text-brand-gray leading-relaxed">
                5th Floor, 22 Hemanta Basu Sarani,<br />
                Kolkata, West Bengal, India<br />
                700001
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="text-brand-navy" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Corporate Office</h3>
            </div>
            <p className="text-brand-gray leading-relaxed">
              1st Floor, Sai Complex, OT Road,<br />
              Inda, Kharagpur, West Bengal, India<br />
              721301
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Leadership Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {directors.map((director, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{director.name}</h3>
                <p className="text-brand-navy font-medium">{director.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-400 mb-2">PHONE</p>
              <a href="tel:+919830261334" className="text-xl font-semibold hover:text-[#5B82AD] transition-colors">
                +91 98302 61334
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">EMAIL</p>
              <a href="mailto:mehiwt@gmail.com" className="text-xl font-semibold hover:text-[#5B82AD] transition-colors">
                mehiwt@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
