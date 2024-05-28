
import { Outlet, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Gallery = () => {
  return (
    <div>
      <Header />
      <section className="py-12 bg-gray-100 text-center pt-20">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="max-w-6xl mx-auto">
          <nav className="mb-8">
            <ul className="flex justify-center space-x-4">
              <li>
                <NavLink 
                  to="residential" 
                  className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'hover:underline'}>
                  Residential
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="commercial" 
                  className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'hover:underline'}>
                  Commercial
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="architectural-design" 
                  className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'hover:underline'}>
                  Architectural Design
                </NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Gallery;
