<template>
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.id" @click="handleItemClick(item)">
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { id: 1, name: 'Home', route: '/' },
          { id: 2, name: 'Images', route: '/images' },
          { id: 3, name: 'Accordion', route: '/accordion' },
          { id: 4, name: 'Grid', route: '/grid' }
        ]
      };
    },
    methods: {
      handleItemClick(item) {
        // Handle menu item click event
        console.log(`Clicked ${item.name}`);
        this.$router.push(item.route); // Navigate to the clicked menu item's route
      }
    }
  };
  </script>
  
  <style scoped>
  nav {
    background: #f2f2f2;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  li:hover {
    background: #ddd;
  }
  </style>
  