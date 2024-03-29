import MDEditor from '@uiw/react-md-editor';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store/useRedux';
import { ClientUrls } from 'ts/enums';
import { Item } from 'ts/interfaces';
import ItemLike from './itemLike';

function ItemInfo({ item }: { item: Item }) {
    const { t } = useTranslation('translation', { keyPrefix: 'item' });
    const { user } = useAppSelector((store) => store.user);

    return (
        <section>
            <div className="info-section">
                <img src={item.imageUrl} alt={item.title} className="info-image" />
                <div>
                    <h2 className="text-3xl font-bold sm:text-4xl">{item.title}</h2>
                    <MDEditor.Markdown
                        className="md-marldown-styles"
                        source={item.description}
                        style={{ whiteSpace: 'pre-wrap' }}
                    />
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
                    <div>
                        <ItemLike data={item} userId={user?.sub} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemInfo;
