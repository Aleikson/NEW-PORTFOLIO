import './languageSwitch.scss'; // Importando os estilos SCSS
import Us from '../../../assets//us.svg';
import Br from '../../../assets/br.svg';
import { useTranslation } from 'react-i18next';

const languageOptions = [
  {
    name: 'English',
    value: 'en',
    flag: Us,
  },
  {
    name: 'Português',
    value: 'pt',
    flag: Br,
  },
];

export default function LanguageSwitcher({ isOpen, setIsOpen }) {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
    setIsOpen(false);
  };

  return (
    <div className={`container ${isOpen ? 'open' : ''}`}>
      <div className='languagesContainer'>
        {languageOptions.map((item, index) => (
          <button
            key={index}
            className='languageBtn'
            onClick={() => handleLanguageChange(item.value)}
            title={item.name}
          >
            <img
              className='flagIcon'
              src={item.flag}
              alt={`${item.name} ${t('flag')}`}
            />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
