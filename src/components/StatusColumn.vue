<template>
    <div class="task-col">
        <h2>{{ title }}</h2>
        <div class="task-ct">{{ tasks.length }} Tasks</div>
        <ul class="task-list">
            <li v-for="(task, index) in tasks" :key="task">
                <task :task="task" :taskIndex="index" :columnIndex="columnIndex"></task>
            </li>
        </ul>
        <button class="btn-add-task" @click="addTask">+ Add Task</button>
    </div>
</template>

<script>
import Task from './Task.vue'

export default {
    props: { 
        column: Object,
        columnIndex: Number
    },
    components: {
        Task
    },
    data() {
        return {
            title: this.column.title,
            tasks: this.column.tasks
        }
    },
    methods: {
        addTask() {
            this.tasks.push(window.prompt('Task Description'))
        }
    }
}
</script>

<style scoped>
    .task-col {
        margin: 20px 15px 0 0;
    }
    .task-list {
        list-style: none;
        background: #000;
        color: #FFF;
        height: 500px;
        padding: 8px;
        border-radius: 7px;
    }
    .task-ct {
        color: #888;
        font-size: 14px;
    }
    .btn-add-task {
        border: none;
        background-color: #FFF;
        cursor: pointer;
        color: #888;
    }
    h2 {
        margin: 0;
    }
</style>
