import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MessageSection from './components/MessageSection'
import MoodFeatureSection from './components/MoodFeatureSection'
import LifebuoySection from './components/LifebuoySection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#050508] text-foreground antialiased">
      <Header />
      <main>
        <HeroSection />
        <MessageSection />
        <MoodFeatureSection />
        <LifebuoySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
