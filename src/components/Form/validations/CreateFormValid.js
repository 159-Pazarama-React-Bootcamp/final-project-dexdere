import * as Yup from 'yup';

const CreateFormValid = Yup.object({
  name: Yup.string().min(3).required('required'),
  surname: Yup.string().min(3).required('required'),
  age: Yup.number()
    .typeError('must be only digits')
    .positive()
    .integer()
    .max(99)
    .required('required'),
  tcNo: Yup.string()
    .matches(/^[0-9]+$/, 'must be only digits')
    .length(11, 'must be exactly 11 characters')
    .required('required'),
  address: Yup.string().required('required'),
  details: Yup.string().required('required'),
  file: Yup.mixed(),
});

export { CreateFormValid };
