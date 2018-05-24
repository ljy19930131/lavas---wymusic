# lavas-wyMusic

> 这是一个为了学习 Lavas PWA 而写的demo。

启动项目之前先安装 [lavas](https://lavas.baidu.com/) 和 [网易云音乐API](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E8%8E%B7%E5%8F%96%E9%9F%B3%E4%B9%90-url)

    $ npm install lavas -g

    $ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git

## 项目相关命令
> 其实就是 lavas 命令


``` bash
# 安装工程依赖
npm install

# 在本地启动调试 server
lavas dev

# 打包
lavas build

# 启动编译后的代码，注意，需要在 dist 目录中启动
cd dist
lavas start

```


## npm 相关命令

``` bash
# 安装工程依赖
npm install

# 在本地启动调试 server
npm run dev

# 构建线上生产环境产物
npm run build

# 启动编译后的代码，注意，需要在 dist 目录中启动，仅 SSR 模式下有效
npm run start

# 检查代码是否符合规范
npm run lint
```

Lavas 工程模版基于 [vue-template-vue](https://github.com/lavas-project/lavas-template-vue/) 模版的 `release-*` 分支创建。
如果想要了解具体如何玩转整个 Lavas 创建的 PWA 工程, 请查看[Lavas 官网教程](https://lavas.baidu.com/guide)。

## Changelog

详细的 Changelog 请看 [Release Notes](https://github.com/lavas-project/lavas-template-vue/releases)
