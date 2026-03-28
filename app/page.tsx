import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StorySection from '@/components/StorySection'
import ProblemSection from '@/components/ProblemSection'
import FocusSection from '@/components/FocusSection'
import DifferenceSection from '@/components/DifferenceSection'
import PortfolioSection from '@/components/PortfolioSection'
import IdentitySection from '@/components/IdentitySection'
import PricingSection from '@/components/PricingSection'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StorySection />
      <ProblemSection />
      <FocusSection />
      <DifferenceSection />
      <PortfolioSection />
      <IdentitySection />
      <PricingSection />
      <LeadForm />
      <Footer />
    </main>
  )
}
