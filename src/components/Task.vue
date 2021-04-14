<template>
    <div class="task-item"
            @mouseenter="showMoveBtns"
            @mouseleave="hideMoveBtns">
        <button class="btn-move btn-move-left" 
            v-show="!firstColumn && moveBtnsVisible"
            @click="moveTaskLeft">&lt;</button>
        <span class="task-desc">{{ this.task }}</span>
        <button class="btn-move btn-move-right" 
            v-show="!lastColumn && moveBtnsVisible" 
            @click="moveTaskRight">&gt;</button>
    </div>
</template>

<script>
export default {
    props: {
       task: String,
       taskIndex: Number,
       columnIndex: Number
    },
    data() {
       return {
           moveBtnsVisible: false
      }
    },
    methods: {
        moveTaskRight() {
            this.$store.commit("moveTask", { taskIndex: this.taskIndex, columnIndex: this.columnIndex, vector: 1} )
        },
        moveTaskLeft() {
            this.$store.commit("moveTask", { taskIndex: this.taskIndex, columnIndex: this.columnIndex, vector: -1})
        },
        showMoveBtns () {
            this.moveBtnsVisible = true
        },
        hideMoveBtns () {
            this.moveBtnsVisible = false
        }
    },
    computed: {
        firstColumn() {
            return this.columnIndex == 0
        },
        lastColumn() {
            return this.columnIndex == this.$store.state.taskStageColumns.length - 1
        }
    }
}
</script>

<style scoped>
    .task-item {
        color: #000;
        background-color: #FFF;
        margin: 0 0 8px 0;;
        border-radius: 6px;
        min-height: 50px;
        padding: 5px 10px 10px 10px;;
        position: relative;
        line-height: 1;
    }
    .task-desc {
        font-size: 14px;
    }
    .btn-move {
        background-color: #EEE;
        border: none;
        box-shadow: 0 5px 5px #888;
        position: absolute;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        top: 25%;
    }
    .btn-move-right {
        left: 94%;
    }
    .btn-move-left {
        right: 94%;
    }
</style>
