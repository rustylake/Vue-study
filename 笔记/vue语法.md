##vue基础语法
+ 基础语法
    + mustache语法{{}}
    > 内部可放表达式
      三元表达式，对象，字符串···都可以

      ```
      <div>{{message}}</div>  //插值表达式
      //v-once可以实现一次性插值，数据改变时内容不更新
      <div v-once>{{message}}</div>
      ```

    + html赋值 ： v-html= ""
    ```
   <p>{{ rawHtml }}</p>
   //双大括号的内容会被解释成文本
   <p><span v-html="rawHtml"></span></p>
   // v-html可以插入html代码
    ```

    + 绑定属性 ： v-bind :id= ""

    ```
    <div v-bind:id="dynamicId"></div>
    //缩写-：
    <div :id=""></div>
    //单向数据流
    ```

    + 双向绑定：v-model
    + 文本赋值 ： v-text=""

    + 指令
        + 条件判断 ： v-if= ""
        ```
        <p v-if="seen">现在你看到我了</p>
            //这里，v-if 指令将根据表达式 seen 的值的真假来插入/移除 <p> 元素。
        ```
        + v-on ：监听dom事件
        ```
        <a v-on:click="doSomething">...</a>
        缩写： @
        <a @click="dosomething"></a>
        ```
+ class和style绑定
  + 绑定html class
    + 对象语法
      > 可以传递给v-bind ：class一个对象，动态切换class

      ```
      v-bind:class= "{active:isActive}"
      ```

      > 表示active这个class是否存在取决于isactive

      > 还可以传入更多属性动态切换，也可以与普通class共存

     ```
    //例如
    <div
    class='static'  
    v-bind:class='{active:isActive,'text-danger':haserror}'>
    </div>
    //data如下
    data{
      isActive:true,
      haserror:false,
    }
    //结果为
    <div class="static active"></div>
      ```
      > 绑定的对象不必定义在模板中

      ```
      <div v-bind:class='classobjet'></div>
      data:{
        classobjet:{
          active:true,
          'text-danger':false,
        }
      }//渲染结果是一样的

      ```

      > 可以绑定一个返回对象的[计算属性](vue计算属性.md)
    + 数组语法
      > 可以把一个数组传给v-bind:class来应用一个class列表

        ```
      <div v-bind:class="[activeclass,errorclass]"></div>
      data:{
        activeclass:'active',
        errorclass:'text-danger',
        }//渲染为
      <div class="active text-danger"></div>  

      //使用三元表达式可以根据条件切换
      <div v-bind:class="[isActive?activeclass:'',errorclass]"></div>    
      //也可以在数组语法中使用对象语法
      <div v-bind:class="[{active:isActive},errorclass]"></div>
        ```
    + 用在组件上

  + 绑定内联样式
    + 对象语法
     > v-bind:style css属性名可以用驼峰式命名

     ```
     <div v-bind:style="{color:activecolor,fontsize:fontsfontsize+'px'}"></div>
     data:{
       activecolor:"red",
       fontsize:30,
     }
     //或者直接绑定到样式对象
     <div v-bind:style="styleobject"></div>
     data:{
       styleobject:{
         color:"red",
         fontsize:"13px",
       }
     }
     >>也可结合计算属性使用
     ```
    + 数组语法
    > 同上
    + 自动添加前缀
    > v-bind:style 需要添加浏览器引擎前缀时会自动添加
+ 条件渲染
  + v-if
  > v-if：条件性渲染内容

    ```
    <h1 v-if="awesome">this is vue</h1>
    //当awesome的值存在时才会渲染

    //也可以添加v-else块
    <h1 v-if="awesome">this is vue</h1>
    // v-else必须紧跟在带v-if或v-else-if后面
    <h1 v-else>this isn't</h1>

    ```
  + v-else-if
  > v-else-if，顾名思义，充当 v-if 的“else-if 块”，可以连续使用

    ```
    <div v-if="type === 'A'">
    A
    </div>
    <div v-else-if="type === 'B'">
    B
    </div>
    <div v-else-if="type === 'C'">
    C
    </div>
    <div v-else>
    Not A/B/C
    </div>
    ```  
  +  v-show
    > v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。

    ***v-show 不支持'template' 元素，也不支持 v-else***
+ 列表渲染
  + v-for
  > 我们用 v-for 指令根据一组数组的选项列表进行渲染。v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名。

    ```
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
        </li>
        </ul>

    var example1 = new Vue({
      el: '#example-1',
      data: {
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
          ]
        }
    })

    ```
+ 过滤器
  > filter：全局过滤器

  ```
  Vue.filter('aaaaa',function(){
    //内容
    })
  ```

  > filters:组件内过滤器

    ```
    <div>
      <input type="text" v-model="mytext">
      {{mytext|reverse('666')}}
    </div>
    ...
    filters:{
      reverse:function(datastr,open){
        return  open+':'+datastr.split('').reverse().join('')
      }
    }

    ```
