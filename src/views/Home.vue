<template>
  <app-loader v-if="loading"/>
<app-page title="Список заявок" v-else>
  <template #header>
    <button class="btn primary" @click="modal = true">Создать</button>
  </template>
  <request-filter v-model='filter'></request-filter>
  <request-table :requests="requests"></request-table>

  <teleport to='body'>
  <app-model v-if="modal" title="Создать заявку" @close="modal = false">
    <request-modal @created="modal = false"></request-modal>
  </app-model>
  </teleport >
</app-page>
</template>

<script>
import {ref,computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import RequestTable from '../components/request/RequestTable.vue';
import AppPage from '../components/ui/AppPage.vue';
import AppModel from '../components/ui/AppModel.vue';
import RequestModal from '../components/request/RequestModal.vue';
import AppLoader from '../components/ui/AppLoader.vue';
import RequestFilter from '../components/request/RequestFilter.vue';
export default {
  setup() {
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)
    const filter = ref({})
    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })
    
    const requests = computed(() => store.getters['request/requests']
    .filter(request => {
      if (filter.value.name) {
        return request.fio.includes(filter.value.name)
      }
      return request
    })
    .filter(request => {
      if (filter.value.status) {
        return filter.value.status === request.status
      }
      return request
    })
  )
  
    return {
      modal,
      close: () => modal.value = false,
      requests,
      loading,
      filter
    }
  },
  components: {AppPage,RequestTable,AppModel,RequestModal, AppLoader, RequestFilter}
}
</script>
