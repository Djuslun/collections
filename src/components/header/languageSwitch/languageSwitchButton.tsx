import { Button } from '@mui/base';
import i18next from 'i18next';
import useLanguageSwitch from './useLanguageSwitch';

function LanguageSwitch() {
    const { language, changeLanguage } = useLanguageSwitch();

    return (
        <Button
            onClick={() => changeLanguage(i18next.language === 'en' ? 'ru' : 'en')}
            className="text-button button border-with-shadow"
        >
            {language.toUpperCase()}
        </Button>
    );
}

export default LanguageSwitch;
