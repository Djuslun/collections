import { Button } from '@mui/base';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
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
import Loader from 'ui/loader/loader';

function CollectiomEditForm({
    initialValues,
    handleSubmit,
    userId,
    createdBy,
    isLoading,
}: {
    initialValues: CollectionFormValues;
    handleSubmit: THandleSubmitCollectionForm;
    userId: string;
    createdBy: string;
    isLoading: boolean;
}) {
    const { t } = useTranslation('translation', {
        keyPrefix: 'form',
    });
    const options = useTranslateSelectOptions(collectionThemes, 'collectionThemes');

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    title: Yup.string().min(2, 'Min 2 char').trim().required('Requiered'),
                    description: Yup.string().min(0, ''),
                    collectionTheme: Yup.string().required('Requiered'),
                    customFields: Yup.array(),
                })}
                onSubmit={(values) => handleSubmit(values, userId, createdBy)}
            >
                <Form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-4">
                            <FormikField<IInputFormikField<TBaseComponent>>
                                label={t('collectionForm.title')}
                                name="title"
                                id="title"
                                component={FormikInput}
                                placeholder={t('collectionForm.titlePlaceholder')}
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
                    <div className="flex gap-4 justify-center">
                        <Button type="submit" className="button w-36">
                            {t('cancel')}
                        </Button>
                        <Button type="submit" className="button w-36">
                            {t('confirm')}
                        </Button>
                    </div>
                </Form>
            </Formik>
            <Loader isLoading={isLoading} />
        </Container>
    );
}

export default CollectiomEditForm;
