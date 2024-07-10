<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>
    <div :class="['form-control', {invalid: eError}]">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur"/>
      <small v-if="eError"> {{ eError }} </small>
    </div>

    <div :class="['form-control', {invalid: pError}]">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" @blur="pBlur"/>
      <small v-if="pError"> {{ pError }} </small>
    </div>

    <button class="btn primary" type="submit" :disabled="isSubmitting || isAttems">Войти</button>
    <div class="text-danger" v-if="isAttems">Вы слишком часто пытаетсь Войти. Повторите позже</div>
  </form>
</template>
<script>
import { useStore } from 'vuex';
import {useRoute} from 'vue-router'
import {error} from '../utils/error'
import { useLoginForm } from './use/login-form';


export default{
  setup (){
    const route = useRoute()
    const store = useStore()

    if(route.query.message) {
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type: 'warning'
      }, {root:true})
    }
    return{...useLoginForm()}
  }
}

</script>
<style>
  
</style>