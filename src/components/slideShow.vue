<template>
  <div class="slide-swiper" @mouseover="clearIntv" @mouseout="autoRun">
    <div class="slide-photo">
      <span class="prev" @click="changeSlide(prevIndex)">&lt;</span>
      <span class="next" @click="changeSlide(nextIndex)">&gt;</span>
      <a :href="list[slideIndex].url">
        <transition name="slide-in">
          <img v-if="isAnimate" :src="list[slideIndex].src" alt="">
        </transition>
        <transition name="slide-out">
          <img v-if="!isAnimate" :src="list[slideIndex].src" alt="">
        </transition>
      </a>
    </div>
  </div>
</template>
<style lang="less">
  .slide-in-enter-active {
    transition: all .8s cubic-bezier(.3, 0.5, 0.2, 1.3);
  }
  .slide-in-enter {
    transform:translateX(600px);

  }
  .slide-out-leave-active {
    transition: all .8s cubic-bezier(.3, 0.5, 0.2, 1.3);
    transform:translateX(-600px);
  }
  // .slide-enter, .slide-leave-active {
  //   transform: translateX(600px);
  //   opacity: 0;
  // }
  .slide-swiper{
    max-width: 600px;
    overflow: hidden;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
  .slide-photo{
    width: auto;

    position: relative;
    height: 230px;
    overflow: hidden;
    background: #f9f9f9;
    .prev,.next{
      position: absolute;
      font-family:  "microsoft yahei";
      background: rgba(0,0,0, .5);
      color: #fff;
      font-size: 40px;
      top:50%;
      height: 60px;
      line-height: 60px;
      margin-top: -30px;
      cursor: pointer;
      z-index: 3;
    }
    .prev{
      left: 0;
    }
    .next{
      right: 0;
    }
    a{
      width: auto;
      display: block;
    }
    img{
      // float: left;
      position: absolute;
      top: 0;left: 0;
      z-index: 2;
    }
  }
</style>
<script>

export default {
  props:{
    list:{
      type: Array,
      default: []
    }
  },
  data() {
    console.log(this.list)
    return {
      slideIndex: 0,
      isAnimate: true
    }
  },
  computed: {
    prevIndex(){
      if( this.slideIndex === 0 ){
        return this.list.length-1
      }else{
        return this.slideIndex -1
      }
    },
    nextIndex(){
      if( this.slideIndex === this.list.length-1 ){
        return 0
      }else{
        return this.slideIndex +1
      }
    }
  },
  methods:{
    changeSlide(index) {
      this.isAnimate = false
      setTimeout(()=>{
        this.isAnimate = true
        this.slideIndex = index
      },100)
    },
    autoRun(){
      this.timer = setInterval(()=>{
        this.changeSlide(this.nextIndex)
      }, 5000)
    },
    clearIntv(){
      clearInterval(this.timer)
    }
  },
  created(){
    // this.list = this.list
  },
  mounted(){
    // console.log(this.list)
    this.autoRun()
  }
}
</script>