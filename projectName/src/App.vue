<template>
  <div>
      <div class="inv-h-w">
          <div :class="['inv-h',Inv==0?'inv-h-se':'']" @click="changeTab(0)">选项一</div>
          <div :class="['inv-h',Inv==1?'inv-h-se':'']" @click="changeTab(1)">选项二</div>
          <div :class="['inv-h',Inv==2?'inv-h-se':'']" @click="changeTab(2)">选项三</div>
      </div>
      <div class="" v-show="Inv == 0">第一个选项</div>
      <div class="" v-show="Inv == 1">第二个选项</div>
      <div class="" v-show="Inv == 2">第三个选项</div>
  </div>
</template>

<script>
    import {ref} from 'vue';
export default {
  name: 'App',
  // 组合API入口函数
  setup(){
      let Inv = ref(0);
      function changeTab(Inv) {
          this.Inv = Inv;
      }
      return {Inv,changeTab}
  }
}

</script>

<style>
    .inv-h-w{
        background-color: #FFFFFF;
        height: 80px;
        display: flex;
        justify-content: space-around;
    }
    .inv-h{
        font-size: 16px;
        text-align: center;
        color: #333;
        height: 80px;
        line-height: 80px;

    }
    .inv-h-se{
        color: #00bebe;
        border-bottom: 4px solid #00bebe;
    }
</style>
