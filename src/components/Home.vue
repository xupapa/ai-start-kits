<template>
  <div class="" @click="getParam" >
    home
    {{ routeParam }}
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      routeParam: this.$route.params
    }
  },
  methods: {
    getParam () {
      console.log(this.$route.params)
    }
  },
  computed: {
    p () {
      return this.$route.params
    }
  }
}
</script>

