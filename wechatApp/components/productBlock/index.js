Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: Array,
            value: [],
        }
    },
    data: {
        // 这里是一些组件内部数据
        dataList: []
    },
    lifetimes: {
        created  () {
            console.log('组件被创建好')
        },
        attached () {
            console.log('组件刚刚进入页面节点树');
        },
        detached () {
            console.log('移除组件后');
        },
    },
    methods: {
        // 这里是一个自定义方法
        customMethod() { },
        throwDataToFater() {
            this.triggerEvent('fatherEvent',{'forFather':'苹果'});
        }
    }
})