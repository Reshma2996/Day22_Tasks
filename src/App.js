import React from 'react';
import './App.css'; // Import CSS for styling

// Pricing Card Component
const PricingCard = ({ plan }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{plan.name}</h2>
        <h3>{plan.price}</h3>
      </div>
      <div className="card-body">
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index} className={feature.available ? '' : 'unavailable'}>
              {feature.available ? '✔' : '✘'} {feature.name}
            </li>
          ))}
        </ul>
      </div>
      <button className="button">BUTTON</button>
    </div>
  );
};

// Main App Component
const App = () => {
  const plans = [
    {
      name: 'FREE',
      price: '$0/month',
      features: [
        { name: 'Single User', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: false },
        { name: 'Dedicated Phone Support', available: false },
        { name: 'Free Subdomain', available: false },
        { name: 'Monthly Status Reports', available: false }
      ]
    },
    {
      name: 'PLUS',
      price: '$9/month',
      features: [
        { name: '5 Users', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: false }
      ]
    },
    {
      name: 'PRO',
      price: '$49/month',
      features: [
        { name: 'Unlimited Users', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: true }
      ]
    }
  ];

  return (
    <div className="pricing-table">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default App;
