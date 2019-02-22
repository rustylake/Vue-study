## vue组件
+ 基本示例
  + el:目的地（string值，dom元素）
  + data：动态数据
  + template:组件模板
  + components:对象（key是组件名，value是组件对象）
  + methods:调用的方法（配合dom事件使用）
  + props:子组件接收的参数设置
  + filter:过滤器

  ```
  // 定义一个名为 button-counter 的新组件
  Vue.component('button-counter', {
    data: function () {
      return {
       count: 0
      }
    },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
  ```
  > 组件是可复用的vue实例，且有名字（在这个例子中是button-counter）              
  可以在通过new Vue创建的实例中把它当作自定义元素使用

  ```
  <div id="components-demo">
  <button-counter></button-counter>
  </div>
  new Vue({ el: '#components-demo' })
  ```
+ 组件的复用
  ```
  <div id="components-demo">
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
  </div>
  ```
+ data是一个函数
  > 因此，每个实例可以维护一份被返回对象的独立的拷贝

  ```
  data: function () {
    return {
      count: 0
    }
  }
  ```
  # 注册全局组件
  `Vue.component('组件名'，（组件对象)`
