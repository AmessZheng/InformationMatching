<!--
常用事件监听：
@click  点击事件，按钮等
@change 切换事件，选择器、单选框、复选框、开关、滑块、时间日期选择器等
@input  输入事件，输入框等
@focus  获得焦点事件，输入框、计数器、选择器、时间日期选择器等
@blur   失去焦点事件，输入框、计数器、选择器、时间日期选择器等
@select 选中输入框内的文字事件，输入框等
-->
<template>
  <div>
    <el-form :inline="true" label-width="150px" label-position="right" >
      <el-form-item prop="username" label="姓名">
        <!--1.双向数据绑定用v-model；-->
        <!--2.监听输入事件用@input，即v-on:input，当用户每输入一个字符时执行一次showName方法，参数即为当前输入框内的值-->
        <el-input v-model="username" @input="showName"></el-input>
      </el-form-item>
      <el-form-item prop="sex" label="性别">
        <!--监听选择器的值变化事件，当用户切换选项时执行一次selectSex方法-->
        <el-select v-model="sex" @change="selectSex">
          <el-option value="0" label="男"></el-option>
          <el-option value="1" label="女"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <!--监听滑块的值变化事件，当值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）执行一次showSliderNum方法-->
    <el-slider v-model="slider" show-input @change="showSliderNum"></el-slider>
    <!--监听按钮的点击事件,每点击一次执行一次clickBtn方法-->
    <el-button class="green" @click="clickBtn">点我+1</el-button>
    <el-card style="margin-top: 20px;">
      <div slot="header">
        <span>键入信息</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div style="line-height: 35px;">
        <li>名字是：{{username}}</li>
        <li>名字2是：{{username2}}</li>
        <li>性别是：{{sexLabel}}</li>
        <li>滑块数字是：{{sliderNum}}</li>
        <li>现在的点击次数是：{{clickNum}}</li>
      </div>
    </el-card>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        username: 'Allen',
        username2: '',
        sex: '',
        sexLabel: '',
        slider: 0,
        sliderNum: '',
        clickNum: 0
      }
    },
    mounted() {

    },
    created() {
      this.a = 2;
    },
    methods: {
      showName(val) {
        this.username2 = `${val} Doctor`;
      },
      selectSex(val) {
        switch (val) {
          case '0':
            this.sexLabel = '男';
            break;
          case '1':
            this.sexLabel = '女';
            break;
          default:
            break;
        }
      },
      showSliderNum(val) {
        this.sliderNum = val;
      },
      clickBtn() {
        this.clickNum += 1;
      }
    }
  }
</script>

<style scoped>

</style>
