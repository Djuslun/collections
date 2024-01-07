import { useGetAllCollectionsQuery } from 'store/api/collectionApiSlice';
import CollectionList from 'components/collection/collectionList';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';

function CollectionsPage() {
    const { data: collections, isLoading, isSuccess } = useGetAllCollectionsQuery();

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Container>
                {isSuccess && <CollectionList collectionList={collections} />}
            </Container>
        </LoaderWrapper>
    );
}

export default CollectionsPage;
