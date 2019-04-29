<!--
	切换登录方式页
-->
<template>
  <div class="feedbackPage">
    <div class="inputArea pickerViewInput" @click="openPickerView">
      <span class="star">*</span>
      <div class="inputValue">{{type_value?type_value:'选择反馈类型'}}</div>
      <img src="/static/images/user.png" class="rotateArrow" alt>
    </div>
    <textarea
      placeholder="详情描述（限150字）"
      maxlength="150"
      name="feedback_des"
      id="feedback_des"
      cols="30"
      rows="10"
    ></textarea>
    <div class="inputArea contactNum">
      <span class="star">*</span>
      <label class="labelForInput" id="num_label" for="phone_num">联系方式</label>
      <input
        class="inputValue"
        id="phone_num"
        name="phone_num"
        type="number"
        placeholder="输入手机号"
        maxlength="11"
      >
    </div>
    <!--pickerview-->
    <div class="pickerViewArea" :class="{pickerViewAreaActive:show_picker_view}">
      <div class="pickerViewHead">
        <span class="cancelButton" @click="cancelPickerView">取消</span>
        <span class="confirmButton" @click="submitPickerView">确定</span>
      </div>
      <picker-view
        class="pickerView"
        indicator-style="height: 40px;"
        :value="init_value"
        @change="pickerChange"
      >
        <picker-view-column>
          <div class="perItem" v-for="(item,index) in columuOne" :key="index">{{item}}</div>
        </picker-view-column>
      </picker-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columuOne: [
        "无法打开小程序",
        "小程序闪退",
        "卡顿、司机、加载慢",
        "其他异常",
        "意见与建议"
      ],
      show_picker_view: false,
	  init_value: [0],
	  current_value: [0],
	  type_value: ''
    };
  },

  methods: {
    pickerChange(e) {
		console.log(e);
		this.current_value = e.mp.detail.value;
		this.init_value = this.current_value;
    },
    openPickerView() {
		this.init_value = [0];
      	this.show_picker_view = true;
    },
    cancelPickerView() {
      	this.show_picker_view = false;
    },
    submitPickerView() {
		this.type_value = this.columuOne[this.current_value[0]];
		console.log(this.type_value)
      	this.show_picker_view = false;
    }
  },
  created() {},
  mounted() {},
  onShow() {}
};
</script>

<style scoped>
#feedback_des {
  box-sizing: border-box;
  width: 100%;
  height: 200rpx;
  border-top: 1rpx solid #efefef;
  border-bottom: 1rpx solid #efefef;
  background-color: #ffffff;
  padding: 20rpx;
}
.inputArea {
  overflow: hidden;
  height: 80rpx;
  padding-left: 20rpx;
  padding-right: 20rpx;
  background-color: #ffffff;
}
.star {
  float: left;
  margin-right: 10rpx;
  margin-top: 30rpx;
  color: red;
}
.labelForInput {
  float: left;
  margin-top: 26rpx;
}
.inputValue {
  float: left;
  margin-top: 26rpx;
  border: 0;
}
#phone_num {
  margin-top: 24rpx;
  margin-left: 20rpx;
}
.rotateArrow {
  float: right;
  width: 30rpx;
  height: 30rpx;
  transition: all 0.3s;
  margin-top: 30rpx;
  transform: rotateZ(0deg);
}
.rotateArrowActive {
  transform: rotateZ(180deg);
}
.pickerViewArea {
  background-color: #ffffff;
  box-shadow: 0rpx 0rpx 20rpx 2rpx rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 1;
  bottom: -410rpx;
  width: 100%;
  transition: all 0.3s;
}
.pickerViewAreaActive {
  bottom: 0;
}
.pickerViewHead {
  padding-left: 20rpx;
  padding-right: 20rpx;
  overflow: hidden;
  border-bottom: 2rpx solid #000000;
}
.pickerViewHead span {
  height: 100rpx;
  line-height: 100rpx;
}
.cancelButton {
  float: left;
}
.confirmButton {
  float: right;
}
.pickerView {
  height: 300rpx;
  width: 100%;
  /* display: none; */
}
.perItem {
  text-align: center;
  /*这里的值和picker-view上写的样式成倍数关系*/
  line-height: 80rpx;
}
</style>
