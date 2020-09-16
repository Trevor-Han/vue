<template>
    <div class="header">
      <div class="header-left"></div>
      <div class="header-title">酷我音乐</div>
      <div class="header-right"></div>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped lang="scss">
.header{
  width: 100%;
  height: 100px;
  background: #f00;
  display: flex;
  justify-content: space-between;
  .header-left,.header-right{
    width: 84px;
    height: 84px;
    background: #000;
    margin-top: 8px;
  }
  .header-title{
    text-align: center;
    line-height: 100px;
  }
}
</style>
