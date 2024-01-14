import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';
import { Item } from 'ts/interfaces';

function ItemInfo({ item }: { item: Item }) {
    const { t } = useTranslation('translation', { keyPrefix: 'item' });

    return (
        <section className="info-section">
            <img src={item.imageUrl} alt={item.title} className="info-image" />
            <div>
                <h2 className="text-3xl font-bold sm:text-4xl">{item.title}</h2>
                <div>
                    {`${t('createdBy')}`}{' '}
                    <span className="text-blue-500">{`${item.createdBy}`}</span>
                </div>
                <div>
                    {`${t('fromCollection')}`}{' '}
                    <Link
                        className="text-blue-500"
                        to={`${ClientUrls.collection}/${item.collectionId}`}
                    >{`${item.collectionTitle}`}</Link>
                </div>
            </div>
        </section>
    );
}

export default ItemInfo;
