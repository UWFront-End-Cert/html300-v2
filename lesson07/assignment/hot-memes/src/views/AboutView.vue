<template>
  <div class="container py-4">
    <!-- Navigation Bar with Light Blue Pills -->
    <header class="pb-3 mb-4 border-bottom">
      <nav class="nav nav-pills">
        <a class="nav-link text-info" aria-current="page" href="index.html"
          >Home</a
        >
        <a class="nav-link text-info" href="hot.html">Hot Memes</a>
        <a class="nav-link active bg-info text-white" href="about.html"
          >About</a
        >
        <a class="nav-link text-info" href="archive.html">Archive</a>
      </nav>
    </header>

    <h1>About Us</h1>

    <!-- Accordion with Descriptions -->
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Who We Are
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            The Hot Meme Network is run by a guy with way too much time on his
            hands who also spends way too much time on his phone. This knowledge
            that he has could be used to serve the greater world and its
            problems. Instead he wastes his time on memes on Reddit.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Why Hot Memes?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            One day I found a particular meme very histerical. Wanting this to
            be a moment to connect with my mother, I shared it with her. Instead
            of laughing, she gave me a very concerned and sympathetic look. "How
            do you find this funny?" It occurred to me at that moment that our
            senses of humor were out of sync. I wanted to give her a breakdown
            of why it was funny, but it occurred to me that meme history is so
            deep and lore-filled for no apparently good reason. The Hot Meme
            Network functions as that bridge between history and now. Giving an
            abridged version of internet culture with the intent of catching
            people up and bringing the culture gap closer.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            How can I support?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Buy me a coffee!
            <p class="text-danger">Venmo at jlin0104</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
