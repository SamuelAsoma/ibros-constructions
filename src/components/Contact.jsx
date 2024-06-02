import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaMapMarkerAlt size={30} className="text-orange-500 inline-block mb-2" />,
      title: 'Our Office',
      content: <p className="text-lg leading-relaxed text-gray-700">Kotoku, Accra, Ghana</p>,
      aos: 'fade-up'
    },
    {
      icon: <FaEnvelope size={30} className="text-orange-500 inline-block mb-2" />,
      title: 'Email Us',
      content: <a href="mailto:ibroone3030@gmail.com" className="text-lg text-blue-500 hover:underline">ibroone3030@gmail.com</a>,
      aos: 'fade-up',
      delay: '200'
    },
    {
      icon: <FaWhatsapp size={30} className="text-green-500 inline-block mb-2" />,
      title: 'WhatsApp',
      content: (
        <ul className="space-y-2">
          <li><a href="https://wa.me/+233547538851" className="text-lg text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">+233 54 753 8851</a></li>
          <li><a href="https://wa.me/+233543469526" className="text-lg text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">+233 54 346 9526</a></li>
        </ul>
      ),
      aos: 'fade-up',
      delay: '400'
    },
    {
      icon: <FaPhone size={30} className="text-orange-500 inline-block mb-2" />,
      title: 'Call Us',
      content: (
        <div className="space-y-2">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-gray-800">Fax:</h4>
            <a href="tel:+233547538851" className="text-lg text-blue-500 hover:underline">+233 54 753 8851</a>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-gray-800">Enquiries:</h4>
            <a href="tel:+233543469626" className="text-lg text-blue-500 hover:underline">+233 54 346 9626</a>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-gray-800">Support:</h4>
            <a href="tel:+233531757919" className="text-lg text-blue-500 hover:underline">+233 53 175 7919</a>
          </div>
        </div>
      ),
      aos: 'fade-up',
      delay: '600'
    }
  ];

  return (
    <section id="contact" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 animate-fadeIn border-b-2 border-orange-500 inline-block text-gray-800">Contact Us</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md" data-aos={method.aos} data-aos-delay={method.delay}>
            {method.icon}
            <h3 className="text-xl font-bold mb-2 text-gray-800">{method.title}</h3>
            {method.content}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
