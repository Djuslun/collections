import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useCreateTagMutation } from 'store/api/tagApiSlice';
import useErrorHandle from 'hooks/useErrorHadle';
import { ITag } from 'ts/interfaces';

const useCreateTag = (options: ITag[] | undefined) => {
    const [createTag, { isLoading: isTagsCreating }] = useCreateTagMutation();
    const handleError = useErrorHandle();

    const handleCreateTags = async (tags: string[]) => {
        const newTags: string[] = [];
        const oldTags: string[] = [];
        tags.forEach((tag) => {
            if (!options?.some((startTags) => startTags._id === tag)) {
                newTags.push(tag);
            } else {
                oldTags.push(tag);
            }
        });
        const createdTag = newTags.length
            ? ((await createTag(newTags)
                  .unwrap()
                  .catch((e: FetchBaseQueryError) => handleError(e))) as ITag[])
            : [];

        return [...oldTags, ...createdTag.map((tag) => tag._id)];
    };

    return { handleCreateTags, isTagsCreating };
};

export default useCreateTag;
