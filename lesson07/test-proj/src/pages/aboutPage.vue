<template>
    <div>
        <h1>About Us</h1>
            <!--v-for loop here-->
            <div v-for="item in items" :key="item.id">
                <div @click.prevent="toggleExpand(item)">
                    {{ item.title }}
                </div>
    
                <div>
                    <div class="card-content">{{ item.info }}</div>
                </div>
            </div>
    </div>
            <!--end v-for loop-->
            <!-- <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                        collapse plugin adds the appropriate classes that we use to style each element. These classes
                        control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our default variables. It's also worth noting that
                        just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
                        overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
                    overflow.
                </div>
            </div> -->
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
                        info: "Emmett Schreiber",
                        isExpand: false
                    },
                    {
                        id: 2,
                        title: "When was WA Adventures founded?",
                        info: "2023",
                        isExpand: false
                    },
                    {
                        id: 3,
                        title: "What is the point of WA Adventures?",
                        info: "To encourage explorers and adventurers to see more of Washington state",
                        isExpand: false
                    }
                ]
            }
        },
        methods: {
            toggleExpand(item) {
                item.isExpand = !item.isExpand;
            }
        }
    }
</script>