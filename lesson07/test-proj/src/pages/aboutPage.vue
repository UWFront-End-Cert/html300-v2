<template>
    <div class="main-content">
        <h1>About Us</h1>
        <!--v-for loop here-->
        <div class="card" v-for="item in items" :key="item.id">
            <div class="card-header" @click.prevent="toggleExpand(item)">
                <span>{{ item.title }}</span>
            </div>
    
            <div class="card-body"
            :ref="'content' + item.id"
            :style="[item.isExpand ? {height: item.computedHeight} : {}]">
            <hr />
            <div class="card-content">{{ item.content }}</div>
            </div>
        </div>
        <!--end v-for loop-->
    </div>
</template>

<script>
    export default {
        name: 'aboutPage', 
        data() {
            return {
                items: [
                    {
                        id: 1,
                        title: "Who created WA Adventures?",
                        content: "Emmett Schreiber",
                        isExpand: false,
                        computedHeight: 0,
                    },
                    {
                        id: 2,
                        title: "When was WA Adventures founded?",
                        content: "2023",
                        isExpand: false,
                        computedHeight: 0,
                    },
                    {
                        id: 3,
                        title: "What is the point of WA Adventures?",
                        content: "To encourage explorers and adventurers to see more of Washington state",
                        isExpand: false,
                        computedHeight: 0,
                    }
                ]
            }
        },
        methods: {
            toggleExpand(item) {
                item.isExpand = !item.isExpand;
            },
            getComputedHeight() {
                this.items.forEach(item => {
                    var content = this.$refs["content" + item.id][0];
        
                    content.style.height = 'auto';
                    content.style.position = 'absolute';
                    content.style.visibility = 'hidden';
                    content.style.display = 'block';

                    var height = getComputedStyle(content).height;
                    item.computedHeight = height;

                    content.style.height = 0;
                    content.style.position = null;
                    content.style.visibility = null;
                    content.style.display = null;
                });
            }
        },
        mounted() {
            this.getComputedHeight();
        },
    };
</script>

<style scoped>
.card {
    height: auto;
    display: block;
    position: relative;
    margin: 1rem 20rem;
    padding: 0;
    border: 1px solid #aaa;
    border-radius: 4px;
}

.card-header,
.card-content {
    padding: 1rem 0;
}

.card-header {
    cursor: pointer;
}

.card-header span {
    font-weight: bold;
}

.card-body {
    height: 0;
    overflow: hidden;
    transition: 0.5s;
}

hr {
    margin: 0;
    height: 1px;
    display: block;
    border-width: 0;
    border-top: 1px solid #aaa;
}
</style>