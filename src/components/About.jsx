import React from 'react';
import teamPhoto from '../assets/images/team-photo.webp';
import officePhoto from '../assets/images/office-photo.webp';
import { FaBullseye, FaEye, FaHandshake, FaBuilding } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100 font-roboto" style={{ backgroundColor: '#131A22', color: '#FFFFFF' }}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-4 animate-fadeIn">About Us</h2>
        <p className="text-xl animate-slideIn" style={{ animationDelay: '0.2s' }}>
          Learn more about our company, mission, vision, values, and team.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img src={officePhoto} alt="Office" className="w-full h-96 object-cover rounded-lg shadow-md" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <h3 className="text-4xl font-bold text-white">Building the Future, Today</h3>
          </div>
        </div>
        
        {/* Introduction Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4 animate-slideIn" style={{ animationDelay: '0.4s' }}>Introduction</h3>
          <p className="text-lg leading-relaxed">
            Ibros Constructions and Architectural Designs is a leading provider of architectural design services and construction for both commercial and residential buildings. With a commitment to excellence and a passion for innovation, we bring our clients' visions to life.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4 animate-slideIn" style={{ animationDelay: '0.6s' }}>Mission Statement</h3>
          <div className="flex items-center mb-4">
            <FaBullseye className="text-orange-500 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
            <p className="text-lg leading-relaxed">
              Our mission is to deliver top-quality construction and architectural design services that exceed our clients' expectations, fostering long-lasting relationships built on trust and mutual respect.
            </p>
          </div>
        </div>
        
        {/* Vision Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4 animate-slideIn" style={{ animationDelay: '0.8s' }}>Vision</h3>
          <div className="flex items-center mb-4">
            <FaEye className="text-orange-500 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
            <p className="text-lg leading-relaxed">
              Our vision is to be recognized as a leader in the construction and architectural design industry, known for our innovative solutions, sustainable practices, and unwavering commitment to quality.
            </p>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4 animate-slideIn" style={{ animationDelay: '1s' }}>Values</h3>
          <div className="flex items-center mb-4">
            <FaHandshake className="text-orange-500 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
            <p className="text-lg leading-relaxed">
              We are driven by our core values of integrity, excellence, innovation, and customer satisfaction. These values guide every project we undertake and ensure that we deliver outstanding results every time.
            </p>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4 animate-slideIn" style={{ animationDelay: '1.2s' }}>Our Team</h3>
          <img src={teamPhoto} alt="Our Team" className="w-full h-auto rounded-lg shadow-md mb-4" />
          <p className="text-lg leading-relaxed">
            Our team consists of experienced architects, engineers, project managers, and construction professionals who are dedicated to delivering the highest quality of work.
          </p>
        </div>
        
        {/* History Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4 animate-slideIn" style={{ animationDelay: '1.4s' }}>Company History</h3>
          <img src={officePhoto} alt="Our Office" className="w-full h-auto rounded-lg shadow-md mb-4" />
          <p className="text-lg leading-relaxed">
            Founded in 2014, Ibros Constructions and Architectural Designs has grown from a small firm into a leading player in the industry. Over the years, we have completed numerous projects, ranging from small residential buildings to large commercial complexes, always maintaining our commitment to quality and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
