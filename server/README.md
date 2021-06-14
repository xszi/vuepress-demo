### 启动mysql数据库

~~~
cd d:\mysql8\bin
mysql -u root -p
~~~

### 关于跨域

如果后台设置httpOnly: true，则前端js不能操作cookie，即domain.cookie不能获取到，只能能浏览器自动带上。

cors库设置 credentials: true 解决关于跨域

### XSRF (跨站请求伪造)

调用后台接口请求返回一个token，保存在localstorage（可以设置过期时间）中，再通过请求header设置，把token带到后台进行身份验证。
比如：
```
{ header['x-token']: 'GSKDKLSLSAADSKLSLS' }
```

### Skema插入数据到mysql

使用sequelize库

