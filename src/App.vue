<template>
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import mainLayout from './layout/mainLayout.vue'
import authLayout from './layout/authLayout.vue'
import { useRoute } from 'vue-router';
import {computed} from 'vue'

export default {
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {mainLayout,authLayout}
}
</script>