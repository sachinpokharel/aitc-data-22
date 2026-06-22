import * as Yup from 'yup';

export const fullQuoteSchema = Yup.object({
  fullName: Yup.string()
    .required('Full name is required.')
    .matches(/^[a-zA-Z\s]*$/, 'Special characters are not allowed.'),
  workEmail: Yup.string().email('Please enter a valid email address.').required('Work email is required.'),
  companyName: Yup.string().notRequired(),
  primaryService: Yup.string().required('Please select a primary service.'),
  budgetRange: Yup.string().required('Please select a budget range.'),
  expectedTimeline: Yup.string().required('Please select an expected timeline.'),
  projectSummary: Yup.string().notRequired(),
});

export type QuoteFormData = Yup.InferType<typeof fullQuoteSchema>;

export const STEP_FIELDS: Record<number, (keyof QuoteFormData)[]> = {
  1: ['fullName', 'workEmail'],
  2: ['primaryService', 'budgetRange'],
  3: ['expectedTimeline'],
  4: [],
};
