import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetItemsBySearchQueryQuery } from 'store/api/searchApiSlice';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import SearchTabs from './searchTabs';

function SearchPage() {
    const { state } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { isFetching, data: foundedItems } = useGetItemsBySearchQueryQuery(
        state as string,
        { skip: !state }
    );

    useEffect(() => {
        setIsLoading(isFetching);
    }, [state, foundedItems]);

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Container>{foundedItems && <SearchTabs items={foundedItems} />}</Container>
        </LoaderWrapper>
    );
}

export default SearchPage;
