import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import FloatingActions from './components/FloatingActions';
import LeadModal from './components/LeadModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import { Destination } from './data/travelConfig';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // Lead modal state mapping
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [modalPackageTitle, setModalPackageTitle] = useState('');
  const [modalDestinationName, setModalDestinationName] = useState('');

  const handleOpenLeadModal = (packageTitle: string = "", destinationName: string = "") => {
    setModalPackageTitle(packageTitle);
    setModalDestinationName(destinationName);
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
    setModalPackageTitle('');
    setModalDestinationName('');
  };

  // Helper page selector
  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home
            onOpenInquiry={handleOpenLeadModal}
            setActivePage={setActivePage}
            setSelectedDestination={setSelectedDestination}
          />
        );
      case 'about':
        return <About onOpenInquiry={handleOpenLeadModal} />;
      case 'destinations':
        return (
          <Destinations
            onOpenInquiry={handleOpenLeadModal}
            selectedDestination={selectedDestination}
            setSelectedDestination={setSelectedDestination}
          />
        );
      case 'packages':
        return <Packages onOpenInquiry={handleOpenLeadModal} />;
      case 'gallery':
        return <Gallery onOpenInquiry={handleOpenLeadModal} />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home
            onOpenInquiry={handleOpenLeadModal}
            setActivePage={setActivePage}
            setSelectedDestination={setSelectedDestination}
          />
        );
    }
  };

  // Define SEO tags based on current view
  const getSEOProps = () => {
    switch (activePage) {
      case 'home':
        return {
          pageTitle: 'Official Website - Srinagar, Gulmarg, Pahalgam Deals',
          description: 'Official Kashmir Horizon Tours. Local travel agency opposite Dal Lake, Srinagar. Customized family tour packages, honeymoon specials, & 24/7 taxi dispatch with local driver guides.',
          path: '',
        };
      case 'about':
        return {
          pageTitle: 'About Us - Who We Are & Heritage',
          description: 'Learn about Tariq Ahmad Shah and the local Srinagar operators of Kashmir Horizon Tours. Official Department of Tourism registration, fleet standards, and our foundational mission.',
          path: 'about',
        };
      case 'destinations':
        return {
          pageTitle: 'Explore Kashmir Destinations - Local Handbook',
          description: 'Local seasonal guides, activities, and physical attractions for Dal Lake Srinagar, Gulmarg skiing Phase 2, Baisaran Pahalgam, Sonamarg glacier, Yusmarg meadows, & Doodhpathri streams.',
          path: 'destinations',
        };
      case 'packages':
        return {
          pageTitle: 'Curated Kashmir Tour Packages - Best Rates',
          description: 'Compare Honeymoon special, classic family circuit, 13,000ft alpine ski treks, and budget Tempo Traveller group deals with robust transparent inclusions and exclusions lists.',
          path: 'packages',
        };
      case 'gallery':
        return {
          pageTitle: 'Media Gallery - Landscape & Winter Snow Pics',
          description: 'Review high-fidelity authentic photographs of Srinagar shikaras, Gulmarg sledding trails, Lidder river white rafting, and high-altitude mountain camping sights.',
          path: 'gallery',
        };
      case 'contact':
        return {
          pageTitle: 'Contact J&K Reservations Team - Find Us',
          description: 'Reach our reservation office directly opposite Ghat No. 7, Boulevard road, Srinagar, J&K. Call or message us 24/7 for custom bookings, taxis, and emergency dispatches.',
          path: 'contact',
        };
      default:
        return {
          pageTitle: 'Local Experts Tourism Agency',
          path: '',
        };
    }
  };

  const seoProps = getSEOProps();

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100">
      
      {/* 1. Dynamic Meta Tags Coordinator */}
      <SEO 
        pageTitle={seoProps.pageTitle} 
        description={seoProps.description} 
        path={seoProps.path} 
      />

      {/* 2. Glassmorphic Navigation Bar */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenInquiry={() => handleOpenLeadModal('General Global Booking Request')} 
      />

      {/* 3. Primary Page Context */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* 4. Structured Corporate Footer */}
      <Footer setActivePage={setActivePage} />

      {/* 5. Mobile & Desktop Sticky CTA shortcuts */}
      <FloatingActions onOpenInquiry={() => handleOpenLeadModal('Floating Actions Request')} />

      {/* 6. Lead Capture & Prefilled WhatsApp Modal Dialog */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={handleCloseLeadModal}
        selectedPackageTitle={modalPackageTitle}
        selectedDestinationName={modalDestinationName}
      />

    </div>
  );
}
