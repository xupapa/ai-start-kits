<template>
    <div class="slide-wrap">
      <slide :list="list"></slide>
      <div class="mt20">
        <counter :minX=2></counter>
      </div>
      <div class="mt20">
        <ai-selection></ai-selection>
      </div>
    </div>
</template>
<style lang="less">
  .mt20{
    margin-top: 20px;
  }
  .slide-wrap{
    padding-top: 20px;
    text-align: center;
    margin: 0 auto;
  }

</style>
<script>
import slide from '../components/slideShow'
import counter from '../components/Counter'
import aiSelection from '../components/selection'
  export default {
    data() {
      return {
        list: [
        ]
      }
    },
    created(){
      this.$http.get('/api/getSlides')
      .then(
        (data) => {
          console.log(data)
          this.list = data.data
        },
        (err) => {
          console.log(err)
        }
      )
    },
    components: {
      //需要被注册的组件
      slide,
      counter,
      aiSelection
    }


  }
</script>