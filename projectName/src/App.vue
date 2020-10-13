<template>
  <div>
    <p>{{age}}</p>
    <button @click="tab">按钮</button>
  </div>
</template>

<script>
  import addTab from './tab'
export default {
  name: 'App',
  // 组合API入口函数
  setup(){
    let {age,tab} = addTab();
    return{age,tab};

  }
}

</script>
