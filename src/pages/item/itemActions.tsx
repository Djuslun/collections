import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';
import { Item } from 'ts/interfaces';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import useDeleteItem from './useDeleteItem';

function ItemActions({ item }: { item: Item }) {
    const { t } = useTranslation('translation', { keyPrefix: 'collection' });

    const navigate = useNavigate();
    const { handleDelete, isLoading } = useDeleteItem();

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Button
                onClick={() =>
                    navigate(`${ClientUrls.item}/${item._id}/edit`, {
                        state: item,
                    })
                }
                className="button"
            >
                {t('edit')}
            </Button>
            <Button onClick={() => handleDelete(item._id)} className="button">
                {t('delete')}
            </Button>
        </LoaderWrapper>
    );
}

export default ItemActions;
