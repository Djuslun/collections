import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';
import { Collection } from 'ts/interfaces';
import CollectionTheme from './collectionTheme';

function CollectionCard({ collection }: { collection: Collection }) {
    const date = new Date(collection.createdAt).toLocaleString().split(',');
    const { t } = useTranslation('translation', { keyPrefix: 'collection' });

    return (
        <Link to={`${ClientUrls.collection}/${collection._id}`}>
            <div className="border-with-shadow flex flex-col h-full overflow-hidden">
                <div className="border-b dark:border-gray-500 border-gray-300 ">
                    <img
                        src={collection.imageUrl}
                        alt="collection_image"
                        className="w-full object-contain aspect-square"
                    />
                </div>
                <div className="">
                    <div className="p-2">
                        <h2 className="text-3xl font-bold mb-1">{collection.title}</h2>
                        <CollectionTheme theme={collection.collectionTheme} />
                        <p>
                            {`${t('itemCount')}`}: {collection.itemCount}
                        </p>
                    </div>

                    <div className="border-t dark:border-gray-500 border-gray-300 text-sm p-2">
                        <div>
                            {`${t('createdBy')}`}{' '}
                            <span className="text-blue-500">{`${collection.createdBy}`}</span>
                        </div>
                        <div>{`${date[0]} ${t('createdAt')} ${date[1]}`}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CollectionCard;
