<template>
  <div id="app" style="width: 100%; min-height: 100%; height: 100%;">
    <el-container style="height: 100%" v-if="!isLogin">
      <el-header style="height: 80px;">Information Matching</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="$route.path" :default-openeds="defaultOpen" router>
            <el-menu-item :index="'index'">
              <template slot="title"><i class="el-icon-menu"></i>首页</template>
            </el-menu-item>
            <el-menu-item :index="'analysis'">
              <template slot="title"><i class="el-icon-menu"></i>分析</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main style="margin-left: 10px;">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
    <div style="width:100%;height:100%" v-if="isLogin">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/style.css'

  export default {
    name: 'App',
    data() {
      return {
        defaultOpen: ['/'],
        isLogin: false
      }
    },
    created() {
      if(this.$route.path === '/') {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
  }
  body > .el-container {
    margin-bottom: 60px;
  }
  .el-header {
    background-color: #3d597c;
    color: #fff;
    text-align: center;
    line-height: 80px;
    font-size: 18px;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu{
    background-color: #ffffff !important;
    border-right: none !important;
  }
  .el-menu-item:focus, .el-menu-item:hover,.el-menu-item.is-active {
    background-color: #ffffff !important;
    border-right: 3px solid #2eb398;
  }
  .el-menu-item, .el-submenu__title {
    line-height: 45px;
    height: 45px;
    border-bottom: 1px solid #e3e3e3;
    background-color: #f7f7f7 !important;
  }
  .el-submenu.is-active .el-submenu__title {
    border-bottom: none;
  }
  .aside-icon {
    margin-right: 10px;
    font-size: 16px;
  }
  .el-aside {
    background-color: #f7f7f7;
    color: #333;
    text-align: center;
    line-height: 200px;
    border-right: 1px solid #e3e3e3;
  }
</style>
