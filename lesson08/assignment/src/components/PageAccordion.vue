<script>
export default {
    name: 'PageAccordion',
    headerName: 'Accordion',

    data() {
        return {
            accordionData: [
                {
                    id: "card-01",
                    name: "Card 1",
                    content: "CARD 1:\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus eaque optiocorrupti ex excepturi illo. Maxime quod necessitatibus quo aperiam enim illo dicta porro veniam, in error itaque sunt excepturi accusantium a, laboriosam illum tempore explicabo distinctio nemo? Et tenetur, aspernatur vitae necessitatibus, ex nostrum rerum alias similique veniam doloribus id? Repellat eius nesciunt quaerat alias libero nisi ab!"
                },
                {
                    id: "card-02",
                    name: "Card 2",
                    content: "CARD 2:\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus eaque optiocorrupti ex excepturi illo. Maxime quod necessitatibus quo aperiam enim illo dicta porro veniam, in error itaque sunt excepturi accusantium a, laboriosam illum tempore explicabo distinctio nemo? Et tenetur, aspernatur vitae necessitatibus, ex nostrum rerum alias similique veniam doloribus id? Repellat eius nesciunt quaerat alias libero nisi ab!"
                }
        ]
    }}
}
</script>

<template>
     <div class="container">
        <button v-for="entry in accordionData" :key=entry
            class="btn btn-primary"
            type="button"
            data-toggle="collapse"
            :data-target="'#' + entry.id"
            aria-expanded="false"
            aria-controls="collapse">
            Activate {{entry.name}}
        </button>
        
        <span 
            data-toggle="tooltip"
            data-placement="bottom"
            title="Clicking 'Toggle Both Cards' while one is activated will turn off one and turn on the other one.
            To put both on the same page, you have to decide to click on the card to toggle one or the other so both
            are either activated or deactivated at the same time.">
            
            <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="collapse">
                Toggle Both Cards
            </button>
        </span>

        <div v-for="entry in accordionData" :key=entry
            :id="entry.id"
            class="collapse multi-collapse">
            <div class="card card-body" >
               <h1>{{entry.name}}</h1>
               <p>{{entry.content}}</p>
            </div>
        </div>
    </div>
</template>