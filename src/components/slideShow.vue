<template>
  <div class="slide-swiper">
    <div class="slide-photo">
      <span class="prev"><</span>
      <span class="next">></span>
      <a :href="list[slideIndex].url">
        <img v-bind:src="list[slideIndex].imgUrl" alt="">
      </a>
    </div>
  </div>
</template>
<style>
  .slide-photo{
    position: relative;
    .prev,.next{
      position: absolute;
    }
    .prev{
      background: rgba(0,0,0, .5);
      color: #fff;
      font-size: 40px;
    }
  }
</style>
<script>
export default {

  created() {
    this.$http.get('api/getSlides')
    .then(
      (data) => {
        console.log(data.body)
        let list = data.body
        this.list = list
      },
      (err) => {
        console.log(err)
      }
    )
  },
  data() {
    return {
      list: [],
      slideIndex: 0
    }
  },
  mounted(){
    console.log('------'+this.list)
  }
}
</script>