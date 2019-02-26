<template>
  <div>
    <div style="height: 37px"><mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search></div>
  <the-ul v-for="item in list" >
   <mt-cell
    title=item.title
    to="/pro/contain"
    is-link
    value="详情">{{1}}
    </mt-cell></the-ul>

  </div>
</template>

<script>
    export default {
        name: "pro",
        data:function () {
          return{
            value:'',
            list:[
              {
                title:'aa',
                href:',' ,
                value:'aa',
              }
            ]

          }
        }
    }
</script>

<style scoped>

</style>
