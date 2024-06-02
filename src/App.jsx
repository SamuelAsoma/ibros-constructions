import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ForSale from './pages/ForSale';
import ResidentialGallery from './components/ResidentialGallery';
import CommercialGallery from './components/CommercialGallery';
import ArchitecturalDesignGallery from './components/ArchitecturalDesignGallery';
import ResidentialDetail from './components/ResidentialDetail';
import CommercialDetail from './components/CommercialDetail';
import ArchitecturalDesignDetail from './components/ArchitecturalDesignDetail';
import BuildingDetail from './pages/BuildingDetail';
import Layout from './components/Layout';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 200, // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />}>
            <Route index element={<Navigate to="residential" />} />
            <Route path="residential" element={<ResidentialGallery />} />
            <Route path="commercial" element={<CommercialGallery />} />
            <Route path="architectural-design" element={<ArchitecturalDesignGallery />} />
          </Route>
          <Route path="gallery/residential/:id" element={<ResidentialDetail />} />
          <Route path="gallery/commercial/:id" element={<CommercialDetail />} />
          <Route path="gallery/architectural-design/:id" element={<ArchitecturalDesignDetail />} />
          <Route path="for-sale" element={<ForSale />} />
          <Route path="building/:id" element={<BuildingDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
