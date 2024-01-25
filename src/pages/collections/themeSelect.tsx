import { Button } from '@mui/base';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { CollectionThemesTypes, collectionThemes } from 'utils/consts';
import useTranslateSelectOptions from 'hooks/useTranslateSelectOptions';
import { TSetState } from 'ts/types';

function ThemeSelect({
    selectedTheme,
    setSelectedTheme,
}: {
    selectedTheme: CollectionThemesTypes | null;
    setSelectedTheme: TSetState<CollectionThemesTypes | null>;
}) {
    const { t } = useTranslation('translation', {
        keyPrefix: 'form',
    });
    const options = useTranslateSelectOptions(collectionThemes, 'collectionThemes');
    const getValue = () =>
        options.find((option) => option.value === selectedTheme) || null;

    return (
        <div className="flex gap-4 mb-4">
            <Button
                className="hover:scale-125 transition-all"
                onClick={() => setSelectedTheme(null)}
            >
                <CloseIcon fontSize="small" />
            </Button>
            <Select
                value={getValue()}
                onChange={(value) =>
                    setSelectedTheme(value?.value as CollectionThemesTypes | null)
                }
                options={options}
                placeholder={t('collectionForm.themeSelectPlaceholder')}
                className="react-select-container react-select-styles min-w-56"
                classNamePrefix="react-select"
            />
        </div>
    );
}

export default ThemeSelect;
