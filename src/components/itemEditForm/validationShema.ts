import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string()
        .min(3, 'Min 3 char')
        .max(30, `Max 30 char`)
        .trim()
        .required('Requiered'),
    description: Yup.string().min(0, ''),
    // tags: Yup.array().min(1),
    customFields: Yup.array(),
});

export default validationSchema;
