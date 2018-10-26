<template>
  <div class="login-bg">
    <div class="login-layer">
      <div class="login-box demo-input-suffix" @keyup.enter="submitLogin('loginForm')">
        <div class="login-logo" style="margin-bottom:20px">Information Matching</div>
        <el-form ref="loginForm" :model="loginForm" :rules="rules" label-position="right" status-icon size="medium" label-width="0">
          <el-form-item prop="username">
            <el-input placeholder="请输入用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="blue" @click="submitLogin('loginForm')" style="width: 100%;margin-left:0;margin-top:10px">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    data () {
      const validateusername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      const validatepassword = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { validator: validateusername, trigger: 'blur' }
          ],password: [
            { validator: validatepassword, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitLogin(form) {
        this.$refs[form].validate((valid) => {
          if(valid) {
            this.$router.push('/index');
            /*this.$axios.post('/login/ajaxLogin', {userName: this.loginForm.username, password: this.loginForm.password}).then((res)=>{
              if(res.code === 0) {
                this.$router.push('/index');
              } else {
                this.$message.warning('登录失败');
              }
            })*/
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
<style>
  .login-bg {
    width: 100%;
    height: 100%;
    background: url("../assets/img/login_bg.png") no-repeat center;
    background-size: cover;
    position: relative;
  }
  .login-layer {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    position: absolute;
  }
  .login-box {
    width: 300px;
    height: 320px;
    background: rgba(255,255,255,.5);
    padding: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -150px;
    border-radius: 10px;
  }
  .login-logo {
    font-size: 28px;
    letter-spacing: 2px;
    text-align: center;
    line-height: 35px;
  }
  .login-sign {
    font-size: 26px;
    text-align: center;
    line-height: 60px;
    color: #409eff;
  }
  /*.el-checkbox__label{
    color:#fff !important;
    font-weight:bold;
  }*/
</style>
