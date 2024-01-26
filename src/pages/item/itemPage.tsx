import { useParams } from 'react-router-dom';
import { useGetItemByIdQuery } from 'store/api/itemApiSlice';
import { useAppSelector } from 'store/useRedux';
import DataRequired from 'components/dataRequired/dataRequiredWrapper';
import ItemCustomFieldList from 'components/item/itemCustomFields/itemCustomFieldList';
import ItemInfo from 'components/item/itemInfo';
import TagList from 'components/item/tag/tagList';
import OwnerEntitiOnly from 'components/ownerEntityOnly/ownerEntityOnly';
import { Item } from 'ts/interfaces';
import Collapse from 'ui/collapse';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import ItemActions from './itemActions';
import ItemCommentForm from './itemCommentForm';
import ItemCommentList from './itemCommentList';

function ItemPage() {
    const { id } = useParams() as { id: string };
    const { data: item, isLoading, isSuccess } = useGetItemByIdQuery(id);
    const { user, isAdmin } = useAppSelector((store) => store.user);

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Container>
                <DataRequired<Item> data={item} isSuccess={isSuccess}>
                    {(item) => (
                        <>
                            <ItemInfo item={item} />
                            <TagList tagIds={item.tags} />
                            <ItemCustomFieldList customFields={item.customFields} />
                            <ItemCommentList itemId={id} />
                            <OwnerEntitiOnly
                                userId={user?.sub}
                                entitiId={item.userId}
                                isAdmin={isAdmin}
                            >
                                <Collapse>
                                    <ItemActions item={item} />
                                </Collapse>
                            </OwnerEntitiOnly>
                        </>
                    )}
                </DataRequired>
                <ItemCommentForm
                    isAuthenticated={!!user?.sub}
                    itemId={item?._id || ''}
                    user={user}
                />
            </Container>
        </LoaderWrapper>
    );
}

export default ItemPage;
