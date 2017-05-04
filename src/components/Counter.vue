<template>
  <div class="couter">
    <input type="text">
    <p>{{ couter }}</p>
  </div>
</template>
<script>
  export default {
    name: 'counter',
    date () {
      couter: 0
    }
  }
</script>