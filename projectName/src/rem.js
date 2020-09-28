import {reactive} from 'vue';
function removeStudy() {
    let state = reactive({
        stus:[
            {id:1,name:"zs",age:18},
            {id:2,name:"xm",age:32},
            {id:3,name:"ls",age:45},
        ]
    });
    function sub(index) {
        state.stus = state.stus.filter((stu,idx) => idx !== index);
    }
    return {state,sub}
}
export default removeStudy;