
# topFullStack
NodeJs + VueJs全栈开发

# service
nestJs 
// 全局安装 nest脚手架
npm install -g @nestjs/cli 

// 创建项目
nest new server 

// 生成一个admin的后端项目
nest g app admin

// 启动项目（子项目）
nest start -w admin(项目名)

// 生成数据库
nest g lib db

// 创建控制器
nest g co -p 子目录名 控制器名字

// 创建module
nest g mo -p 子目录名 module名字

// 安装数据库模块
yarn add nestjs-typegoose @typegoose/typegoose mongoose @types/mongoose

# client
// 转换成typescript
vue add typescript

// 安装axios @types/axios 类型定义 提示代码的
yarn add axios @types/axios