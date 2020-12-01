/**
 * 1.数组扁平化
 */

const arr01 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12], 13, 14], 15], 16, 17, [18, 19, [20, 21, 22]]];

function flatten(arr) {

    if(Array.isArray(arr)){
        return arr.reduce((a,b)=>{
            return a.concat(Array.isArray(b)?flatten(b):b)
        },[])
    }
    // code here
    return arr;
}

console.log("====== 数组扁平化 ======")
console.log('should --> ' + JSON.stringify([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17, 18, 19, 20, 21, 22]));
console.log('[result] --> ' + JSON.stringify(flatten(arr01)));

/**
 * 2. 解析 URL 中的 Query String，返回一个对象
 */
// 返回值示例：
// {
//   name: 'coder',
//   age: '20'.
//   callback: 'https://youzan.com?name=test'
// }

const testURL = 'https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest';


function parseQueryString(url) {
    const [,params] = url.split('?')
    const datas = {}
    params.split('&').forEach(itm=>{
        const [name,data] = itm.split('=')
        datas[name] = decodeURIComponent(data)
    })
    // code here
    return datas
}

console.log("====== QueryString Parser ======")
console.log("should --> " + JSON.stringify({
    name: 'coder',
    age: '20',
    callback: 'https://youzan.com?name=test'
}));
console.log("[result] --> " + JSON.stringify(parseQueryString(testURL)));

/**
 * 3. 模板引擎
 *
 * - 实现一个简单的模板引擎
 * - 插值语法只需要考虑单行的情况
 * - 不需要考虑安全问题
 *
 */

const str = "hello, i am <@=user@>, from <@=location@>, like <@=like.a@> and <@=like.b@>.";
const want = "hello, i am jojo, from china, like apple and pencil.";

function template(tpl, state = {}) {
    function fun(obj){
        for(let itm in obj){
            if(typeof obj[itm] === 'string'){
                tpl = tpl.replace(`<@=${itm}@>`,obj[itm])
            }else{
                const data = {}
                Object.entries(obj[itm]).map(it=>{
                    data[`${itm}.${it[0]}`] = it[1]
                })
                fun(data)
            }
        }
    }
    fun(state)

    return tpl;
}

const result = template(str, { user: 'jojo', location: 'china', like: { a: 'apple', b: "pencil" } });

console.log("====== 模板引擎 ======")
console.log('result --> ' + result === "hello, i am jojo, from china, like apple and pencil.");
console.log('want ----> ' + want === "hello, i am jojo, from china, like apple and pencil.");
console.log('should --> ' + true);
console.log('[equal] -> ' + result === want);


/**
 * 4.fastEqual 两个对象快速相等
 *
 * 示例输入: a = { arr: [1, 2], num: 12 } b = { arr: [1, 2], num: 12 }
 *
 * 示例输出: true
 *
 * tips: 不需要考虑太多边界情况, 优先保证执行效率, 输入 a / b 可以是任意数据类型
 */

// findType('') => 'string'
// findType(0) => 'number'
// findType(false) => 'boolean'
// findType({}) => 'object'
// findType([]) => 'array'
// ....
function findType(data) {
    return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1).toLowerCase();
}

const a = { arr: [2,1,{a:1}], num: 12, o: { name: 'foo' }};
const b = { arr: [2,1,{a:1}], o: { name: 'foo'}, num: 12};

function fastEqual(a, b) {
    if(Object.keys(a).length!==Object.keys(b).length)return false
    for(let itm in a){
        const _a = a[itm],_b = b[itm];
        switch(findType(_a)){
            case 'boolean':
            case 'string':
            case 'number':
                if(_b !== _a)return false
                break;
            case 'object':
                if(!findType(_b)||!fastEqual(_a,_b)) return false
                break;
            case 'array':
                let arr = {},brr={}
                _a.forEach((itm,index)=>arr[index] = itm)
                _b.forEach((itm,index)=>brr[index] = itm)
                if(!fastEqual(arr,brr))return false
        }
    }
    return true
}

console.log("====== 两个对象快速相等 ======")
console.log('should --> ' + true);
console.log('[equal] -> ' + fastEqual(a, b));