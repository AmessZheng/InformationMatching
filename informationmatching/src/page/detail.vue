<template>
  <div v-if="b">{{a}}</div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        a: '1',
        b: false
      }
    },
    mounted() {

    },
    created() {
      this.a = 2;
    },
    methods: {}
  }
</script>

<style scoped>

</style>
