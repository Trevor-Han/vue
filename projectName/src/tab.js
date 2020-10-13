import {ref} from 'vue';
function addTab(state) {
    let age = ref(18);
    function tab() {
        age.value = 666;
    }
    return {age,tab}
}
export default addTab;