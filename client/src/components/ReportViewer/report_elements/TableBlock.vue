<template>
    <div>
        <div v-html="src()">
        </div>
    </div>
</template>


<script lang="js">
import {functions} from '/src/utils';

export default {
    inject: ['attachments'],
    props: ['inp'],
    created(){
        console.log(this.inp);
        console.log(this.attachments);
    },

    methods:{
        src(){
            let src = this.inp.getAttribute('src');
            console.log(src);
            let idx = functions.get_attachment_idx(src);
            console.log(idx);
            let data = atob(this.attachments[idx].file);
            return data;
        }
    }
}

</script>