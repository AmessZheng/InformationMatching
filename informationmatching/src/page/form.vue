<template>
  <div>
    <el-form ref="form" :model="data" :rules="rules" size="small" status-icon label-width="90px">
      <el-form-item prop="name" label="姓名：">
        <el-input v-model="data.name" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item prop="age" label="年龄：">
        <el-input v-model.number="data.age" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item prop="sex" label="性别：">
        <el-radio v-model="data.sex" label="0">男</el-radio>
        <el-radio v-model="data.sex" label="1">女</el-radio>
      </el-form-item>
      <el-form-item prop="hobby" label="爱好：">
        <el-select v-model="data.hobby" placeholder="请选择" style="width: 200px">
          <el-option v-for="(item, i) in hobbyList" :key="i" :value="item.code" :label="item.label"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-row style="text-align: center">
      <el-button type="primary" @click="save"><i class="iconfont icon-save" style="margin-right: 8px;"></i>保存</el-button>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      data: {
        name: '',
        age: 0,
        sex: 0,
        hobby: 0
      },
      hobbyList: [
        {code: 1, label: '唱歌'},
        {code: 2, label: '画画'},
        {code: 3, label: '运动'},
        {code: 4, label: '旅行'},
        {code: 5, label: '阅读'},
        {code: 6, label: '电竞'}
      ],
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        hobby: [
          { required: true, message: '请选择爱好', trigger: 'change' }
        ],
      }
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {
    save () {
      this.$refs.form.validate((valid) => {
        if(valid) {
          console.log(this.data)
          this.$axios.post('/submit', this.data).then((res) => {
            if(res.code === 0) {
              this.$message.success('表单提交成功')
            } else {
              if(res.message) {
                this.$message.error(res.message)
              } else {
                this.$message.error('表单提交失败')
              }
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
