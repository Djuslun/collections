import { useParams } from 'react-router-dom';
import { useGetCollectionByIdQuery } from 'store/api/collectionApiSlice';
import { useGetItemsByCollectionIdQuery } from 'store/api/itemApiSlice';
import { useAppSelector } from 'store/useRedux';
import NewItemButton from 'pages/collection/newItemButton';
import CollectionInfo from 'components/collection/collectionInfo';
import DataRequired from 'components/dataRequired/dataRequiredWrapper';
import ItemTableGrid from 'components/itemTable/itemTableGrid';
import OwnerEntitiOnly from 'components/ownerEntityOnly/ownerEntityOnly';
import { Collection, Item } from 'ts/interfaces';
import Collapse from 'ui/collapse';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import CollectionActions from './collectionActions';

function CollectionPage() {
    const { user, isAdmin } = useAppSelector((store) => store.user);
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
                                isAdmin={isAdmin}
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
                    {(items) => <ItemTableGrid items={items} />}
                </DataRequired>
            </Container>
        </LoaderWrapper>
    );
}

export default CollectionPage;
