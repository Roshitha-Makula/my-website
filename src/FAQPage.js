import React from 'react';

function FAQPage() {
  const faqs = [
    { question: "What is this website about?", answer: "This website provides a platform for sharing and analyzing agricultural data collected from IoT sensors." },
    { question: "How do I view the data?", answer: "You can view the data by navigating to the 'Data Viewer' page." },
    { question: "How do I contact support?", answer: "Visit our 'Contact' page and fill out the form to reach us." }
  ];

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQPage;
