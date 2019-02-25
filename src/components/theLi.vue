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
  background: #ffffff;
  list-style: none;
  float: top;
  /*width: 100%;*/
  text-align: left;
  font-size: 20px;
  height: 65px;
  line-height: 65px;
  position: relative;
  border-bottom: solid 3px aliceblue;
  padding: 4px 20px;
}
</style>
