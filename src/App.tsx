import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Cases } from './sections/Cases';
import { Results } from './sections/Results';
import { Process } from './sections/Process';
import { Reviews } from './sections/Reviews';
import { FAQ } from './sections/FAQ';
import { ContactCTA } from './sections/ContactCTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <main className="min-h-screen w-full bg-bg font-manrope">
      <Hero />
      <Services />
      <Cases />
      <Results />
      <Process />
      <Reviews />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}

export default App;
