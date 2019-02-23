## vue计算属性

> # ***computed:{}***
+ 基础例子

  ```
  <div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
  
  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
         // `this` 指向 vm 实例
         return this.message.split('').reverse().join('')
      }
    }
  })
  //结果
  //Original message: "Hello"
  //Computed reversed message: "olleH"
  ```
  > 这里声明了一个**计算属性**reversedMessage
  
  > 函数将用作属性 vm.reversedMessage 的 getter 函数：
  
  ```
  console.log(vm.reversedMessage) // => 'olleH'
  vm.message = 'Goodbye'
  console.log(vm.reversedMessage) // => 'eybdooG'
  ```
    > vm.reversedMessage始终依赖vm.message的值

+ 计算属性缓存&方法
    > 在表达式中调用方法可以达到同样的效果    
    
     ```
        <p>Reversed message: "{{ reversedMessage() }}"</p>
        
        // 在组件中
        methods: {
          reversedMessage: function () {
            return this.message.split('').reverse().join('')
          }
        }
     ``` 
     将同一函数定义为一个方法而不是一个计算属性得到的最终结果是相同的 
    
    但计算属性是基于依赖缓存的，只有在依赖发生改变时才会重新求值
    
## 侦听器
>  Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
```
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
</script>
```


在这个示例中，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

除了 watch 选项之外，还可以使用命令式的 vm.$watch API。
    
    
## 侦听属性&计算属性

 > 当有一些数据需要随着其他数据变动而变动时，很容易滥用watch，然而可以     
    
 **侦听属性**
    
  ```
    <div id="demo">{{ fullName }}</div>
    var vm = new Vue({
      el: '#demo',
      data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      },
      watch: {
        firstName: function (val) {
          this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
          this.fullName = this.firstName + ' ' + val
        }
      }
    })
   ```
   **计算属性**
   ```
   var vm = new Vue({
     el: '#demo',
     data: {
       firstName: 'Foo',
       lastName: 'Bar'
     },
     computed: {
       fullName: function () {
         return this.firstName + ' ' + this.lastName
       }
     }
   })
   ```
   
   
    