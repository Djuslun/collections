import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useCreateTagMutation, useGetAllTagsQuery } from 'store/api/tagApiSlice';
import CustomFieldForItem from 'components/formControl/customField/customFieldsItemForm';
import FormikCreatebleSelect from 'components/formControl/formikCreatebleSelect';
import FormikDropZone from 'components/formControl/formikDropZone';
import FormikField from 'components/formControl/formikField';
import FormikInput from 'components/formControl/formikInput';
import FormikMDEditor from 'components/formControl/formikMDEditor';
import {
    ICreatebleSelectFormikField,
    IInputFormikField,
    TBaseComponent,
    TCreatableSelectComponent,
} from 'components/formControl/types';
import { ItemFormValues, Tag } from 'ts/interfaces';
import { THandleSubmitItemForm } from 'ts/types';
import FormButtons from 'ui/formButtons/formButtons';
import Loader from 'ui/loader/loader';
import LoaderWrapper from 'ui/loader/loaderWrapper';
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

    const { data: options, isLoading: isTagsLoading } = useGetAllTagsQuery();
    const [createTag, { isLoading: isTagsCreating }] = useCreateTagMutation();

    const handleCreateTags = async (tags: string[]) => {
        const newTags: string[] = [];
        const oldTags: string[] = [];
        tags.forEach((tag) => {
            if (!options?.some((startTags) => startTags._id === tag)) {
                newTags.push(tag);
            } else {
                oldTags.push(tag);
            }
        });
        const createdTag = await createTag(newTags).unwrap();
        return [...oldTags, ...createdTag.map((tag) => tag._id)];
    };

    return (
        <LoaderWrapper isLoading={isTagsLoading}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    const tags = await handleCreateTags(values.tags);
                    handleSubmit({ ...values, tags });
                }}
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
                            <FormikField<
                                ICreatebleSelectFormikField<TCreatableSelectComponent>
                            >
                                label={t('itemForm.tags')}
                                name="tags"
                                id="tags"
                                component={FormikCreatebleSelect}
                                options={(options as Tag[]) || []}
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
            <Loader isLoading={isLoading || isTagsCreating} />
        </LoaderWrapper>
    );
}

export default ItemEditForm;
