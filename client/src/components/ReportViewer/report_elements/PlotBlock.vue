<template>
    <div>
        <div id="fokk">
            <Chart/>
        </div>
    </div>
</template>

<script lang="js">
import embed from 'vega-embed';
import {functions} from '/src/utils';



export default {
    props: [
        'inp'
    ],
    inject: ['attachments'],
    data(){
        return {
            data: ''
        }
    },

    async mounted(){
        let src = this.inp.getAttribute('src');

        let idx = functions.get_attachment_idx(src);

        let data =atob(this.attachments[idx].file);
        console.log(data);
        this.data = data;

        // await vegaEmbed('#fokk', this.data, {actions:false});
    }
}
</script>