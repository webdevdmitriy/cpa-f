import { useTranslations } from 'next-intl'
import { PageTitle } from '@/components/PageTitle/PageTitle'
import VolumetricButton from '@/components/VolumetricButton/Button'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main>
      <PageTitle text={t('title')} />
      <VolumetricButton label={t('button')} />
    </main>
  )
}
