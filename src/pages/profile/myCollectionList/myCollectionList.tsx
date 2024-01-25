import { useTranslation } from 'react-i18next';
import CollectionList from 'components/collection/collectionList';
import { Collection } from 'ts/interfaces';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import useGetMyCollections from './useGetMyCollections';

function MyCollectionList() {
    const { t } = useTranslation('translation', {
        keyPrefix: 'profilePage',
    });
    const { collections, isLoading, isSuccess } = useGetMyCollections();

    return (
        <LoaderWrapper isLoading={isLoading}>
            <h2 className="title">{t('myCollection')}</h2>
            {isSuccess && <CollectionList collectionList={collections as Collection[]} />}
        </LoaderWrapper>
    );
}

export default MyCollectionList;
