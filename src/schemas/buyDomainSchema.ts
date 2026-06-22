import * as Yup from 'yup';

export const domainRequestSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
    .trim(),

  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .max(100, 'Email must not exceed 100 characters')
    .trim(),

  contactNo: Yup.string()
    .required('Contact number is required')
    .matches(/^\+?\d{7,15}$/, 'Contact number must be between 7-15 digits with optional + prefix')
    .trim(),

  country: Yup.string().required('Country is required').trim(),

  offerPrice: Yup.number()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .transform((value): number | undefined => (isNaN(value) ? undefined : value))
    .required('Price must be required')
    .min(1, 'Price must be positive number')
    .max(1000000, 'Price cannot exceed 1,000,000')
    .typeError('Price must be a valid number'),
});
