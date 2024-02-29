import { useState } from 'react';
import './style.scss';
import { IoLanguage } from "react-icons/io5";
import { HiOutlineX } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './switchLanguage/LanguageSwitch.jsx';

export default function Switches() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={`containerSwitch ${isOpen ? 'open' : ''}`}>
      <button
        className={`open-settings-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? t('closeSettings') : t('openSettings')}
      >
        {isOpen ? <HiOutlineX /> : <IoLanguage />}
      </button>
      <LanguageSwitcher isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
