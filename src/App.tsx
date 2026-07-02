import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ExhibitionsPortfolio from './pages/ExhibitionsPortfolio';
import Team from './pages/Team';
import Header from './components/Header';
import ContactUs from './pages/Contact-us';
import {About} from './pages/About';
import AboutSectionDetail from './components/AboutSectionDetail';
import ServiceDetail from './pages/ServiceDetail';
import QuickQuery from './components/QuickQuery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/exhibitions-portfolio" element={<ExhibitionsPortfolio />} />
          <Route path="/quick-query" element={<QuickQuery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/projects/:id" element={<AboutSectionDetail />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/team" element={<Team />} />

     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
