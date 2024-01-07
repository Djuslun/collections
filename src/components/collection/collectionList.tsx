import { Collection } from 'ts/interfaces';
import CollectionCard from './collectionCard';

function CollectionList({ collectionList }: { collectionList: Collection[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {collectionList.map((collection) => (
                <CollectionCard key={collection._id} collection={collection} />
            ))}
        </div>
    );
}

export default CollectionList;
