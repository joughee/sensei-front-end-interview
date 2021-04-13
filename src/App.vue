<template>
  <div id="app">
    <h1>{{ userName }}</h1>
    <h2>{{ currentDate }}</h2>
    <div class="task-columns">
      <div v-for="column in columns" :key="column.title">
        <status-column v-bind:column="column"></status-column>
      </div>
    </div>
  </div>
</template>

<script>
import StatusColumn from './components/StatusColumn.vue'

export default {
  data() {
    return {
      userName: "Joe",
      currentDate: new Date().toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' }),
      columns: [
        {
          title: "Backlog",
          tasks: ["Backlog 1","Backlog 2"]
        },        
        {
          title: "In Progress",
          tasks: []
        },
        {
          title: "QA",
          tasks: []
        },
        {
          title: "Done",
          tasks: []
        }
      ]
    }
  },
  components: {
    StatusColumn

  }
}
</script>

<style scoped>
  h2 {
    border-bottom: #000 1px;
  }
  .task-columns {
    display: flex;
  }
</style>
