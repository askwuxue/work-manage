# work manage

## 项目构建

1. 初始化项目

  `create-react-app work-manage`

2. 安装配置 prettier, 有几个坑需要避免一下。

  - `npm install --save-dev --save-exact prettier`  OK

  - `echo {}> .prettierrc.json`

​    注意: 使用`echo`创建`.prettierrc.json`, 如果在window机器上，可能会出现，创建出的该文件不是`utf8`格式的。所以后面会报出错误并且难以排查。可以将`.prettierrc.json`文件格式改为`utf8`或者手动创建，不使用`echo`命令

  - 配置Git hook失败
  