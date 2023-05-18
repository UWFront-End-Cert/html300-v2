<template>
<main>
    <ul>
        <li v-bind="(film) in films">
            <h3>{{ film.name }}</h3>
            <p>{{ film.info }}</p> 
        </li>
    </ul>
    <!-- Need to figure out what I'm actually doing above! -->
    
</main>
</template>


<script>
export default {
    name: 'AccordianContent',
    data() {
        return {
            films: [
            {
                name: "Eyes Wide Shut (1999)",
                info: "Eyes Wide Shut is a 1999 erotic mystery psychological drama film directed, produced, and co-written by Stanley Kubrick. It is based on the 1926 novella Traumnovelle by Arthur Schnitzler, transferring the story's setting from early twentieth-century Vienna to 1990s New York City. The plot centers on a doctor who is shocked when his wife reveals that she had contemplated having an affair a year earlier. He then embarks on a night-long adventure, during which he infiltrates a masked orgy of an unnamed secret society."
            },
            {
                name: "Possession (1981)",
                info: "A young woman left her family for an unspecified reason. The husband determines to find out the truth and starts following his wife. At first, he suspects that a man is involved. But gradually, he finds out more and more strange behaviors and bizarre incidents that indicate something more than a possessed love affair."
            },
            {
                name: "Bacurau (2019)",
                info: "Bacurau, a small town in the Brazilian sertão, mourns the loss of its matriarch, Carmelita, who lived to be 94. Days later, its inhabitants notice that their community has vanished from most maps."
            }
                
            ]
           
            
        }
    }
}
</script>



<style scoped>
  
</style>