<template>
    <ul>

      <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "theUl",
        data:function () {
          return{

          }
        }
    }
</script>

<style scoped>
  ul{
    padding: 10px 0;
  }
</style>
