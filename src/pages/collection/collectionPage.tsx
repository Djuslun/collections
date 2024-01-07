import { useParams } from 'react-router-dom';
import { useGetCollectionByIdQuery } from 'store/api/collectionApiSlice';
import CollectionInfo from 'components/collection/collectionInfo';
import DataRequired from 'components/dataRequired/dataRequiredWrapper';
import { Collection } from 'ts/interfaces';
import Collapse from 'ui/collapse';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import CollectionActions from './collectionActions';

function CollectionPage() {
    const { id } = useParams();
    const {
        data: collection,
        isLoading,
        isSuccess,
    } = useGetCollectionByIdQuery(id as string);

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Container>
                <DataRequired<Collection> data={collection} isSuccess={isSuccess}>
                    {(collection) => (
                        <>
                            <CollectionInfo collection={collection} />
                            <Collapse>
                                <CollectionActions
                                    collectionId={id as string}
                                    collection={collection}
                                />
                            </Collapse>
                        </>
                    )}
                </DataRequired>
            </Container>
        </LoaderWrapper>
    );
}

export default CollectionPage;
