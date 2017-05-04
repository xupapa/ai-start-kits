<template>
    <div class="slide-wrap">
      <slide></slide>
    </div>
</template>
<style lang="less">
  .slide-wrap{
    padding-top: 20px;
    text-align: center;
    margin: 0 auto;
  }
  .slide-swiper{
    max-width: 600px;
    img{
      width: 100%;
    }
  }
  .slide-photo{
    li{
      position: relative;
      height: 240px;
    }
    a{
      display: block;
      color: #42b983;
      font-size: 30px;
      text-decoration: none;
    }
    strong{
      position: absolute;
      bottom: 10px;
      height: 40px;
      display: block;
      line-height: 40px;
      background: rgba(0, 0, 0, .6);
      width: 100%;
      left: 0;
    }
  }
  .slide-swiper{
    margin: 0 auto;
  }
</style>
<script>
import slide from '../components/slideShow'
  export default {
    components: {
      slide
    },
    data() {
      return {
        productList: {
          pc: {
            title: 'pc列表',
            list: [
              {
                name: 'pc列表1',
                url: 'ddd'
              },
              {
                name: 'pc列表2',
                url: 'ddd'
              },
              {
                name: 'pc列表3',
                url: 'ddd'
              },
            ]
          },
          app: {
            title: 'app列表',
            list: [
              {
                name: 'app列表1',
                url: 'ddd'
              },
              {
                name: 'app列表1',
                url: 'ddd'
              },
              {
                name: 'app列表1',
                url: 'ddd'
              },
            ]
          }
        }
      }
    }

  }
</script>