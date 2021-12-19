#Promise Note

## 异步编程

* fs 文件操作
    ```js
    require('fs').readFile('./index.html', (err, data)=>{})
    ```

* 数据库操作
* AJAX
    ```js
        $.get('/server', (data)=>{})
    ```
* 定时器
    ```js
    setTimeout(()={}, 2000)
    ```

## Promise 的状态
实例对象中的一个属性 PromiseState
* pending 未决定的
* resolved / fulfilled 成功
* rejected 失败
状态只能改变一次


## Promise 对象的值
实例对象中的一个属性 PromiseResult
对象 成功/失败 （value/reason） 的结果
只有resolve和reject这个两个函数可以修改PromiseResult的值