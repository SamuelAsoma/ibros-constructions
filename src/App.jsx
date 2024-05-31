import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ResidentialGallery from './components/ResidentialGallery';
import CommercialGallery from './components/CommercialGallery';
import ArchitecturalDesignGallery from './components/ArchitecturalDesignGallery';
import ResidentialDetail from './components/ResidentialDetail';
import CommercialDetail from './components/CommercialDetail';
import ArchitecturalDesignDetail from './components/ArchitecturalDesignDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />}>
        <Route index element={<Navigate to="residential" />} />
          <Route path="residential" element={<ResidentialGallery />} />
          <Route path="commercial" element={<CommercialGallery />} />
          <Route path="architectural-design" element={<ArchitecturalDesignGallery />} />
        </Route>
        <Route path="/gallery/residential/:id" element={<ResidentialDetail />} />
        <Route path="/gallery/commercial/:id" element={<CommercialDetail />} />
        <Route path="/gallery/architectural-design/:id" element={<ArchitecturalDesignDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
