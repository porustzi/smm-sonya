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
  const [panelPurpose, setPanelPurpose] = useState<'project' | 'consultation'>('project');

  function openPanel(purpose: 'project' | 'consultation') {
    setPanelPurpose(purpose);
    setPanelOpen(true);
  }

  return (
    <main className="min-h-screen w-full bg-bg font-manrope">
      <Hero onOpenBooking={() => openPanel('project')} />
      <Services />
      <Cases />
      <Results />
      <Process />
      <Reviews />
      <FAQ />
      <ContactCTA onOpenBooking={() => openPanel('consultation')} />
      <Footer />
      <FloatingPanel isOpen={isPanelOpen} onClose={() => setPanelOpen(false)} purpose={panelPurpose} />
    </main>
  );
}

export default App;
