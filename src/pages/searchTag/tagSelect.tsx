import { Button } from '@mui/base';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { ITag } from 'ts/interfaces';
import { TSetState } from 'ts/types';

function TagSelect({
    selectedTag,
    setSelectedTag,
    tags,
}: {
    selectedTag: string | null;
    setSelectedTag: TSetState<string | null>;
    tags: ITag[];
}) {
    const { t } = useTranslation('translation', {
        keyPrefix: 'form',
    });

    const getValue = () => tags.find((option) => option._id === selectedTag) || null;

    return (
        <div className="flex gap-4 mb-4">
            <Button
                className="hover:scale-125 transition-all"
                onClick={() => setSelectedTag(null)}
            >
                <CloseIcon fontSize="small" />
            </Button>
            <Select
                value={getValue()}
                onChange={(value) => setSelectedTag(value?._id as string | null)}
                options={tags}
                placeholder={t('collectionForm.themeSelectPlaceholder')}
                className="react-select-container react-select-styles min-w-56"
                classNamePrefix="react-select"
            />
        </div>
    );
}

export default TagSelect;
