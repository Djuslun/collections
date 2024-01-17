/* eslint-disable jsx-a11y/control-has-associated-label */
import SendIcon from '@mui/icons-material/Send';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

function CommentEditForm({
    handleSubmit,
}: {
    handleSubmit: (value: string) => Promise<void>;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'comment' });

    const initialValues = {
        comment: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                comment: Yup.string().min(1).trim().required('Requiered'),
            })}
            onSubmit={async (values, { resetForm, validateForm }) => {
                handleSubmit(values.comment);
                resetForm();
                validateForm(initialValues);
            }}
            validateOnMount
        >
            {({ isValid }) => (
                <Form className="relative top-0">
                    <Field
                        label=""
                        name="comment"
                        as="textarea"
                        id="comment"
                        placeholder={`${t('commentFormPlaceholder')}`}
                        className=" w-full min-h-20 max-h-40 p-2 input"
                    />
                    <button
                        type="submit"
                        className={`bg-transparent hover:bg-transparent absolute right-5 top-1/2 -translate-y-1/2 ${
                            isValid ? 'hover:scale-125 transition-all' : ''
                        }`}
                        disabled={!isValid}
                    >
                        <SendIcon
                            className={`${
                                isValid
                                    ? 'text-blue-600 dark:hover:fill-blue-400 hover:fill-blue-800 '
                                    : 'text-gray-400'
                            }`}
                        />
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default CommentEditForm;
