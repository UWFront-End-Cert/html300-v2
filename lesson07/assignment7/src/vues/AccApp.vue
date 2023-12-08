<template>
    <div>
      <h1>Accordion Example</h1>
      <div class="accordion">
        <div v-for="(item, index) in accordionItems" :key="index">
          <div class="accordion-header" @click="toggleAccordion(index)">
            {{ item.title }}
            <span v-if="item.open">-</span>
            <span v-else>+</span>
          </div>
          <div v-if="item.open" class="accordion-content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accordionItems: [
          { title: 'Section 1', content: 'Content for Section 1...', open: false },
          { title: 'Section 2', content: 'Content for Section 2...', open: false },
          { title: 'Section 3', content: 'Content for Section 3...', open: false },
        ],
      };
    },
    methods: {
      toggleAccordion(index) {
        this.$set(this.accordionItems, index, {
          ...this.accordionItems[index],
          open: !this.accordionItems[index].open,
        });
      },
    },
  };
  </script>
  
  <style>
    .accordion-header {
      cursor: pointer;
      background-color: #f0f0f0;
      padding: 10px;
      border: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .accordion-content {
      padding: 10px;
      border: 1px solid #ddd;
    }
  </style>