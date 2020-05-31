### 问题1

* 格式化有问题，右键格式化和vue本身有冲突


-- 项目说明

-- vue_app(根目录)
    -- dist                         // 打包后的线上文件
    -- node_modules                 // 安装包文件
    -- public                       // 静态资源文件夹，包括一个html文件等，不必在这里做任何静态文件的增加，最后打包时会通过webpack动态注入到index.html中
    -- src                          // 开发者需要编写的源代码
        -- assets                   // 静态资源：图片，字体，一些功能函数等
        -- components               // 组件
        -- service                  // ajax请求接口封装
        -- view                     // page页面组件)
        -- App.vue                  // 根组件，一级路由所在
        -- main.js                  // 启动文件
        -- router.js                // 路由文件
        -- store.js                 // Vuex状态管理器


