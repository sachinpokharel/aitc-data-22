import * as Yup from 'yup';

const commonSchema = Yup.object().shape({
  name: Yup.string()
    .required('Full Name is required.')
    .matches(/^[a-zA-Z\s]*$/, 'Special Characters not supported.'),
  email: Yup.string().email().required('Email is required.'),
  contact: Yup.string()
    .required('Contact Number is required.')
    .matches(
      /^(?:(?:\+)?\d{1,3}(?:\s|-|\.)?)?\(?\d{3}\)?(?:\s|-|\.)?\d{3}(?:\s|-|\.)?\d{3,4}$/,
      'Contact number must be valid.'
    ),
  message: Yup.string().trim().required('Message is required.'),
});

export const generalEnquirySchema = commonSchema.shape({
  subject: Yup.string().trim().required('Subject  is required.'),
  document: Yup.mixed()
    .nullable() // Allows the field to be null or undefined
    .notRequired() // Makes the field optional
    .test('fileType', 'File type not supported. Allowed types are PDF, DOC, DOCX.', (value) => {
      if (value instanceof FileList) {
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        return value[0]?.type ? allowedTypes.includes(value[0].type) : true;
      }
      return true; // No file is considered valid
    })
    .test('fileSize', 'File size is too large. Maximum allowed size is 5 MB.', (value) => {
      if (value instanceof FileList) {
        const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
        return value[0]?.size ? value[0].size <= maxSize : true;
      }
      return true; // No file is considered valid
    }),
});

export const serviceSchema = commonSchema.shape({
  serviceId: Yup.string().required('Service is required.').min(1, 'At least one service is required.'),
  document: Yup.mixed()
    .nullable() // Allows the field to be null or undefined
    .notRequired() // Makes the field optional
    .test('fileType', 'File type not supported. Allowed types are PDF, DOC, DOCX.', (value) => {
      if (value instanceof FileList) {
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        return value[0]?.type ? allowedTypes.includes(value[0].type) : true;
      }
      return true; // No file is considered valid
    })
    .test('fileSize', 'File size is too large. Maximum allowed size is 5 MB.', (value) => {
      if (value instanceof FileList) {
        const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
        return value[0]?.size ? value[0].size <= maxSize : true;
      }
      return true; // No file is considered valid
    }),
});

export const consulatationSchema = commonSchema.shape({
  slotId: Yup.string().required('Please select available slot.'),
});
