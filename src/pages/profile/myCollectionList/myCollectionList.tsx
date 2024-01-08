import { useTranslation } from 'react-i18next';
import { useGetCollectionsQuery } from 'store/api/collectionApiSlice';
import CollectionList from 'components/collection/collectionList';
import LoaderWrapper from 'ui/loader/loaderWrapper';

function MyCollectionList() {
    const { t } = useTranslation('translation', {
        keyPrefix: 'profilePage',
    });
    const { data: collections, isLoading, isSuccess } = useGetCollectionsQuery();

    return (
        <LoaderWrapper isLoading={isLoading}>
            <h2 className="title">{t('myCollection')}</h2>
            {isSuccess && <CollectionList collectionList={collections} />}
        </LoaderWrapper>
    );
}

export default MyCollectionList;
