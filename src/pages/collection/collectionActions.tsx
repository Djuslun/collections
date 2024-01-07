import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';
import { Collection } from 'ts/interfaces';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import useDeleteCollection from './useDeleteCollection';

function CollectionActions({
    collectionId,
    collection,
}: {
    collectionId: string;
    collection: Collection;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'collection' });

    const navigate = useNavigate();
    const { handleDelete, isLoading } = useDeleteCollection();

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Button
                onClick={() =>
                    navigate(`${ClientUrls.collection}/${collectionId}/edit`, {
                        state: collection,
                    })
                }
                className="button"
            >
                {t('edit')}
            </Button>
            <Button onClick={() => handleDelete(collectionId)} className="button">
                {t('delete')}
            </Button>
        </LoaderWrapper>
    );
}

export default CollectionActions;
