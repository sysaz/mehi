import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import IndustriesPage from './pages/IndustriesPage';
import ClientsPage from './pages/ClientsPage';
import MissionVisionPage from './pages/MissionVisionPage';
import QualityPage from './pages/QualityPage';

type Page = 'home' | 'about' | 'products' | 'industries' | 'clients' | 'mission' | 'quality';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'clients':
        return <ClientsPage />;
      case 'mission':
        return <MissionVisionPage />;
      case 'quality':
        return <QualityPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
