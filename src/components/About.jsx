
import teamPhoto from '../assets/images/team-photo.webp';
import officePhoto from '../assets/images/office-photo.webp';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900">About Us</h2>
        <p className="text-xl text-gray-700">Learn more about our company, mission, vision, values, and team.</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Introduction</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Ibros Constructions and Architectural Designs is a leading provider of architectural design services and construction for both commercial and residential buildings. With a commitment to excellence and a passion for innovation, we bring our clients visions to life.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Mission Statement</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our mission is to deliver top-quality construction and architectural design services that exceed our clients expectations, fostering long-lasting relationships built on trust and mutual respect.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Vision</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our vision is to be recognized as a leader in the construction and architectural design industry, known for our innovative solutions, sustainable practices, and unwavering commitment to quality.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Values</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            We are driven by our core values of integrity, excellence, innovation, and customer satisfaction. These values guide every project we undertake and ensure that we deliver outstanding results every time.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Our Team</h3>
          <img src={teamPhoto} alt="Our Team" className="w-full h-auto rounded-lg shadow-md" />
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            Our team consists of experienced architects, engineers, project managers, and construction professionals who are dedicated to delivering the highest quality of work. Meet some of our key team members:
          </p>
          <div className="grid gap-8 mt-4 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2 text-blue-900">John Doe</h4>
              <p className="text-gray-700">Chief Architect</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2 text-blue-900">Jane Smith</h4>
              <p className="text-gray-700">Project Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2 text-blue-900">Michael Brown</h4>
              <p className="text-gray-700">Construction Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2 text-blue-900">Emily Davis</h4>
              <p className="text-gray-700">Lead Designer</p>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Company History</h3>
          <img src={officePhoto} alt="Our Office" className="w-full h-auto rounded-lg shadow-md" />
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            Founded in 2014, Ibros Constructions and Architectural Designs has grown from a small firm into a leading player in the industry. Over the years, we have completed numerous projects, ranging from small residential buildings to large commercial complexes, always maintaining our commitment to quality and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
