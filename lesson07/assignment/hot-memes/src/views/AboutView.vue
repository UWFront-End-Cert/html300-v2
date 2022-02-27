<template>
  <div class="container py-4">
    <h1>About Us</h1>

    <!-- Accordion with Descriptions -->
    <div class="accordion" id="accordionExample">
      <!-- Boostrap Accordion with Vue Dynamic Items from https://therichpost.com/vue-3-bootstrap-5-accordion-with-dynamic-items/ -->
      <div
        class="accordion-item"
        v-for="(details, index) in aboutDetails"
        :key="index"
      >
        <h2 class="accordion-header" :id="'heading' + index">
          <button
            class="accordion-button"
            :class="{ collapsed: index !== 0 }"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + index"
            aria-expanded="true"
            :aria-controls="'collapse' + index"
          >
            {{ details.title }}
          </button>
        </h2>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          :class="{ show: index === 0 }"
          :aria-labelledby="'heading' + index"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ details.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutDetails: [
        {
          title: "Who We Are",
          content:
            "The Hot Meme Network is run by a guy with way too much time on his hands who also spends way too much time on his phone. This knowledge that he has could be used to serve the greater world and its problems. Instead he wastes his time on memes on Reddit.",
        },
        {
          title: "Why Hot Memes",
          content:
            "One day I found a particular meme very histerical. Wanting this to be a moment to connect with my mother, I shared it with her. Instead of laughing, she gave me a very concerned and sympathetic look. 'How do you find this funny?' It occurred to me at that moment that our senses of humor were out of sync. I wanted to give her a breakdown of why it was funny, but it occurred to me that meme history is so deep and lore-filled for no apparently good reason. The Hot Meme Network functions as that bridge between history and now. Giving an abridged version of internet culture with the intent of catching people up and bringing the culture gap closer.",
        },
        {
          title: "How can I support?",
          content: "Buy me a coffee! Venmo at jlin0104",
        },
      ],
    };
  },
};
</script>
