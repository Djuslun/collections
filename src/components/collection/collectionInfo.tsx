import MDEditor from '@uiw/react-md-editor';
import { useTranslation } from 'react-i18next';
import { Collection } from 'ts/interfaces';

function CollectionInfo({ collection }: { collection: Collection }) {
    const { t } = useTranslation('translation', { keyPrefix: 'collection' });

    return (
        <section className="info-section">
            <img
                src={collection.imageUrl}
                alt={collection.title}
                className="info-image"
            />
            <div>
                <h2 className="text-3xl font-bold sm:text-4xl">{collection.title}</h2>
                <MDEditor.Markdown
                    className="md-marldown-styles"
                    source={collection.description}
                    style={{ whiteSpace: 'pre-wrap' }}
                />
                <div>
                    {`${t('createdBy')}`}{' '}
                    <span className="text-blue-500">{`${collection.createdBy}`}</span>
                </div>
            </div>
        </section>
    );
}

export default CollectionInfo;
