<template>
  <div @click="clickHandle">
    <div class="userinfo" @click="bindViewTap">
      <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      >
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover">

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model">
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy">
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="scrollBox">
      <scroll-view class="hengScroll" :scroll-x="true">
        <span class="p1">啤酒</span>
        <span class="p1">火腿肠</span>
        <span class="p1">康师傅方便面</span>
        <span class="p1">瓜子</span>
        <span class="p1">花生民</span>
        <span class="p1">哈尔滨红肠</span>
        <span class="p1">卤鸡腿</span>
        <span class="p1">mini松花蛋</span>
        <span class="p1">Apple</span>
        <span class="p1">可口可乐</span>
        <span class="p1">大碗面一桶</span>
        <span class="p1">八宝粥</span>
      </scroll-view>
    </div>
    <!-- <scroll-view scroll-x class='hengScroll'>
      <span class='p1'>啤酒</span>
      <span class='p1'>火腿肠</span>
      <span class='p1'>康师傅方便面</span>
      <span class='p1'>瓜子</span>
      <span class='p1'>花生民</span>
      <span class='p1'>哈尔滨红肠</span>
      <span class='p1'>卤鸡腿</span>
      <span class='p1'>mini松花蛋</span>
      <span class='p1'>Apple</span>
      <span class='p1'>可口可乐</span>
      <span class='p1'>大碗面一桶</span>
      <span class='p1'>八宝粥</span>
    </scroll-view>-->
    <div class="tabTeam">
      <span
        class="perTab"
        :class="{perTabActive:currentTabIndex === index}"
        v-for="(tab,index) in switchTabs"
        :key="index"
        @click="switchTab(index)"
      >{{tab}}</span>
    </div>
    <div v-show="currentTabIndex === 0" class="tabContent">
      全部商机内容……
      <br>全部商机内容……
      <br>全部商机内容……
      <br>全部商机内容……
      <br>全部商机内容……
      <br>全部商机内容……
      <br>全部商机内容……
      <br>全部商机内容……
      <br>全部商机内容……
      <br>
    </div>
    <div v-show="currentTabIndex === 1" class="tabContent">
      我的订阅内容……
      <br>我的订阅内容……
      <br>我的订阅内容……
      <br>我的订阅内容……
      <br>我的订阅内容……
      <br>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      motto: "从page传递到组件中的值-咩哈哈",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      switchTabs: ["全部商机", "我的订阅"],
      currentTabIndex: 0
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    switchTab(index) {
      this.currentTabIndex = index;
      if (index === 0) {
        console.log("全部商机");
      } else {
        console.log("我的订阅");
      }
    }
  },
  created() {
    // let app = getApp()
    console.log("Vue钩子函数：tab-index-created");
  },
  mounted() {
    console.log("Vue钩子函数：tab-index-mounted");
  },
  onShow() {
    console.log("wx钩子函数：tab-index-onShow");
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
.perTab {
  transition: all 0.3s;
  box-sizing: border-box;
  float: left;
  width: 375rpx;
  line-height: 40rpx;
  border: 1rpx solid #4e4e4e;
  border-radius: 5rpx;
}
.perTabActive {
  background-color: #4e4e4e;
  color: #ffffff;
}
.hengScroll {
  height: 60rpx;
  /* width:750rpx; */
}
.p1 {
  display: inline-block;
  padding: 5rpx;
  margin-right: 10rpx;
  border: 0.5rpx solod #4e4e4e;
}
.scrollBox {
  width: 750rpx;
  height: 60rpx;
  overflow: hidden;
  background: #fff;
  white-space: nowrap;
}
</style>
