import React from 'react';

const faqs = [
  {
    question: 'What is IPTV?',
    answer: 'IPTV (Internet Protocol Television) is a streaming service that delivers TV content over the internet. It offers access to live TV channels, movies, series, and sports events in high quality.',
  },
  {
    question: 'What devices are supported?',
    answer: 'Our service works on Smart TVs, Android/iOS devices, Amazon Fire Stick, MAG boxes, Formuler, and computers. We support popular apps like IPTV Smarters, TiviMate, and GSE IPTV.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply choose a package and contact us via WhatsApp. We\'ll guide you through the setup process and provide instant activation.',
  },
  {
    question: 'What channels are included?',
    answer: 'We offer 10,000+ channels including premium sports (beIN Sports, Sky Sports, ESPN), entertainment (Netflix, HBO, Disney+), and international channels. Contact us for a complete channel list.',
  },
  {
    question: 'Do you offer a trial?',
    answer: 'Yes, we offer a 24-hour trial so you can test our service quality and channel selection before subscribing.',
  },
  {
    question: 'What internet speed do I need?',
    answer: 'We recommend at least 25 Mbps for HD streaming and 50 Mbps for 4K content. Our service includes adaptive streaming to match your connection.',
  },
];

export function FAQList() {
  return (
    <div className="space-y-8">
      {faqs.map((faq) => (
        <div key={faq.question} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}