import React, { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of services including web development, mobile app development, and digital marketing.',
  },
  {
    question: 'How can I contact you?',
    answer: 'You can contact us via email, phone, or by filling out the contact form on our website.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'Our pricing is flexible and depends on the scope and complexity of the project. We offer both fixed-price and hourly-rate models.',
  },
  {
    question: 'Do you offer support after the project is completed?',
    answer: 'Yes, we offer ongoing support and maintenance services after the project is completed.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer: 'The timeline depends on the project requirements. We work closely with our clients to ensure timely delivery.',
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-full px:10 md:px-24 mx-auto p-6 bg-gray-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <span className={`text-gray-500 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
