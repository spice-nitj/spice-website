import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ContactUs from '@/components/ContactUs'
import Team from '@/components/Team'
import OldEvents from '@/components/OldEvents'
import UpcomingEvents from '@/components/UpcomingEvents'
import About from '@/components/About'
import Sponsors from '@/components/Sponsors'
export default function Home() {
  return (
    <>
      <main className='scroll-smooth'>
        <Hero />
        <Sponsors />
        <UpcomingEvents />
        <About />
        <OldEvents />
        <Team />
        <CTA />
        <ContactUs />
        <Footer />
      </main>
    </>
  )
}
