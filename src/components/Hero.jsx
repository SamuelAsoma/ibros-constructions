import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import backgroundImage from '../assets/images/hero-bg.webp';
import slide2 from '../assets/images/slide1.webp';
import slide3 from '../assets/images/slide2.webp';

const Hero = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={5000}
          className="rounded-lg overflow-hidden"
        >
          <div className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 leading-tight tracking-wider">
                Ibros Constructions and Architectural Designs
              </h1>
              <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 max-w-2xl font-light leading-relaxed tracking-wide">
                Delivering excellence in architectural design and construction for commercial and residential buildings. Trust us to bring your vision to life with our expertise and commitment to quality.
              </p>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${slide2})` }}>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 leading-tight tracking-wider">
                Quality Construction Services
              </h1>
              <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 max-w-2xl font-light leading-relaxed tracking-wide">
                Providing top-notch construction services for commercial and residential projects. Our team ensures timely and cost-effective delivery.
              </p>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${slide3})` }}>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 leading-tight tracking-wider">
                Innovative Architectural Designs
              </h1>
              <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 max-w-2xl font-light leading-relaxed tracking-wide">
                Creating innovative and sustainable architectural designs that meet the unique needs of each client. We turn visions into reality.
              </p>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Learn More
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Hero;
