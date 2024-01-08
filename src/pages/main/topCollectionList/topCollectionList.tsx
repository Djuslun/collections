import { useGetCollectionsQuery } from 'store/api/collectionApiSlice';
import CollectionList from 'components/collection/collectionList';
import LoaderWrapper from 'ui/loader/loaderWrapper';

function TopCollectionList() {
    const { data: collections, isLoading, isSuccess } = useGetCollectionsQuery();
    return (
        <LoaderWrapper isLoading={isLoading}>
            <h2 className="text-2xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl mb-2">
                Самые большие коллекции
            </h2>
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
