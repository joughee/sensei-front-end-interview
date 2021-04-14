import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskStageColumns: [
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
  },
  mutations: {
    moveTask(state, payload) {
      const task = state.taskStageColumns[payload.columnIndex].tasks[payload.taskIndex]
      state.taskStageColumns[payload.columnIndex].tasks.splice(payload.taskIndex, 1)
      state.taskStageColumns[payload.columnIndex + payload.vector].tasks.push(task)
    }
  }
})
