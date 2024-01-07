import { Button } from '@mui/base';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MuiCollapse from '@mui/material/Collapse';
import { useState } from 'react';
import { WithChidlren } from 'ts/interfaces';

function Collapse({ children }: WithChidlren) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="absolute right-4 top-0 flex flex-col items-end gap-2">
            <Button
                onClick={() => setIsOpen((prev) => !prev)}
                className="button text-2xl leading-none"
            >
                <MoreHorizIcon />
            </Button>
            <MuiCollapse in={isOpen}>
                <div className="flex flex-col w-max gap-2">{children}</div>
            </MuiCollapse>
        </div>
    );
}

export default Collapse;
