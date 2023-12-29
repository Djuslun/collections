import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button } from '@mui/base';
import useColorMode from './useColorMode';

function ColorModeButton() {
    const { mode, handleChangeMode } = useColorMode();

    return (
        <Button
            onClick={handleChangeMode}
            className="p-2 border border-gray-300 rounded-md shadow-md shadow-slate-300 dark:border-gray-500 bg-white dark:bg-gray-700"
        >
            {mode === 'dark' ? (
                <LightModeIcon className="text-orange-400" />
            ) : (
                <NightlightIcon className="text-blue-500" />
            )}
        </Button>
    );
}

export default ColorModeButton;
