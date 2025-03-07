import { useState } from 'react';

const Subscription = () => {
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: 'Basic',
      price: 29,
      duration: 'month',
      features: [
        '1 gym location',
        'Member management',
        'Access to workout schedules',
        'Basic reporting',
        'Email support',
      ],
      isEditing: false,
    },
    {
      id: 2,
      name: 'Standard',
      price: 79,
      duration: 'month',
      features: [
        'Up to 5 gym locations',
        'Advanced member management',
        'Class scheduling',
        'Reporting with analytics',
        'Priority email support',
        'Access to mobile app',
      ],
      isEditing: false,
    },
    {
      id: 3,
      name: 'Premium',
      price: 199,
      duration: 'month',
      features: [
        'Unlimited gym locations',
        'Customizable member management',
        'Personal training schedules',
        'Advanced analytics and reporting',
        '24/7 support',
        'Dedicated account manager',
        'Access to all features including API integrations',
      ],
      isEditing: false,
    },
  ]);

  const toggleEdit = (id) => {
    setPlans(
      plans.map((plan) =>
        plan.id === id ? { ...plan, isEditing: !plan.isEditing } : plan,
      ),
    );
  };

  const updatePlan = (id, key, value) => {
    setPlans(
      plans.map((plan) => (plan.id === id ? { ...plan, [key]: value } : plan)),
    );
  };

  return (
    <section className="bg-white dark:bg-gray-900 p-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Manage Pricing Plans
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="p-6 border rounded-lg shadow bg-white dark:bg-gray-800 text-center"
            >
              {plan.isEditing ? (
                <input
                  type="text"
                  className="text-2xl font-semibold text-center w-full"
                  value={plan.name}
                  onChange={(e) => updatePlan(plan.id, 'name', e.target.value)}
                />
              ) : (
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
              )}
              {plan.isEditing ? (
                <input
                  type="number"
                  className="text-5xl font-extrabold text-center w-full my-4"
                  value={plan.price}
                  onChange={(e) => updatePlan(plan.id, 'price', e.target.value)}
                />
              ) : (
                <div className="text-5xl font-extrabold my-4">
                  ${plan.price}
                  <span className="text-gray-500">/{plan.duration}</span>
                </div>
              )}
              <ul className="mb-4 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleEdit(plan.id)}
                className="bg-purple-600 text-white px-4 py-2 rounded-md"
              >
                {plan.isEditing ? 'Save' : 'Edit'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
