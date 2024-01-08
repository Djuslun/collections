import { useTranslation } from 'react-i18next';
import { useGetCollectionsQuery } from 'store/api/collectionApiSlice';
import CollectionList from 'components/collection/collectionList';
import LoaderWrapper from 'ui/loader/loaderWrapper';

function TopCollectionList() {
    const { t } = useTranslation('translation', {
        keyPrefix: 'mainPage',
    });
    const { data: collections, isLoading, isSuccess } = useGetCollectionsQuery();
    return (
        <LoaderWrapper isLoading={isLoading}>
            <h2 className="title">{t('topCollection')}</h2>
            {isSuccess && (
                <CollectionList
                    collectionList={collections}
                    itemStyle="lg:last:hidden xl:last:block"
                />
            )}
        </LoaderWrapper>
    );
}

export default TopCollectionList;
