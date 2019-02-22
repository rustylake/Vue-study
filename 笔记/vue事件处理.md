## 事件处理
+ 事件监听
  > 使用v-on监听dom事件，并在触发时运行一些js代码

  ```
  <div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
  </div>
  var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
   })

  ```
+ 当事件处理更复杂时
  > v-on可以接收一个可以调用的方法名称

  ```
  <div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
  </div>

  var example2 = new Vue({
  el: '#example-2',
     data: {
        name: 'Vue.js'
     },
  // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
        // `this` 在方法里指向当前 Vue 实例
         alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
            alert(event.target.tagName)
        }
        }
    }
  })

    // 也可以用 JavaScript 直接调用方法
    example2.greet() // => 'Hello Vue.js!'

  ```

+ 也可以在内联js中调用方法

  ```
  <div id="example-3">
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
  </div>

    new Vue({
      el: '#example-3',
      methods: {
        say: function (message) {
          alert(message)
        }
      }
    })
  ```
  > 有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法

  ```
  <button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
  </button>

  methods: {
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault()
      alert(message)
      }
  }
  ```

+ 事件修饰符
    > 修饰符是由点开头的指令后缀表示的

  + .stop 阻止冒泡？？？
      ```
      <!-- 阻止单击事件继续传播 -->

      <a v-on:click.stop="doThis"></a>
      ```

  + .prevent 阻止默认事件
    ```
     <!-- 提交事件不再重载页面 -->

     <form v-on:submit.prevent="onSubmit"></form>
    ```

  +
    ```
    <!-- 修饰符可以串联 -->

    <a v-on:click.stop.prevent="doThat"></a>
    ```

  +
    ```
    <!-- 只有修饰符 -->

    <form v-on:submit.prevent></form>
    ```

  +
    ```
    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">...</div>
    ```

  + .self 只给对象本身绑定事件，子元素不会触发
     ```
    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat">...</div>
    ```

   + .once 只生效一次
      ```
      <!-- 点击事件将只会触发一次 -->
      <a v-on:click.once="doThis"></a>
         `   ```

        **使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。**

+ 按键修饰符
    > Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
    ```
    <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
    <input v-on:keyup.enter="submit">
    //可以将keyboardEvent.key 暴露的有效键名转换为kebab-case作为修饰符
    <input v-on:keyup.page-down="onPageDown">
    处理函数只会在 $event.key 等于 PageDown 时被调用。
    ```

    + 按键码
      > 别名
        + .Enter
        + .tab
        + .delete(删除和退格)
        + .esc
        + .space
        + .up
        + .down
        + .left
        + .right
      > 可以通过全局config.keycodes自定义按键别名

      ```
      // 可以使用 `v-on:keyup.f1`
      Vue.config.keyCodes.f1 = 112
      ```
    + 系统修饰建
      + .ctrl
      + .alt
      + .shift
      + .meta(win键)

      ```
      <!-- Alt + C -->
      <input @keyup.alt.67="clear">

      <!-- Ctrl + Click -->
      <div @click.ctrl="doSomething">Do something</div>
      ```
      > 修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。
