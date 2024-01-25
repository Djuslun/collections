import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetAllCollectionsQuery } from 'store/api/collectionApiSlice';
import CollectionList from 'components/collection/collectionList';
import { CollectionThemesTypes } from 'utils/consts';
import { Collection } from 'ts/interfaces';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import ThemeSelect from './themeSelect';

function CollectionsPage() {
    const { state } = useLocation();
    const { data: collections, isLoading, isSuccess } = useGetAllCollectionsQuery();
    const [selectedTheme, setSelectedTheme] = useState<CollectionThemesTypes | null>(
        (state as CollectionThemesTypes) || null
    );

    const filteredData =
        (collections &&
            collections.filter((item) =>
                selectedTheme ? item.collectionTheme === selectedTheme : collections
            )) ||
        ([] as Collection[]);

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Container>
                <ThemeSelect
                    selectedTheme={selectedTheme}
                    setSelectedTheme={setSelectedTheme}
                />
                {isSuccess && <CollectionList collectionList={filteredData} />}
            </Container>
        </LoaderWrapper>
    );
}

export default CollectionsPage;
