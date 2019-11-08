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
        dataList: []
    },
    // 数据源之三
    observers: {

    },
    // 生命周期（2.2.3开始在lifetimes中，推荐写法）
    lifetimes: {
        created  () {
            console.log('created-组件被创建好')
        },
        attached () {
            console.log('attached-组件刚刚进入页面节点树');
        },
        detached () {
            console.log('detached-移除组件后');
        },
    },

    ready() {
        console.log('组件ready')
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