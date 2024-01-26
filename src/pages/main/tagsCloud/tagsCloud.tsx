import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetAllTagsQuery } from 'store/api/tagApiSlice';
import Tag from 'components/item/tag/tag';
import { ITag } from 'ts/interfaces';

function TagsCloud() {
    const { data: tags, isSuccess } = useGetAllTagsQuery();
    const [visibleTags, setVisibleTags] = useState<ITag[]>([]);
    const { t } = useTranslation('translation', {
        keyPrefix: 'mainPage',
    });

    useEffect(() => {
        if (isSuccess) {
            setVisibleTags([...tags].sort(() => Math.random() - 0.5).slice(0, 6));
        }
    }, [isSuccess, tags]);

    return (
        <div>
            <h2 className="title">{t('tagsCloud')}</h2>
            <div className="flex flex-wrap gap-2 ">
                {isSuccess && visibleTags?.map((tag) => <Tag tag={tag} key={tag._id} />)}
            </div>
        </div>
    );
}

export default TagsCloud;
