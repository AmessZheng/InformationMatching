<template>
  <div class="demo">
    {{msg}}
    <div v-html="html"></div>
    <div>{{a === 1 ? a : b}}</div>
    <button v-bind:disabled="isDisabeld">按钮</button>
    <button v-on:click="btnSubmit">点我</button>
    <div>arr: {{arr}}</div>
    <div>reversed arr: {{arrReversed}}</div>
    <div>c = {{c}}</div>
    <div>
      <input type="text" v-model.number="a">+
      <input type="text" v-model.number="b">=
      <input type="text" v-model.number="c">
      <p>{{computeTip}}</p>
    </div>
    <div>
      <button @click="showStudents">{{showStudentsFlag ? '隐藏学生列表' : '显示学生列表'}}</button>
      <ul v-if="showStudentsFlag">
        <li v-for="(item, i) in students" :key="i">学生{{i+1}}的名字是：{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      msg: 'Hello World',
      html: '<em style="color: red">Hello World</em>',
      isDisabeld: true,
      a: 2,
      b: 1,
      c: 3,
      arr: '1,2,3,4,5',
      computeTip: 'please change the data',
      showStudentsFlag: false,
      students: ['Tom', 'Alice', 'Jane', 'Jackey', 'Mary']
    }
  },
  computed: {
    arrReversed () {
      return this.arr.split(',').reverse().join(',')
    }
  },
  watch: {
    a (newVal, oldVal) {
      this.computeTip = 'computing……'
      this.computeC()
    },
    b (newVal, oldVal) {
      this.computeTip = 'computing……'
      this.computeC()
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {
    btnSubmit () {
      alert('我被点击了')
      this.arr = '2,3,4,5,6'
    },
    computeC () {
      const _this = this
      setTimeout(() => {
        _this.c = _this.a + _this.b
        _this.computeTip = 'computed!'
        setTimeout(() => {
          _this.computeTip = 'please change the data'
        }, 1000)
      }, 2000)
    },
    showStudents () {
      this.showStudentsFlag = !this.showStudentsFlag
    }
  }
}
</script>

<style scoped>
  .demo {
    width: 80%;
    margin: 50px auto;
  }
</style>
