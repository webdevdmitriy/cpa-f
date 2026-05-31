import { Footer } from '@/components/Footer/Footer'
import { PageTitle } from '@/components/PageTitle/PageTitle'
import VolumetricButton from '@/components/VolumetricButton/Button'

export default function Home() {
  return (
    <main>
      <PageTitle text="Hi. Im title" />
      <VolumetricButton label="partner up" />
      <Footer />
    </main>
  )
}
