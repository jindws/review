# 题目一，在src下建立question1.js，完成下面任务
    ```js
   const users = {
      'u001': {id: 'u001', name: 'Jeff', email: 'jeff@jeff.jeff', organizationId: 'o001'},
      'u002': {id: 'u002', name: 'Joan', email: 'joan@joan.joan', organizationId: 'o002'},
    };
    const organizations = {
      'o001': {id: 'o001', name: 'Operations'},
      'o002': {id: 'o002', name: 'Marketing'},
    };
 
    function getUserById(id){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(users[id]);
        }, 500);
      });
    }
    function getOrganizationById(id){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(organizations[id]);
        }, 500);
      });
    }
```
We want to make a function that combines getUserById and getOrganizationById two calls into one, the function output an object that looks like the following:
    ```
{
  id: 'u001',
  name: 'Mike',
  email: 'mike@mike.mike',
  organizationId: 'o001'
  organization: {
    id: 'o001',
    name: 'Research and Development'
  }
}
```
We can't get the organization object until we have the user object and the organization id. This means that we have to request the user, wait until we have it, then request the organization, wait for it to return, and return a combined object.

# 题目二，在src目录里创建question2.html，实现下面任务
实现多主题（theme）切换效果
样例展示：
![theme1](https://i.bmp.ovh/imgs/2022/03/9527fcf7c28c8578.png)
![theme2](https://i.bmp.ovh/imgs/2022/03/c9448159c8c5d5a9.png)
![theme3](https://i.bmp.ovh/imgs/2022/03/e662766fda901946.png)

目标：
- 主题（theme）切换按钮的滑块在点击时会有滑动效果
- 主题色可跟随选择进行切换
- 菜单栏在鼠标悬浮时进行背景色的加强

