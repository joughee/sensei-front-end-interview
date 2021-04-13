<template>
    <div class="task-col">
        <h2>{{ title }}</h2>
        <div>{{ tasks.length }} Tasks</div>
        <ul class="task-list">
            <li class="task-item" v-for="task in tasks" :key="task">{{ task }}</li>
        </ul>
        <button @click="addTask">+ Add Task</button>
    </div>
</template>

<script>
export default {
    props: { column: Object },
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
    .task-col{
        margin: 10px;
        padding: 10px;
    }
    .task-list {
        list-style: none;
        background: #000;
        color: #FFF;
        height: 500px;

    }
    .task-item {
        color: #000;
        background-color: #FFF;
    }
</style>
