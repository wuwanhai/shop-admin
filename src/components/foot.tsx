import { defineComponent, ref } from '@vue/runtime-core'
// import {ref} from "vue";

interface propsType {
    msg: string
}

export default defineComponent({
   props:{
       msg: {
           type: String,
           required: true
       }
   },
   setup() {
       const count = ref(0)
       return (props: propsType) => (
           <div>
               <p>{props.msg}</p>
               <p>{count}</p>
           </div>
       )


   }
})
