import { useTranslation } from 'react-i18next';

function EmptyState({ translationKey }: { translationKey: string }) {
    const { t } = useTranslation('translation', {
        keyPrefix: 'emptyState',
    });

    return <p className="lg:text-lg xl:text-2xl mb-4">{t(translationKey)}</p>;
}

export default EmptyState;
