import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrustedBySection from './components/TrustedBySection'
import MessageSection from './components/MessageSection'
import MoodFeatureSection from './components/MoodFeatureSection'
import EmotionOrbitSection from './components/EmotionOrbitSection'
import BreathingGallerySection from './components/BreathingGallerySection'
import BenefitPairsSection from './components/BenefitPairsSection'
import TriplePhoneFanSection from './components/TriplePhoneFanSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#050508] text-foreground antialiased">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <MessageSection />
        <MoodFeatureSection />
        <EmotionOrbitSection />
        <BreathingGallerySection />
        <BenefitPairsSection />
        <TriplePhoneFanSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
