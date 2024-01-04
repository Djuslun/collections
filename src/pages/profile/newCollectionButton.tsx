import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';

function NewCollectionButton() {
    const { t } = useTranslation('translation', { keyPrefix: 'profilePage' });

    return (
        <Link className="button border-with-shadow" to={ClientUrls.newCollection}>
            {t('new-collection')}
        </Link>
    );
}

export default NewCollectionButton;
