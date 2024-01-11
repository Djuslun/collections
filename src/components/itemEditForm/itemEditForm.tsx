import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import CustomFieldForItem from 'components/formControl/customField/customFieldsItemForm';
import FormikCreatebleSelect from 'components/formControl/formikCreatebleSelect';
import FormikDropZone from 'components/formControl/formikDropZone';
import FormikField from 'components/formControl/formikField';
import FormikInput from 'components/formControl/formikInput';
import FormikMDEditor from 'components/formControl/formikMDEditor';
import {
    IInputFormikField,
    ISelectFormikField,
    TBaseComponent,
    TSelectComponent,
} from 'components/formControl/types';
import { collectionThemes } from 'utils/consts';
import useTranslateSelectOptions from 'hooks/useTranslateSelectOptions';
import { ItemFormValues } from 'ts/interfaces';
import { THandleSubmitItemForm } from 'ts/types';
import FormButtons from 'ui/formButtons/formButtons';
import Loader from 'ui/loader/loader';
import validationSchema from './validationShema';

function ItemEditForm({
    initialValues,
    handleSubmit,
    isLoading,
}: {
    initialValues: ItemFormValues;
    handleSubmit: THandleSubmitItemForm;
    isLoading: boolean;
}) {
    const { t } = useTranslation('translation', {
        keyPrefix: 'form',
    });
    const options = useTranslateSelectOptions(collectionThemes, 'collectionThemes');

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                <Form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-4">
                            <FormikField<IInputFormikField<TBaseComponent>>
                                label={t('itemForm.title')}
                                name="title"
                                id="title"
                                component={FormikInput}
                                placeholder={t('titlePlaceholder')}
                            />
                            <FormikField<ISelectFormikField<TSelectComponent>>
                                label={t('itemForm.tags')}
                                name="collectionTheme"
                                id="collectionTheme"
                                component={FormikCreatebleSelect}
                                options={options}
                                placeholder={t('itemForm.tagsPlaceholder')}
                            />
                            <FormikField<IInputFormikField<TBaseComponent>>
                                label={t('itemForm.description')}
                                name="description"
                                id="description"
                                component={FormikMDEditor}
                            />
                            <FormikField<IInputFormikField<TBaseComponent>>
                                label={t('itemForm.image')}
                                name="image"
                                id="image"
                                component={FormikDropZone}
                            />
                        </div>
                        <FormikField<IInputFormikField<TBaseComponent>>
                            label={t('collectionForm.customFields')}
                            name="customFields"
                            id="customFields"
                            component={CustomFieldForItem}
                        />
                        <div />
                    </div>
                    <FormButtons />
                </Form>
            </Formik>
            <Loader isLoading={isLoading} />
        </>
    );
}

export default ItemEditForm;
