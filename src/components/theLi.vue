<template>
    <li class="li">
      <slot></slot>
    </li>
</template>

<script>
    export default {
        name: "theLi",
        data:function () {
          return{

          }
        }
    }
</script>

<style scoped>
.li{
  background: aliceblue;
  list-style: none;
  float: top;
  width: 100%;
  text-align: left;
  height: 65px;
  line-height: 65px;
  position: relative;
}
</style>
