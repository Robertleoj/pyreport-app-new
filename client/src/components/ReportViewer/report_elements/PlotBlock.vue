<template>
    <div>
        <div id="fokk">
        </div>
    </div>
</template>

<script lang="js">
import embed from 'vega-embed';
import * as vega from 'vega';
import {functions} from '/src/utils';

var view;

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
    methods: {
        async render(spec){
            const result = await embed('#fokk', spec);
            console.log(result.view);
        },

        getData(){
            let src = this.inp.getAttribute('src');

            let idx = functions.get_attachment_idx(src);

            let data =atob(this.attachments[idx].file);
            console.log(data);
            data = JSON.parse(data);
            console.log(data);
            this.data = data;
            return data;
        }
    },

    async mounted(){
        let src = this.inp.getAttribute('src');

        let idx = functions.get_attachment_idx(src);

        let data =atob(this.attachments[idx].file);
        console.log(data);
        data = JSON.parse(data);
        console.log(data);
        this.data = data;

        await this.render(data);

        // await vegaEmbed('#fokk', this.data, {actions:false});
    }
}
</script>

<style lang="css" scoped>
*,*::before,*::after {
    box-sizing: content-box
}
</style>