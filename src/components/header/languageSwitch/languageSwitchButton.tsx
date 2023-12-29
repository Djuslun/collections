import { Button } from '@mui/base';
import i18next from 'i18next';
import useLanguageSwitch from './useLanguageSwitch';

function LanguageSwitch() {
    const { language, changeLanguage } = useLanguageSwitch();

    return (
        <Button
            onClick={() => changeLanguage(i18next.language === 'en' ? 'ru' : 'en')}
            className="p-3 text-[18px] leading-none dark:text-white border border-gray-300 rounded-md shadow-sm shadow-slate-300 dark:border-gray-500 bg-white dark:bg-gray-700"
        >
            {language.toUpperCase()}
        </Button>
    );
}

export default LanguageSwitch;
