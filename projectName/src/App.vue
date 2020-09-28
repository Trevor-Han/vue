<template>
  <div>
    <form>
      <input type="text"  v-model="state2.stu.id">
      <input type="text"  v-model="state2.stu.name">
      <input type="text"  v-model="state2.stu.age">
      <input type="submit" value="新增" @click="addStu">
    </form>
    <ul>
      <li v-for="(stu,index) in state.stus"
          :key="stu.id"
           @click="sub(index)">
        {{stu.name}}--{{stu.age}}
      </li>
    </ul>
  </div>
</template>

<script>
  import useAddStudy from './add'
  import removeStudy from './rem'
export default {
  name: 'App',
  // 组合API入口函数
  setup(){
   /* let state = reactive({
      stus:[
        {id:1,name:"zs",age:18},
        {id:2,name:"xm",age:32},
        {id:3,name:"ls",age:45},
      ]
    });
    function sub(index) {
      state.stus = state.stus.filter((stu,idx) => idx !== index);
    }
    return {state,sub}*/
   let {state,sub} = removeStudy();
   let {state2,addStu} =  useAddStudy(state);
    return {state,sub,state2,addStu}
  }
}

</script>
