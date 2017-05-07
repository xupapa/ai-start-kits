<template>
  <div class="ai-counter">
    <div class="ai-counter-wrap">
      <input type="text" class="ai-counter-input" v-model="num1" placeholder="text something">
      <span class="ai-counter-decrease">-</span>
      <span class="ai-counter-increase">+</span>
    </div>
  </div>
</template>
<style lang="less">
.content{
  padding: 100px;
}
</style>
<script>
import '../assets/counter.less'
export default {
  data () {
    return {
      num1: 1
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

