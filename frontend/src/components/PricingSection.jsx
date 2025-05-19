import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$0',
    period: '/month',
    description: 'Essential tools for job seekers',
    features: [
      'Resume Upload',
      'Basic Skill Extraction',
      '5 Job Matches per Month',
      'Email Notifications',
      'Limited API Access',
    ],
    buttonStyle: 'bg-blue-500 hover:bg-blue-600',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'Everything you need for serious job hunting',
    features: [
      'Advanced AI Analysis',
      'Unlimited Job Matches',
      'Priority Email Notifications',
      'Resume Performance Tracking',
      'Full API Access',
      'ATS Optimization',
    ],
    buttonStyle: 'bg-blue-600 hover:bg-blue-700',
    highlight: true,
    tag: 'Most Popular',
  },
  {
    name: 'Business',
    price: '$49',
    period: '/month',
    description: 'For recruitment teams and agencies',
    features: [
      'All Pro Features',
      'Multiple Resume Management',
      'Candidate Tracking',
      'Analytics Dashboard',
      'Team Collaboration Tools',
      'White-label Reports',
    ],
    buttonStyle: 'bg-blue-500 hover:bg-blue-600',
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-[#0B1120] text-white py-16">
      <div className="text-center mb-12">
        <span className="text-sm bg-gray-700 text-white px-3 py-1 rounded-full">Pricing</span>
        <h2 className="text-3xl font-bold mt-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 mt-2">Choose the plan that works best for your job search needs.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 border ${
              plan.highlight ? 'border-blue-500 shadow-lg' : 'border-gray-700'
            } bg-[#111827] relative`}
          >
            {plan.tag && (
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {plan.tag}
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold">
              {plan.price}
              <span className="text-base font-normal text-gray-400">{plan.period}</span>
            </div>
            <p className="text-gray-400 mt-2">{plan.description}</p>
            <ul className="text-sm mt-4 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full text-white py-2 rounded-md font-semibold ${plan.buttonStyle}`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
