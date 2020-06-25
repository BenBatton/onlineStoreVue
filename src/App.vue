<template>
  <div id="app">
    <Header />
    <div class="mainBlock">
      <router-view />
    </div>

    <Footer />
    <!-- <Home /> -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Home from "@/views/Home";
export default {
  components: {
    Header,
    Footer
    // Home
  },
  methods: {}
};
</script>
