import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';
import { useGetItemByIdQuery } from 'store/api/itemApiSlice';
import DataRequired from 'components/dataRequired/dataRequiredWrapper';
import ItemInfo from 'components/item/itemInfo';
import OwnerEntitiOnly from 'components/ownerEntityOnly/ownerEntityOnly';
import { Item } from 'ts/interfaces';
import Collapse from 'ui/collapse';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import ItemActions from './itemActions';

function ItemPage() {
    const { id } = useParams() as { id: string };
    const { data: item, isLoading, isSuccess } = useGetItemByIdQuery(id);
    const { user } = useAuth0();

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Container>
                <DataRequired<Item> data={item} isSuccess={isSuccess}>
                    {(item) => (
                        <>
                            <ItemInfo item={item} />
                            <OwnerEntitiOnly userId={user?.sub} entitiId={item.userId}>
                                <Collapse>
                                    <ItemActions item={item} />
                                </Collapse>
                            </OwnerEntitiOnly>
                        </>
                    )}
                </DataRequired>
            </Container>
        </LoaderWrapper>
    );
}

export default ItemPage;
