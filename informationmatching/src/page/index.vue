<template>
  <div>
    <!--使用组件，数据以属性方式传入子组件-->
    <grid :headers="headers" :rowData="rowData" :operations="operations"></grid>
  </div>
</template>

<script>
  import Vue from 'vue';
  import grid from '../components/grid.vue';     // 引入表格组件

  export default {
    data() {  //  数据区，以对象形式return，固定格式
      return {
        headers: [
          {prop: 'id', label: '餐馆ID'},
          {prop: 'name', label: '餐馆名称'},
          {prop: 'discount', label: '实时折扣'},
          {prop: 'discount', label: '实时折扣'}
        ],
        rowData: [
          {id: 1, name: '餐馆1', discount: '0.3'}
        ],
        operations: [
          {
            icon: 'el-icon-view',
            label:'查看详情',
            fixed: 'right',
            width: '300px',
            className: 'green',
            title: '查看详情',
            clickFn: (index, data) => {
              this.$router.push({
                name: 'detail',
                query: {
                  id: data.id
                }
              })
            }
          },
        ]
      }
    },
    mounted() {

    },
    created() {

    },
    methods: {},
    components: {grid}    //  组件声明
  }
</script>

<style scoped>

</style>
