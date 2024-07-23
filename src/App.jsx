import './App.css';
import Home from './components/Home';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Branding from './components/Branding';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>  
          <Route path="/Home" element={<Home />} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
