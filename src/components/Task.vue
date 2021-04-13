<template>
    <div>
        <button class="btn-move-left" v-show="!firstColumn" @click="moveTaskLeft">&lt;</button>
        <span class="task-desc">{{ this.task }}</span>
        <button class="btn-move-right" v-show="!lastColumn" @click="moveTaskRight">&gt;</button>
    </div>
</template>

<script>
export default {
    props: {
        task: String
    },
    data() {
        return {

        }
    },
    methods: {
        moveTaskRight() {
            console.log("right");
        },
        moveTaskLeft() {
            console.log("left");
        }
    },
    computed: {
        firstColumn() {
            return this.columnIndex == 0
        },
        lastColumn() {
            return this.columnIndex == 3
        }
    }
}
</script>

<style scoped>

</style>
