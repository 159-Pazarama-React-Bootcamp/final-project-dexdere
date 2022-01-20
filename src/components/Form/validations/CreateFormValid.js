import * as Yup from 'yup';

const CreateFormValid = Yup.object({
  name: Yup.string().required('Zorunlu alan'),
  surname: Yup.string().required('Zorunlu alan'),
  age: Yup.number().positive().integer().max(2).required('Zorunlu alan'),
  tcNo: Yup.number()
    .positive()
    .integer()
    .min(11)
    .max(11)
    .required('Zorunlu alan'),
  address: Yup.string().required('Zorunlu alan'),
  details: Yup.string().required('Zorunlu alan'),
  file: Yup.mixed(),
});

export { CreateFormValid };
