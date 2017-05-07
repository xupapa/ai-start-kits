<template>
  <div id="app">
    <header>
      <h1>
        <router-link class="img-wrap" to="/">
          <img src="./assets/logo.png" alt="">
          <!-- <strong>Asiainfo start-kit</strong> -->
        </router-link>
      </h1>
    </header>
    <div class="container">
      <sidebar></sidebar>
      <div class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>

  </div>
</template>
<script>
import sidebar from './components/sidebar'
  export default {
    data() {
      return {}
    },
    components: {
      sidebar
    }
  }
</script>