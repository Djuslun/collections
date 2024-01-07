import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Min 2 char').trim().required('Requiered'),
    description: Yup.string().min(0, ''),
    collectionTheme: Yup.string().required('Requiered'),
    customFields: Yup.array(),
});

export default validationSchema;
