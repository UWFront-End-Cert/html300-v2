<template>
  <div class="accordion">
    <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
      <div class="accordion-header">
        <button class="accordion-button" type="button" :data-bs-toggle="'collapse' + index" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse' + index">
          {{ item.title }}
        </button>
      </div>
      <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: index === 0 }" :aria-labelledby="'heading' + index" data-bs-parent=".accordion">
        <div class="accordion-body">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAccordion',
  data() {
    return {
      accordionItems: [
        {
          title: "Hello One",
          content: "Hello There"
        },
        {
          title: "Hello Two",
          content: "General Kenobi!"
        },
        {
          title: "Hello Three",
          content: "Hello There again"
        }
      ]
    };
  }
};
</script>

<style>

</style>
