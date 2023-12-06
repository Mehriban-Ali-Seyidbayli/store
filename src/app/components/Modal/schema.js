import * as yup from 'yup';

export const form_schema = yup.object().shape({
  name: yup.string().required(),
  country: yup.string().required(),
  city: yup.string().required(),
  adress: yup.string().required(),
  phone: yup.string().required(),
  discount_rate: yup.number().min(0).max(100).required(),
  premium_rate: yup.number().min(0).max(100).required(),
  description: yup.string().required(),
});
