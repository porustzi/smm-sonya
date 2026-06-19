import { useState } from 'react';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Cases } from './sections/Cases';
import { Results } from './sections/Results';
import { Process } from './sections/Process';
import { Reviews } from './sections/Reviews';
import { FAQ } from './sections/FAQ';
import { ContactCTA } from './sections/ContactCTA';
import { Footer } from './sections/Footer';
import { FloatingPanel } from './components/FloatingPanel';

function App() {
  const [isPanelOpen, setPanelOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-bg font-manrope">
      <Hero onOpenBooking={() => setPanelOpen(true)} />
      <Services />
      <Cases />
      <Results />
      <Process />
      <Reviews />
      <FAQ />
      <ContactCTA onOpenBooking={() => setPanelOpen(true)} />
      <Footer />
      <FloatingPanel isOpen={isPanelOpen} onClose={() => setPanelOpen(false)} />
    </main>
  );
}

export default App;
