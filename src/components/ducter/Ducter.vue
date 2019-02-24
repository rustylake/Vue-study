<template>

    <div>
      <mt-swipe :auto="4000" class="mt-swipe">
        <mt-swipe-item><img src="../../../../新建文件夹 (2)/bc889bb1f4bb4bec9d8bad760382946c.jpeg"/></mt-swipe-item>

        <mt-swipe-item><img src="../../../../新建文件夹 (2)/ef566fca648a44448ef52b9dadc24881.jpeg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../../../新建文件夹 (2)/fc15fd2cdb7245029d78e71f3b6e7d1e.jpeg"/></mt-swipe-item>
     </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "ducter"
    }
</script>

<style scoped>
  .mt-swipe{
    height: 250px;
  }
  img{
    width:100% ;
  }
</style>
