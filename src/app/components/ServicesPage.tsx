import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDescription: '',
  });
  const [showOrderForm, setShowOrderForm] = useState(false);

  const packages = [
    {
      id: 'starter',
      name: 'Starter Pack',
      price: '$120',
      period: 'per project',
      description: 'Perfect for small projects and businesses getting started with GIS',
      features: [
        'Basic geospatial analysis',
        'Up to 5 map layers',
        'Standard data processing',
        'Basic reporting',
        'Email support',
        '1 revision included',
      ],
      notIncluded: [
        'Advanced modeling',
        'Real-time data integration',
        'Custom dashboard',
        'Priority support',
      ],
      popular: false,
    },
    {
      id: 'intermediate',
      name: 'Intermediate Pack',
      price: '$200',
      period: 'per project',
      description: 'Comprehensive solution for medium-sized projects and growing businesses',
      features: [
        'Advanced geospatial analysis',
        'Up to 15 map layers',
        'Advanced data processing',
        'Detailed reporting & insights',
        'Spatial modeling',
        'Priority email & phone support',
        '3 revisions included',
        'Custom visualizations',
      ],
      notIncluded: [
        'Real-time data integration',
        'Dedicated support line',
        'On-site consultation',
      ],
      popular: true,
    },
    {
      id: 'pro',
      name: 'Pro Package',
      price: '$300',
      period: 'per project',
      description: 'Enterprise-grade solution with full-service support and customization',
      features: [
        'Enterprise geospatial analysis',
        'Unlimited map layers',
        'Real-time data integration',
        'Advanced predictive modeling',
        'Custom dashboard development',
        'Comprehensive reporting suite',
        '24/7 priority support',
        'Unlimited revisions',
        'Direct WhatsApp support',
        'Fast delivery',
        'Training session included',
        'API integration',
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
    setShowOrderForm(true);
    // Scroll to form
    setTimeout(() => {
      document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Your order for ${packages.find(p => p.id === selectedPackage)?.name} has been received. Our team will contact you within 24 hours.`);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectDescription: '',
    });
    setShowOrderForm(false);
    setSelectedPackage(null);
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Our Services & Packages</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Choose the perfect package for your geospatial analysis needs. All packages include professional consultation and quality assurance.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-gray-900 rounded-2xl border-2 p-8 flex flex-col ${
                  pkg.popular
                    ? 'border-orange-500 shadow-2xl shadow-orange-500/20 scale-105'
                    : 'border-gray-800 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-white mb-2">{pkg.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-orange-500">{pkg.price}</span>
                    <span className="text-gray-400 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-gray-400">{pkg.description}</p>
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-teal-400" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((feature, index) => (
                      <li key={`not-${index}`} className="flex items-start gap-3 opacity-40">
                        <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-gray-600" />
                        </div>
                        <span className="text-gray-500 line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectPackage(pkg.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      {showOrderForm && (
        <section id="order-form" className="bg-gray-900 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black border border-gray-800 rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-white mb-2">Place Your Order</h2>
                <p className="text-gray-400">
                  Selected: <span className="font-semibold text-orange-500">
                    {packages.find(p => p.id === selectedPackage)?.name}
                  </span>
                </p>
              </div>

              <form onSubmit={handleSubmitOrder} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    required
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none text-white"
                    placeholder="Please describe your project requirements, objectives, and any specific deliverables you need..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowOrderForm(false);
                      setSelectedPackage(null);
                    }}
                    className="flex-1 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors"
                  >
                    Submit Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Additional Services */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enhance your package with these add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500 transition-colors">
              <h3 className="text-white mb-2">Custom Training</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive training sessions for your team on GIS tools and best practices.
              </p>
              <p className="text-orange-500 font-semibold">Contact for pricing</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500 transition-colors">
              <h3 className="text-white mb-2">Data Migration</h3>
              <p className="text-gray-400 mb-4">
                Seamless transfer of your existing spatial data to new systems or formats.
              </p>
              <p className="text-orange-500 font-semibold">Contact for pricing</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500 transition-colors">
              <h3 className="text-white mb-2">Ongoing Support</h3>
              <p className="text-gray-400 mb-4">
                Monthly retainer for continuous GIS support and maintenance.
              </p>
              <p className="text-orange-500 font-semibold">Contact for pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Not Sure Which Package to Choose?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact me for a free consultation and I'll help you find the perfect solution.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}