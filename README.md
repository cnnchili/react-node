# react-node
创建项目的步骤
1.npm install -g create-react-app  全局安装脚手架
2.create-react-app admain-exercise 初始化项目文件
3.运行命令 npm start 打包命令 npm run build
4.本地测试运行需要 npm install -g serve
5.serve用来跑打包文件。先npm run build 再 serve build
6.在github上面创建仓库，用于保存项目
  6.1 查看git文件是否存在，不存在 git init
  6.2 提交代码 git add . 交到缓存区
  6.3 提交代码 git commit -m "init app"
  6.4 提交到github git remote add origin GitHub地址
  6.5 提交到对应分支 git push origin master