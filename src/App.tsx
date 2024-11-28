import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/home/HeroSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <HeroSection />
          {/* Other sections will be added here */}
        </main>
      </div>
    </Router>
  );
}

export default App;