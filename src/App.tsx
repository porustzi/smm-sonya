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
import { BookingModal } from './components/BookingModal';

function App() {
  const [isBookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-bg font-manrope">
      <Hero onOpenBooking={() => setBookingOpen(true)} />
      <Services />
      <Cases />
      <Results />
      <Process />
      <Reviews />
      <FAQ />
      <ContactCTA onOpenBooking={() => setBookingOpen(true)} />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}

export default App;
