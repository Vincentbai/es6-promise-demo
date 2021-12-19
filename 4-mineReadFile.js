/**
 * 封装一个函数 minReadFile 读取文件内容
 * 参数：path 文件路径
 * 返回：promise 对象
 */

function minReadFile(path){

    return new Promise((resolve, reject)=>{

        require('fs').readFile(path, (err, data)=>{

            if(err){
                reject(err)
                return
            }else{
                resolve(data.toString())
            }

        })

    })

}

minReadFile('./resource/content.txt').then((value)=>{
    console.log(value);
},(reason)=>{
    console.log(reason);
})