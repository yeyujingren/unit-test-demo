### 让jest支持es6 import语法

- 通过babel去解析
```Shell
yarn add --dev babel-jest @babel/core @babel/preset-env
```
- 配置babel
```JavaScript
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### demo分布
- test/index.test 常见断言demo
- test/async.test 异步请求demo
