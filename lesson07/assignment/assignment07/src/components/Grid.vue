<template>
  <div id="grid">
    <Header />
    <Nav />
    <div class="row" style="height: 100%;">
      <Sidebar />
      <MainContent />
    </div>
    <Article />
    <Footer />
  </div>
</template>

<script>
import Header from './HeaderSection.vue';
import Nav from './NavSection.vue';
import Sidebar from './SidebarSection.vue';
import MainContent from './MainContent.vue';
import Article from './ArticleSection.vue';
import Footer from './FooterSection.vue';

export default {
  name: 'AppGrid',
  components: {
    Header,
    Nav,
    Sidebar,
    MainContent,
    Article,
    Footer
  }
};
</script>
