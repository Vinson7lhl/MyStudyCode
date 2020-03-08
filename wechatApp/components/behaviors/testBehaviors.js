module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String,
      value: 'behavior 的property 值：100分' // 默认值，从外部传入
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached() { },
  methods: {
    myBehaviorMethod: function () {
      console.log('log from my-behavior.js')
    }
  }
})