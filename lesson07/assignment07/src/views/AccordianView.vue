<template>
  <main class="main">
    <AccordianContent/>
    
    <h1>Must Watch</h1>
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Movie #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <h3>Eyes Wide Shut (1999)</h3>
            <p class="film-info"> <a href="https://en.wikipedia.org/wiki/Eyes_Wide_Shut">Eyes Wide Shut</a> is a 1999 erotic mystery psychological drama film directed, produced, and co-written by Stanley Kubrick. It is based on the 1926 novella Traumnovelle by Arthur Schnitzler, transferring the story's setting from early twentieth-century Vienna to 1990s New York City. The plot centers on a doctor who is shocked when his wife reveals that she had contemplated having an affair a year earlier. He then embarks on a night-long adventure, during which he infiltrates a masked orgy of an unnamed secret society.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Movie #2
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
          <div class="accordion-body">
            <h3>Possession (1981)</h3>
            <p class="film-info"> A young woman left her family for an unspecified reason. The husband determines to find out the truth and starts following his wife. At first, he suspects that a man is involved. But gradually, he finds out more and more strange behaviors and bizarre incidents that indicate something more than a possessed love affair.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Movie #3
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
          <div class="accordion-body">
            <h3>Bacurau (2019)</h3>
            <p class="film-info"> Bacurau, a small town in the Brazilian sertão, mourns the loss of its matriarch, Carmelita, who lived to be 94. Days later, its inhabitants notice that their community has vanished from most maps.</p>
          </div>
        </div>
      </div>
    </div>
    
  </main>
</template>

<script>
import AccordianContent from '/Users/videoeditor/Desktop/School/UW/html300-v2/lesson07/assignment07/src/components/Accordian.vue'

export default {
    name: 'app',
    components: {
      AccordianContent
    }
  }

</script>