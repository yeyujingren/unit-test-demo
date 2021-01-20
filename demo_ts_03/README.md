### 让jest支持typescript

- 通过babel去解析
```Shell
yarn add --dev @babel/preset-typescript @types/jest
```
- 配置babel
```JavaScript
// .babelrc
{
  // "presets": ["env", "@bable/preset-typescript"]
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-typescript",
  ]
}
```

### demo分布
- test/index.test jest支持typescript