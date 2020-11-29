const assert = require('assert');

const question = '实现一个简易版的微博，包含 client 和 server 两部分，并实现四个基础功能：关注、取关、发微博、获取用户微博列表';

// A 关注 B 后，A 和 B 就成为好友关系（即使 B 没有关注 A）
// 某个用户的微博列表，包含他本人和他所有好友的所有微博
// 数据存储在 server 端
// 具体执行逻辑，参见本题的测试部分

class WeiboClient {
  /**
   * @param { userId, server } options
   */
  constructor(options) {
    const {userId, server} = options
    this.userId = userId
    this.server = server;
    // this.follows=[]
    this.server.articles[userId] = []
    this.server.follows[userId] = []
  }

  // 关注指定用户
  follow(userId) {
    if(!this.server.follows[this.userId].find(itm=>itm===userId)){
      this.server.follows[this.userId].push(userId)
    }
    // console.log('关注成功',this.userId,'-->',userId)
  }

  // 取关指定用户
  unfollow(userId) {
    this.server.follows[this.userId] = this.server.follows[this.userId].filter(itm=>{
        return itm !== userId
      })
    // console.log('取关成功',this.userId,'-->',userId)
  }

  // 发微博
  postNewWeibo(content) {
    // if(this.server.articles[this.userId]){
    // console.log(this.server.articles[this.userId])
      this.server.articles[this.userId].push(content)
    // }else{
    //   this.server.articles[this.userId] = [content]
    // }
  }

}

class WeiboServer {
  constructor() {
      this.articles = {}
      this.follows={}
  }

  // 获取对应用户微博列表
  getWeiboList(userId) {
     const list = []
      const userIds = [userId,...this.follows[userId]]
       // console.log(123123,[...this.follows[userId],userId])
         // [...this.follows[userId],userId]

      userIds.forEach(itm=>{
        list.push(...this.articles[itm])
      })
    return list;
    // return this.articles[userId]
  }
}

/*******测试部分*******/
 function doTest() {
  try {
    const wServer = new WeiboServer();
    const wClientA = new WeiboClient({
      userId: '001',
      server: wServer,
    });
    const wClientB = new WeiboClient({
      userId: '002',
      server: wServer,
    });
    const wClientC = new WeiboClient({
      userId: '003',
      server: wServer,
    });

    const WEIBO_CONTENT_A = 'Hello World';
    const WEIBO_CONTENT_B = '大家好，我是user 002';
    const WEIBO_CONTENT_C = '小程序怎么写？';
    wClientA.postNewWeibo(WEIBO_CONTENT_A);
    wClientB.postNewWeibo(WEIBO_CONTENT_B);
    wClientC.postNewWeibo(WEIBO_CONTENT_C);

    assert.deepStrictEqual(wServer.getWeiboList('001'), [WEIBO_CONTENT_A]);
    wClientA.follow('002');
    assert.deepStrictEqual(wServer.getWeiboList('001'), [WEIBO_CONTENT_A, WEIBO_CONTENT_B]);
    wClientA.follow('003');
    assert.deepStrictEqual(wServer.getWeiboList('001'), [WEIBO_CONTENT_A, WEIBO_CONTENT_B, WEIBO_CONTENT_C]);
    wClientA.unfollow('002');

    assert.deepStrictEqual(wServer.getWeiboList('001'), [WEIBO_CONTENT_A, WEIBO_CONTENT_C]);

    return '通过';
  } catch (ex) {
    return '不通过'+ex;
  }
}

console.log(doTest())