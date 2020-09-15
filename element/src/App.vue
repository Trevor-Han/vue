<template>
  <div id="app">
    <el-progress :percentage="0"></el-progress>
    <el-progress :percentage="70"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider :show-tooltip="false" v-model="value3"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider :format-tooltip="formatTooltip" v-model="value4"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider disabled v-model="value5"></el-slider>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>

<style>
</style>
