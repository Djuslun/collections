import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetAllTagsQuery } from 'store/api/tagApiSlice';
import { ITag } from 'ts/interfaces';
import Container from 'ui/container';
import SearchByTagItemTable from './searchByTagItemTable';
import TagSelect from './tagSelect';

function SearchTag() {
    const { state } = useLocation();
    const tag = state as ITag;
    const [selectedTag, setSelectedTag] = useState<string | null>(tag._id || null);
    const { data: tags, isSuccess } = useGetAllTagsQuery();

    return (
        <Container>
            {isSuccess && (
                <TagSelect
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    tags={tags}
                />
            )}
            {selectedTag && <SearchByTagItemTable tagId={selectedTag} />}
        </Container>
    );
}

export default SearchTag;
