import { useTranslation } from 'react-i18next';
import { useGetRecentItemsQuery } from 'store/api/itemApiSlice';
import ItemTable from 'components/item/itemTable/itemTable';
import LoaderWrapper from 'ui/loader/loaderWrapper';

function RecentItemTable() {
    const { data: items, isLoading, isSuccess } = useGetRecentItemsQuery();
    const { t } = useTranslation('translation', {
        keyPrefix: 'mainPage',
    });
    return (
        <LoaderWrapper isLoading={isLoading}>
            <h2 className="title">{t('recentItems')}</h2>
            {isSuccess && <ItemTable items={items} />}
        </LoaderWrapper>
    );
}

export default RecentItemTable;
