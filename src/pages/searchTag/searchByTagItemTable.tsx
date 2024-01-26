import { useEffect } from 'react';
import { useLazyGetItemsByTagIdQuery } from 'store/api/itemApiSlice';
import ItemTable from 'components/item/itemTable/itemTable';
import LoaderWrapper from 'ui/loader/loaderWrapper';

function SearchByTagItemTable({ tagId }: { tagId: string }) {
    const [getItem, { isLoading, data: items }] = useLazyGetItemsByTagIdQuery();

    useEffect(() => {
        getItem(tagId);
    }, [tagId]);

    return (
        <LoaderWrapper isLoading={isLoading}>
            {items && <ItemTable items={items} />}
        </LoaderWrapper>
    );
}

export default SearchByTagItemTable;
