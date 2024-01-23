import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import CustomFieldEditForm from 'components/formControl/customField/customFieldEditForm';
import FormikDropZone from 'components/formControl/formikDropZone';
import FormikField from 'components/formControl/formikField';
import FormikInput from 'components/formControl/formikInput';
import FormikMDEditor from 'components/formControl/formikMDEditor';
import FormikSelect from 'components/formControl/formikSelect';
import {
    IInputFormikField,
    ISelectFormikField,
    TBaseComponent,
    TSelectComponent,
} from 'components/formControl/types';
import { collectionThemes } from 'utils/consts';
import useTranslateSelectOptions from 'hooks/useTranslateSelectOptions';
import { CollectionFormValues } from 'ts/interfaces';
import { THandleSubmitCollectionForm } from 'ts/types';
import Container from 'ui/container';
import FormButtons from 'ui/formButtons/formButtons';
import Loader from 'ui/loader/loader';
import useValidationSchema from './validationShema';

function CollectiomEditForm({
    initialValues,
    handleSubmit,
    isLoading,
}: {
    initialValues: CollectionFormValues;
    handleSubmit: THandleSubmitCollectionForm;
    isLoading: boolean;
}) {
    const { t } = useTranslation('translation', {
        keyPrefix: 'form',
    });
    const options = useTranslateSelectOptions(collectionThemes, 'collectionThemes');
    const validationSchema = useValidationSchema();

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                <Form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-1">
                            <FormikField<IInputFormikField<TBaseComponent>>
                                label={t('collectionForm.title')}
                                name="title"
                                id="title"
                                component={FormikInput}
                                placeholder={t('titlePlaceholder')}
                            />
                            <FormikField<ISelectFormikField<TSelectComponent>>
                                label={t('collectionForm.theme')}
                                name="collectionTheme"
                                id="collectionTheme"
                                component={FormikSelect}
                                options={options}
                                placeholder={t('collectionForm.themeSelectPlaceholder')}
                            />
                            <FormikField<IInputFormikField<TBaseComponent>>
                                label={t('collectionForm.description')}
                                name="description"
                                id="description"
                                component={FormikMDEditor}
                            />
                            <FormikField<IInputFormikField<TBaseComponent>>
                                label={t('collectionForm.image')}
                                name="image"
                                id="image"
                                component={FormikDropZone}
                            />
                        </div>
                        <FormikField<IInputFormikField<TBaseComponent>>
                            label={t('collectionForm.customFields')}
                            name="customFields"
                            id="customFields"
                            component={CustomFieldEditForm}
                        />
                        <div />
                    </div>
                    <FormButtons />
                </Form>
            </Formik>
            <Loader isLoading={isLoading} />
        </Container>
    );
}

export default CollectiomEditForm;
