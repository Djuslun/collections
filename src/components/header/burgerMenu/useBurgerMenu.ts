import { KeyboardEventHandler, useState } from 'react';
import { TSetState } from 'ts/types';

interface IUseBurgerMenu {
    open: boolean;
    handleKeyDown: KeyboardEventHandler<HTMLDivElement>;
    setOpen: TSetState<boolean>;
}

const useBurgerMenu = (): IUseBurgerMenu => {
    const [open, setOpen] = useState<boolean>(false);

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (!event) {
            return;
        }
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if (event.type === 'keydown' && event.key === 'Esc') {
            setOpen(false);
        }
    };

    return { open, handleKeyDown, setOpen };
};

export default useBurgerMenu;
