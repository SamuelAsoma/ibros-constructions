
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <div className="max-w-6xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="mb-6 lg:mb-0 flex-1">
            <FaMapMarkerAlt size={30} className="text-blue-500 inline-block mb-2" />
            <h3 className="text-xl font-bold">Our Office</h3>
            <p>Kotoku, Accra, Ghana</p>
          </div>
          <div className="mb-6 lg:mb-0 flex-1">
            <FaEnvelope size={30} className="text-blue-500 inline-block mb-2" />
            <h3 className="text-xl font-bold">Email Us</h3>
            <a href="mailto:ibroone3030@gmail.com" className="text-blue-500 hover:underline">ibroone3030@gmail.com</a>
          </div>
          <div className="mb-6 lg:mb-0 flex-1">
            <FaWhatsapp size={30} className="text-blue-500 inline-block mb-2" />
            <h3 className="text-xl font-bold">WhatsApp</h3>
            <ul>
              <li><a href="https://wa.me/+233547538851" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">+233 54 753 8851</a></li>
              <li><a href="https://wa.me/+233543469526" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">+233 54 346 9526</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <FaPhone size={30} className="text-blue-500 inline-block mb-2" />
            <h3 className="text-xl font-bold">Call Us</h3>
            <div className="space-y-2">
              <div>
                <span className="block font-semibold">Fax:</span>
                <a href="tel:+233547538851" className="block text-blue-500 hover:underline">+233 54 753 8851</a>
              </div>
              <div>
                <span className="block font-semibold">Enquiries:</span>
                <a href="tel:+233543469626" className="block text-blue-500 hover:underline">+233 54 346 9626</a>
              </div>
              <div>
                <span className="block font-semibold">Support:</span>
                <a href="tel:+233531757919" className="block text-blue-500 hover:underline">+233 53 175 7919</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
