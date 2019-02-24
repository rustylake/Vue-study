<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="产品介绍">
        <img slot="icon" src="../static/logo.png">
        产品介绍
      </mt-tab-item>
      <mt-tab-item id="民俗民宿">
        <img slot="icon" src="../static/logo.png">
        民俗民宿
      </mt-tab-item>
      <mt-tab-item id="志愿教师">
        <img slot="icon" src="../static/logo.png">
        志愿教师
      </mt-tab-item>
      <mt-tab-item id="捐助招募">
        <img slot="icon" src="../static/logo.png">
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
     selected:''
   }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
