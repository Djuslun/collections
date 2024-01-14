import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';
import { Collection } from 'ts/interfaces';

function NewItemButton({ collection }: { collection: Collection }) {
    const { t } = useTranslation('translation', { keyPrefix: 'collectionPage' });

    return (
        <Link
            className="button border-with-shadow inline-block mb-4"
            to={ClientUrls.newItem}
            state={collection}
        >
            {t('newItem')}
        </Link>
    );
}

export default NewItemButton;
