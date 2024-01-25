import { useTranslation } from 'react-i18next';

interface ISearchInput {
    value: string;
    handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ handleSearchInputChange, value }: ISearchInput) {
    const { t } = useTranslation('translation', { keyPrefix: 'search' });

    return (
        <input
            type="text"
            className="input p-2 min-w-52 h-11 "
            value={value}
            onChange={handleSearchInputChange}
            placeholder={t('searchInputPlaceholder')}
        />
    );
}

export default SearchInput;
