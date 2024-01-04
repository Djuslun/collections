import { useEffect, useState } from 'react';

type ColorMode = 'dark' | 'light';

interface IUseColorMode {
    mode: ColorMode;
    handleChangeMode: () => void;
}

const useColorMode = (): IUseColorMode => {
    const preferColorMode =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'ligth';
    const storageMode = localStorage.getItem('mode') as ColorMode;

    const [mode, setMode] = useState<ColorMode>(storageMode || preferColorMode);

    useEffect(() => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            document.documentElement.setAttribute('data-color-mode', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            document.documentElement.setAttribute('data-color-mode', 'light');
        }
        localStorage.setItem('mode', mode);
    }, [mode]);

    const handleChangeMode = () => {
        setMode((mode) => (mode === 'dark' ? 'light' : 'dark'));
    };

    return { mode, handleChangeMode };
};

export default useColorMode;
