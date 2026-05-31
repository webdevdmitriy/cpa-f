import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { PageTitle } from '@/components/PageTitle/PageTitle'
import ProfitSection from '@/components/ProfitSection/ProfitSection'
import VolumetricButton from '@/components/VolumetricButton/Button'

export default function Home() {
  return (
    <main>
      <Header />
      <PageTitle text="Hi. Im title" />
      <VolumetricButton label="partner up" />
      <ProfitSection />
      <Footer />
    </main>
  )
}
