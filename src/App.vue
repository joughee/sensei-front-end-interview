<template>
  <div id="app">
    <div class="headers">
      <h1>Hello, {{ userName }}</h1>
      <h2>{{ currentDate }}</h2>
    </div>
    <div class="task-columns">
      <div v-for="(column, index) in columns" :key="column.title">
        <status-column :column="column" :columnIndex="index"></status-column>
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
      // columns: [
      //   {
      //     title: "Backlog",
      //     tasks: ["Backlog 1","Backlog 2"]
      //   },        
      //   {
      //     title: "In Progress",
      //     tasks: []
      //   },
      //   {
      //     title: "QA",
      //     tasks: []
      //   },
      //   {
      //     title: "Done",
      //     tasks: []
      //   }
      // ]
    }
  },
  components: {
    StatusColumn
  },
  computed: {
    columns() {
      return this.$store.state.taskStageColumns
    } 
  }
}
</script>

<style scoped>
  #app {
    min-width: 1200px;
    width: 80%;
    padding: 30px;
  }
  .headers {
    border-bottom: #888 solid 1px;
  }
  h1 {
    margin: 0;
  }
  h2 {
    color: #888;
    margin: 0 0 25px 0;
    font-weight: normal;
  }
  .task-columns {
    display: flex;
  }
  .task-columns > div {
    width: 25%;
  }
</style>
