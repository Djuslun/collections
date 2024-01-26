import { useTranslation } from 'react-i18next';
import TagsCloud from './tagsCloud/tagsCloud';

function GreetingSection() {
    const { t } = useTranslation('translation', {
        keyPrefix: 'mainPage.greetingSection',
    });

    return (
        <section className=" grid md:grid-cols-3">
            <div className="col-start-1 col-end-3 flex flex-col justify-between">
                <div>
                    <h1 className="title">{t('title')}</h1>
                    <p className="lg:text-lg xl:text-2xl">{t('text')}</p>
                </div>
                <TagsCloud />
            </div>
            <div className="bg-image md:h-[300px] lg:h-[400px] xl:h-[500px] hidden md:block" />
        </section>
    );
}

export default GreetingSection;
