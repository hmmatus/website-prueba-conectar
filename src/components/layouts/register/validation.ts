import * as yup  from "yup";
export const registerSchema = yup.object({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required("Must be a valid email"),
  phone: yup.string().required(),
  idNumber: yup.string().required(),
  idType: yup.string().required(),
  department: yup.string().required(),
  city: yup.string().required(),
  address:yup.string().required(),
  monthRevenue: yup.number().required(),
});