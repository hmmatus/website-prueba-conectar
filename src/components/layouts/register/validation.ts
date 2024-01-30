import { CustomFileObject } from "@/model/auth/register.model";
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
  image: yup.mixed()
  .required('File is required')
  .test('fileType', 'Invalid file type', (value) => {
    const fileValue = value as CustomFileObject | undefined;
        return fileValue && ['image/jpeg', 'image/png', 'image/gif'].includes(fileValue.type);
  })
  .test('fileSize', 'File size is too large', (value) => {
    const fileValue = value as CustomFileObject | undefined;
    return fileValue && fileValue.size <= 1024 * 1024; // 1MB
  })
});