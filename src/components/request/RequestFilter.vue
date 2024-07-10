<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Начните писать имя" v-model="name">
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Выберите Статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button class="btn danger" v-if="isActive" @click="reset">Очистить</button>

  </div>
</template>
<script>
import {ref, watch, computed} from 'vue'
export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_,{ emit }) {
    const name = ref()
    const status = ref()

    const isActive = computed(() => name.value || status.value )
    watch([name,status], val => {
      emit('update:modelValue', {
        name: val[0],
        status: val[1]
      })
    })
    return {
      name,
      status,
      isActive,
      reset: () => {
        name.value = ''
        status.value = null
      }
    }
  }
}
</script>
<style>
  
</style>