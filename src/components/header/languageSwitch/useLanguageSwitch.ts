import { useCallback, useState } from 'react';
import i18n from 'languages/i18n';

type TLanguage = 'en' | 'ru';

interface IUseLanguage {
    language: TLanguage;
    changeLanguage: (language: TLanguage) => void;
}

const useLanguageSwitch = (): IUseLanguage => {
    const storedLanguage = localStorage.getItem('i18nextLng') as TLanguage;
    const [language, setLanguage] = useState<TLanguage>(storedLanguage || 'en');

    const changeLanguage = useCallback((language: TLanguage) => {
        i18n.changeLanguage(language);
        setLanguage(language);
    }, []);

    return { language, changeLanguage };
};

export default useLanguageSwitch;
