import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ContactUs from '@/components/ContactUs'
import Team from '@/components/Team'
import OldEvents from '@/components/OldEvents'
import CurrentEvents from '@/components/CurrentEvents'
import About from '@/components/About'
import Sponsors from '@/components/Sponsors'
export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors></Sponsors>
      <CurrentEvents></CurrentEvents>
      <About></About>
      <OldEvents></OldEvents>
      <Team></Team>

      <CTA />
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  )
}
