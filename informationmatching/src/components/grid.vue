<template>
  <el-table style="width: 100%;text-align: center;" :data="rowData" stripe highlight-current-row>
    <template v-for="(item,i) in headers">
      <template v-if="item.image">
        <el-table-column align="center" :prop="item.prop" :label="item.label" :width="item.width">
          <template slot-scope="scope">
            <img :src="scope.row.img" width="40" height="40" />
          </template>
        </el-table-column>
      </template>
      <template v-if="!item.image">
        <el-table-column align="center" :prop="item.prop" :label="item.label" :width="item.width" style="color: red"></el-table-column>
      </template>
    </template>
    <el-table-column prop="operations" :fixed="operations[0].fixed" label="操作" v-if="operations && operations.length > 0" :width="operations[0].width">
      <template slot-scope="scope">
        <template v-for="(value, i) in operations">
          <template v-if="value.type === 'special'">
            <el-button v-if="scope.row[value.speKey]" :key="i" size="mini" :class="value.className" :title="value.title" @click="value.clickFn(scope.$index, scope.row)" :style="value.style">
              <i :class="value.icon"></i>{{value.label}}
            </el-button>
          </template>
          <template v-if="value.type != 'special'">
            <el-button :key="i" size="mini" :class="value.className" :title="value.title" @click="value.clickFn(scope.$index, scope.row)" :style="value.style">
              <i :class="value.icon"></i>{{value.label}}
            </el-button>
          </template>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import Vue from 'vue';


export default {
  data() {
    return {

    }
  },
  props: ['headers','operations','rowData'],
  methods: {

  }
}
</script>
<style>
  .el-table th>.cell {
    text-align: center;
  }
</style>
