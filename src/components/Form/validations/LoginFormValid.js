import * as Yup from 'yup';

const LoginFormValid = Yup.object({
  username: Yup.string()
    .matches('kodluyoruz', 'wrong username')
    .required('required'),
  password: Yup.string()
    .matches('bootcamp159', 'wrong password')
    .required('required'),
});

export { LoginFormValid };
