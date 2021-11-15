import * as Yup from 'yup'

const messages = {
  email: 'Please enter a valid email address.',
  password: 'At least 8 characters.',
  required: 'This field is required.',
  minTotalTime: 'At least 0 hours',
  maxTotalTime: 'At maximun 24 hours',
}

export const UserSchema = Yup.object().shape({
    username: Yup.string()
      .required(messages.required),
    email: Yup.string()
      .email(messages.email)
      .required(messages.required),
    password: Yup.string()
      .min(8, messages.password)
      .required(messages.required)
})

export const RecordSchema = Yup.object().shape({
  date: Yup.string()
    .required(messages.required),
  total_time: Yup.number()
    .min(0, messages.minTotalTime)
    .max(24, messages.maxTotalTime)
    .required(messages.required),
  notes: Yup.string()
    .required(messages.required)
})