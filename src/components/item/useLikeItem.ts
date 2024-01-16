import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useUpdateItemLikesMutation } from 'store/api/itemApiSlice';
import { Item } from 'ts/interfaces';

const useLikeItem = (userId: string | undefined, data: Item | undefined) => {
    const [likesCount, setLikesCount] = useState<number>(data?.likes?.length || 0);
    const [isLiked, setIsLiked] = useState<boolean>(
        (userId && data?.likes.includes(userId)) || false
    );
    const [updateItem, { isLoading: isLikeLoading }] = useUpdateItemLikesMutation();

    useEffect(() => {
        setIsLiked((userId && data?.likes.includes(userId)) || false);
        setLikesCount(data?.likes?.length || 0);
    }, [userId, data]);

    const likeClass = classNames(
        'text-red-500',
        { 'cursor-wait': isLikeLoading },
        { 'hover:scale-110 transition-all cursor-pointer': userId },
        { 'fill-red-500': isLiked }
    );

    const likeItem = async (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        if (data && userId && !isLikeLoading) {
            setIsLiked(true);
            setLikesCount((count) => count + 1);
            const newLikesList = [...data.likes, userId];
            await updateItem({ id: data._id, likesArray: newLikesList });
        }
    };

    const removeLike = async (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        if (data && userId && !isLikeLoading) {
            setIsLiked(false);
            setLikesCount((count) => count - 1);
            const newLikesList = data.likes.filter((id) => id !== userId);
            await updateItem({ id: data._id, likesArray: newLikesList });
        }
    };

    return { likeItem, removeLike, likeClass, isLiked, likesCount };
};

export default useLikeItem;
