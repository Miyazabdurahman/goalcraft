import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import ProgrammeDetail from './pages/ProgrammeDetail';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <WhatsAppFloat />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programmes/:slug" element={<ProgrammeDetail />} />
        <Route path="*" element={<ProgrammeDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
