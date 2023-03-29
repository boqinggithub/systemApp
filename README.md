# 基于vant版本的多项目集成

## 多项目配置

1. 新增env文件 如 新建env.czy,文件内容为：
 ```
  VUE_APP_MODEL = 'czy'
 ```
2. 新增modules/  api router  store 三个文件的项目入口
 ```
  // 这里配置所有项目路由
  const getrouterConfig = {
    base: () => require('./base/router').default,
    czy: () => require('./czy/router').default
  }
  const ENV = process.env.VUE_APP_MODEL
  const routConfig = getrouterConfig[ENV] ? getrouterConfig[ENV]() : getrouterConfig.base()
  console.log(routConfig, '获取router配置')
 ```
3. 新增package.json 运行-打包入口
```
  "base": "vue-cli-service serve --mode base",
  "czy": "vue-cli-service build && node ./build/build.js --mode czy",
  "build-czy": "vue-cli-service build --mode czy",
```