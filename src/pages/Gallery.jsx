import { Outlet, NavLink } from 'react-router-dom';

import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
  return (
    <div>
      <section className="bg-gray-100 text-center">
        <nav className="fixed top-16 w-full bg-gray-100 shadow-md z-10">
          <ul className="flex justify-center space-x-4 p-4">
            <li>
              <NavLink 
                to="residential" 
                className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'hover:text-blue-500 text-gray-800'} 
              >
                Residential
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="commercial" 
                className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'hover:text-blue-500 text-gray-800'}
              >
                Commercial
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="architectural-design" 
                className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'hover:text-blue-500 text-gray-800'}
              >
                Architectural Design
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="pt-32 md:pt-40">
          <h2 className="text-3xl font-bold mb-8 pt-8 md:pt-0">Gallery</h2>
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
