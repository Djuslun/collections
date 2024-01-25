import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';

function CollectionTheme({ theme }: { theme: string }) {
    const navigate = useNavigate();
    const { t } = useTranslation('translation', {
        keyPrefix: 'collectionThemes',
    });
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        navigate(ClientUrls.collections, { state: theme });
    };

    return (
        <button
            type="button"
            onClick={(event) => handleClick(event)}
            className="bg-rose-400 inline-block px-2 p-1 rounded-sm mb-2 hover:scale-110 transition-all "
        >
            {t(theme)}
        </button>
    );
}

export default CollectionTheme;
