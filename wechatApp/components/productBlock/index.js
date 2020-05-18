var myBehavior = require('../behaviors/testBehaviors')

Component({
    // 数据源之一
    properties: {
        // 这里定义了innerText属性，用于父向子组件传递数据
        innerText: {
            type: Array,
            value: [],
        }
    },
    // 数据源之二
    data: {
        // 这里是一些组件内部数据
        dataList: [],
        compData: '我是组件信息1'
    },
    // 数据源之三
    observers: {

    },
    // 生命周期（2.2.3开始在lifetimes中，推荐写法）
    lifetimes: {
        // 在组件实例刚刚被创建时执行,此时无法访问page传递下来的数据
        created  () {
            console.log('created-组件被创建好')
            console.log('组件自己数据：', this.data.compData)
            this.setData({compData: '我是组件信息2'})
            console.log('组件自己数据：', this.data.compData)
            // const query_dom = this.createSelectorQuery()
            // const lifeTest = query_dom.select('.lifeTest').boundingClientRect()
            // console.log('组件内 dom:', lifeTest)
        },
        // 在组件实例进入页面节点树时执行
        attached () {
            console.log('attached-组件刚刚进入页面节点树');
        },
        // 在组件在视图层布局完成后执行，此时可以访问props
        ready() {
            console.log('组件ready')
            console.log('组件传递的父级数据：',this.properties.innerText)
            const query_dom = this.createSelectorQuery()
            const lifeTest = query_dom.select('.lifeTest').boundingClientRect()
            lifeTest.exec(function (res) {
                console.log("2" +res[0])       // #the-id节点的上边界坐
              })
        },
        // 在组件实例被移动到节点树另一个位置时执行
        moved() {
            console.log('组件ready')
        },
        // 在组件实例被从页面节点树移除时执行
        detached () {
            console.log('detached-移除组件后');
        },
        // 组件方法抛出错误时
        error () {
            console.log('组件报错')
        }

    },
    // 类似于mixins和traits的组件间代码复用机制
    behaviors: [myBehavior],
    methods: {
        // 这里是一个自定义方法
        customMethod() { },
        throwDataToFater() {
            this.triggerEvent('fatherEvent',{'forFather':'苹果'});
        },
        jumpToDetail(event) {
            console.log(event)
            wx.navigateTo({
                url: '/pages/listDetail/listDetail',
                success: (result) => {
                    
                },
                fail: () => {},
                complete: () => {}
            });
              
        }
    }
})