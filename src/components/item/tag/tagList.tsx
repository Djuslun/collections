/* eslint-disable react/jsx-no-useless-fragment */
import { useGetAllTagsQuery } from 'store/api/tagApiSlice';
import Tag from './tag';

function TagList({ tagIds }: { tagIds: string[] }) {
    const { data: allTags, isSuccess } = useGetAllTagsQuery();
    const tags = allTags?.filter((tag) => tagIds.includes(tag._id)) || [];

    return (
        <>
            {isSuccess && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Tag tag={tag} key={tag._id} />
                    ))}
                </div>
            )}
        </>
    );
}

export default TagList;
