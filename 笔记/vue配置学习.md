## 官网拷贝 
> **https：//unpkg.com/vue/dist/vue.js**
---
+ 带min的是压缩版本
> vue实例
```
new Vue({
    el :"#app",    // el：element（对象）简写
    data:{      数据
        message："hello"
    }
    )};
```
+ babelrc ：es6编译配置
+ editorconfig :编译器配置
+ gitignore ： git忽略文件
+ postcsssrc : html添加前缀配置
   
+ index.html : 页面入口
    + webpack打包后插入到这里进行编译
+ package.json: 配置
    + script是脚本命令
    + dependncies是项目脚本依赖库
    + devDependencies是开发依赖库
    + engines是引擎
    + browserslist是浏览器列表
---
 ---
 + build是打包的配置文件夹
    + build.js构建生产包的配置（加载webpack配置进行打包）
    + webpack.base.cons.js：webpack配置
        + 
    + webpack.prod.conf.js 拓展和补充
+   config是打包的配置
+   src是源码
    + app.vue是入口组件
    + main.js是项目的入口文件
+ staic是静态资源
