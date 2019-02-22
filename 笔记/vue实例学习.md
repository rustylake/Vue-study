## vue实例
>创建vue实例：

```vue
  var vm = new Vue({
    //el:发生行为的目的地
    el：'app'
    //也可以是dom元素
    //  el:document.getElementById('app')
    // 区别 更加优化

    //template装载的模板
    template:'<div>666</div>'

    //动态数据
    data:function(){   //也可以使用对象
    //template要使用的数据
      return{
      text:'hello vue'  //text可以当作模板中的数据
      }
    }
  })
```
