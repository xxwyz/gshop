# day01
## 1. 项目开发准备
    项目描述
		1)此项目为外卖Web App (SPA)
		2)包括商家, 商品, 购物车, 用户等多个子模块
		3)使用Vue全家桶+ES6+Webpack等前端最新最热的技术
		4)采用模块化、组件化、工程化的模式开发
    技术选型
		1). 前端数据处理/交互/组件化: vue/vue-router/vuex/mint-ui/swiper
		2). 前后台交互: axios/postman/mockjs
		3). 模块化: es6/babel
		4). 项目构建/工程化: webpack/脚手架/eslint
		5). css预编译器: stylus
    API接口
    

## 2. 开启项目开发
    使用脚手架创建项目
    安装所有依赖/指定依赖
    开发环境运行
    生产环境打包与发布

## 3. 搭建项目整体界面结构
    stylus的理解和使用
        结构化, 变量, minxin(混合)
    vue-router的理解和使用
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
        <router-link>: 路由链接
        <router-view>: 显示当前路由组件
    项目路由拆分
    底部导航组件: FooterGuide
    导航路由组件: Msite/Search/Order/Profile

## 4. 抽取组件
    头部组件: HeaderTop, 通过slot来实现组件通信标签结构
    商家列表组件: ShopList

## 5. 登陆路由组件
     静态组件
     FooterGuide的显示/隐藏: 通过路由的meta
     
## 6. 前后台交互
    后台接口测试
    ajax函数封装: axios + promise
    接口请求函数封装
    
# day02
## 1. 使用vuex管理状态

## 2. 异步显示数据
    1). 地址
    2). 食品分类轮播
    3). 商家列表
    
## 3. 开发Star组件
    
## 4. login组件
    1). 切换登陆方式
    2). 验证手机号(以1开头, 11位数字)
    3). 倒计时
    4). 密码的显示/隐藏切换
    5). 一次性图片验证码