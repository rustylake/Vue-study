<template>
  <div id="app">
    <mt-header  title="">aa</mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="ducter">
        <img slot="icon" src="../static/orange.png">
        产品介绍
      </mt-tab-item>
      <mt-tab-item id="pro">
        <img slot="icon" src="../static/house.png">
        民俗民宿
      </mt-tab-item>
      <mt-tab-item id="teacher">
        <img slot="icon" src="../static/teacher.png">
        志愿教师
      </mt-tab-item>
      <mt-tab-item id="memony">
        <img slot="icon" src="../static/love.png">
        捐助招募
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function () {
   return{
     selected:''//输出id
   }
  },
  watch:{
     selected(newa,osda){
       this.$router.push({
         name:newa
       });
       console.log(newa)
     }
  }
}
</script>

<style>

</style>
