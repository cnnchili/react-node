// const { override, fixBabelImports} = require('customize-cra')

// module.exports = override(
//   // 针对antd实现按需打包 即import谁打包谁（使用babel-plugin-import）
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: 'css' // 自动打包相关的样式
//   })
// )

// 下载 less less-loader后修正
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 使用lessloader对源码中的less的变量进行重新指定
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);