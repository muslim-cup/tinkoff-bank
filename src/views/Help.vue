<template>
  <app-page back title="Помощь">
    <question-item
    v-for="q in question"
    :key="q.title"
    :question="q"
    ></question-item>
  </app-page>
</template>

<script>
import AppPage from  '../components/ui/AppPage.vue'
import QuestionItem from '../components/Question/QuestionItem.vue'
export default {
  setup() {
    const question = [
    {title: 'Что есть в данной системе?', text: 'Тут есть все,для того,чтобы смотреть,какие зявки человек добавлял'},
    {title: 'Как тут работает авторизация', text: 'Все реализовано через Firebase'}
    ]
    return {question}
  },
  components: {AppPage,QuestionItem}
}
</script>