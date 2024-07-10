import {computed, watch} from 'vue'
import * as yup from 'yup'
import { useField,useForm } from 'vee-validate';
import {useStore} from "vuex"
import {useRouter} from 'vue-router'

export function useLoginForm() {const {handleSubmit, isSubmitting, submitCount} = useForm()

const isAttems = computed(() => submitCount.value >= 3)

const store = useStore()
const router = useRouter()
watch(isAttems, value => {
  if(value){
    setTimeout(() => submitCount.value = 0, 1500)
  }
})

const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
  'email',
  yup
  .string()
  .trim()
  .required('Введите пожалуйста email')
  .email('Введите корректный email')
)

const MIN_PASSWORD = 6

const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
  'password',
  yup
  .string()
  .trim()
  .required('Введите пожалуйста пороль')
  .min(MIN_PASSWORD ,`Пароль должен содержать не менее ${MIN_PASSWORD} цифр`)
)



const onSubmit = handleSubmit( async values => {
  try {
    await store.dispatch('auth/login', values)
    router.push('/')
  } catch (e) {
  }
}
)
return {
  email,
  password,
  pBlur,
  eBlur,
  pError,
  eError,
  onSubmit,
  isSubmitting,
  isAttems
}
}

