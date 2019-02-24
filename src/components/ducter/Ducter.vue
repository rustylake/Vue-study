<template>
  <div>
    <!--滚动图片-->
    <mt-swipe :auto="4000" class="mt-swipe">
      <mt-swipe-item>
        <img src="../../../static/bc889bb1f4bb4bec9d8bad760382946c.jpeg"/>
      </mt-swipe-item>

      <mt-swipe-item>

        <img src="../../../static/fc15fd2cdb7245029d78e71f3b6e7d1e.jpeg" /></mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../static/bc889bb1f4bb4bec9d8bad760382946c.jpeg"/>
      </mt-swipe-item>
    </mt-swipe>

    <!--产品列表-->
    <div>
      <theUl>
        <theLi v-for="item in items" v-text="items.tilte">{{items.title}}</theLi>
      </theUl>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ducter",
    data:function () {
      return{
        items:[
          {
            tilte:'aaa',
            href:'',
          },
          {
            tilte:'sss',
            href:''
          }
        ]
      }
    }
  }
</script>
<!--不加scoped相当于全局css-->
<style scoped>
  .mt-swipe {
    height: 250px;
  }

  img {
    width: 100%;
  }
</style>
