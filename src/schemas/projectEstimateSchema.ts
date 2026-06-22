import * as Yup from 'yup';

export const estimateContactSchema = Yup.object({
  full_name: Yup.string()
    .required('Full name is required.')
    .matches(/^[a-zA-Z\s]*$/, 'Special characters are not allowed.'),
  email: Yup.string().email('Please enter a valid email address.').required('Email is required.'),
});

export type EstimateContactData = Yup.InferType<typeof estimateContactSchema>;
