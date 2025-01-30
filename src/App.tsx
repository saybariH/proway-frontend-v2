import logoBlue from '@assets/images/logo-blue.svg'
import { useTranslation } from 'react-i18next';

function App() {
  const { t , i18n } = useTranslation('translation');
  console.log(i18n.language)
  return (
    <>
        <a href="https://vite.dev" target="_blank">
          <img src={logoBlue} className="logo" alt="Vite logo" />
        </a>
        <h1 className='font-lufga  text-1xl'> {t('welcome')}  </h1>
        <h1 className='font-lufga  text-1xl'> {t('name')} </h1>
    </>
  )
}

export default App
