import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';
import { useGetCollectionByIdQuery } from 'store/api/collectionApiSlice';
import { useGetItemsByCollectionIdQuery } from 'store/api/itemApiSlice';
import NewItemButton from 'pages/collection/newItemButton';
import CollectionInfo from 'components/collection/collectionInfo';
import DataRequired from 'components/dataRequired/dataRequiredWrapper';
import ItemTable from 'components/itemTable/itemTable';
import OwnerEntitiOnly from 'components/ownerEntityOnly/ownerEntityOnly';
import { Collection, Item } from 'ts/interfaces';
import Collapse from 'ui/collapse';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import CollectionActions from './collectionActions';

function CollectionPage() {
    const { user } = useAuth0();
    const { id } = useParams() as { id: string };
    const { data: collection, isLoading, isSuccess } = useGetCollectionByIdQuery(id);
    const {
        data: items,
        isLoading: isItemsLoading,
        isSuccess: isItemsSucces,
    } = useGetItemsByCollectionIdQuery(id);

    return (
        <LoaderWrapper isLoading={isLoading || isItemsLoading}>
            <Container>
                <DataRequired<Collection> data={collection} isSuccess={isSuccess}>
                    {(collection) => (
                        <>
                            <CollectionInfo collection={collection} />
                            <OwnerEntitiOnly
                                userId={user?.sub}
                                entitiId={collection.userId}
                            >
                                <Collapse>
                                    <CollectionActions
                                        collectionId={id}
                                        collection={collection}
                                    />
                                </Collapse>
                                <NewItemButton collection={collection} />
                            </OwnerEntitiOnly>
                        </>
                    )}
                </DataRequired>
                <DataRequired<Item[]> data={items} isSuccess={isItemsSucces}>
                    {(items) => <ItemTable items={items} />}
                </DataRequired>
            </Container>
        </LoaderWrapper>
    );
}

export default CollectionPage;
