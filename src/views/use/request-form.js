import { useField, useForm } from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn) {
  console.log(fn)
  const {isSubmitting, handleSubmit} = useForm({
    initialValues: {
      status: 'active'
    }
  })

  const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
    'fio',
    yup
    .string()
    .required("Введите ФИО клиента")
    .trim()
  )
  const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
    'phone',
    yup
    .string()
    .required('Телефон не может быть пустым')
    .trim()
  )
  const {value:amount, errorMessage:aError, handleBlur: aBlur} = useField(
    'amount',
    yup
    .number()
    .required('Введите сумму')
    .min(0, 'Сумма не может быть меньше нуля')
  )
  const {value: status} = useField('status',)

  const onSubmit = handleSubmit(fn)
  return {
    status,
    isSubmitting,
    onSubmit,
    fio,
    fError,
    fBlur,
    phone,
    pError,
    pBlur,
    amount,
    aError,
    aBlur
  }
}