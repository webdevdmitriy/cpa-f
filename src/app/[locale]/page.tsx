import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

import { ApplicationModals } from '@/components/ApplicationModals/ApplicationModals'
import { MultiBenefits } from '@/components/MultiBenefits/MultiBenefits'

import ProfitSection from '@/components/ProfitSection/ProfitSection'
import MultiTasks from '@/components/MultiTasks/MultiTasks'
import MultiWithUs from '@/components/MultiWithUs/MultiWithUs'

type HomeProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <ProfitSection />
      <MultiTasks />
      <MultiBenefits />
      <ApplicationModals />
      <MultiWithUs />
    </main>
  )
}
