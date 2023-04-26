<script setup>
import Header from './components/Header.vue';
import Footer from './components/footer.vue';

import 'bootstrap-icons/font/bootstrap-icons.css';

</script>

<template>
  <div class="container">
    <main>
      <Header></Header>
      <div class="content">
        <router-view></router-view> <!-- make the router views visible -->
      </div>

    </main>
    
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.content {
  flex: 1;
  min-height: calc(100vh - 200px);
  /* adjust the value based on your footer height */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex-grow: 1;
    margin-top: auto;
    display: flex;
    flex-direction: column;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    /* set the height of your footer */
  }
}</style>
