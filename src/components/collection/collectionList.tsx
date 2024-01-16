/* eslint-disable react/jsx-no-useless-fragment */
import EmptyState from 'components/emptyStates/emptyState';
import { Collection } from 'ts/interfaces';
import CollectionCard from './collectionCard';

function CollectionList({
    collectionList,
    itemStyle = '',
}: {
    collectionList: Collection[];
    itemStyle?: string;
}): JSX.Element {
    return (
        <>
            {collectionList.length ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {collectionList.map((collection) => (
                        <li key={collection._id} className={itemStyle}>
                            <CollectionCard collection={collection} />
                        </li>
                    ))}
                </ul>
            ) : (
                <EmptyState translationKey="collection" />
            )}
        </>
    );
}

export default CollectionList;
