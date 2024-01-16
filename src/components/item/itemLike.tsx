import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { memo } from 'react';
import { Item } from 'ts/interfaces';
import useLikeItem from './useLikeItem';

function ItemLike({ data, userId = '' }: { data: Item; userId: string | undefined }) {
    const { likeItem, removeLike, likeClass, isLiked, likesCount } = useLikeItem(
        userId,
        data
    );

    return (
        <div className="flex gap-2">
            {isLiked ? (
                <FavoriteIcon
                    className={likeClass}
                    onClick={(event) => removeLike(event)}
                />
            ) : (
                <FavoriteBorderIcon
                    className={likeClass}
                    onClick={(event) => likeItem(event)}
                />
            )}
            {likesCount}
        </div>
    );
}

export default memo(ItemLike);
