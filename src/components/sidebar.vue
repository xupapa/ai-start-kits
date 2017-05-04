<template>
  <div class="sidebar">
    <ul>
       <li v-for="item in linkname">
         <a :href="item.url" >{{ item.title }}</a>
       </li>
    </ul>
  </div>
</template>
<script>
  export default {
    created(){
      this.$http.get('api/getBordList')
      .then(
        (data)=>{
          console.log(data)
          this.linkname = data.body
        },
        (err)=>{
          console.log(err)
        }
      )
    },
    data(){
      return {
        linkname: []
      }
    }
  }
</script>