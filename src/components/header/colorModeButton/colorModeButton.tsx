import { Button } from '@mui/base';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import useColorMode from './useColorMode';

function ColorModeButton() {
    const { mode, handleChangeMode } = useColorMode();

    return (
        <Button onClick={handleChangeMode} className="button border-with-shadow">
            {mode === 'dark' ? (
                <LightModeIcon className="text-orange-400" />
            ) : (
                <NightlightIcon className="text-blue-500" />
            )}
        </Button>
    );
}

export default ColorModeButton;
