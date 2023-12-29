import { useTranslation } from 'react-i18next';

function GreetingSection() {
    const { t } = useTranslation('translation', {
        keyPrefix: 'mainPage.greetingSection',
    });

    return (
        <section className="py-4 grid md:grid-cols-3">
            <div className="col-start-1 col-end-3">
                <h1 className="text-2xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl mb-2">
                    {t('title')}
                </h1>
                <p className="lg:text-lg xl:text-2xl">{t('text')}</p>
            </div>
            <div className="bg-image md:h-[300px] lg:h-[400px] xl:h-[500px] hidden md:block" />
        </section>
    );
}

export default GreetingSection;
