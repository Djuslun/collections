import { useAuth0 } from '@auth0/auth0-react';
import MDEditor from '@uiw/react-md-editor';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';
import { Item } from 'ts/interfaces';
import ItemCustomField from './itemCustomField';
import ItemLike from './itemLike';

function ItemInfo({ item }: { item: Item }) {
    const { t } = useTranslation('translation', { keyPrefix: 'item' });
    const { user } = useAuth0();
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
            <ul className="flex flex-col gap-2 border-y border-gray-400 py-2">
                {item.customFields.map((field) => (
                    <li key={field.id}>
                        <ItemCustomField {...field} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ItemInfo;
