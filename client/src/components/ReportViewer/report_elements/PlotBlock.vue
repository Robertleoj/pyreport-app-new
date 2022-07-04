<template>
    <div>
        <div id="fokk">
        </div>
    </div>
</template>

<script lang="js">
// import vegaEmbed from 'vega-embed';
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
        async render(data){
            console.log(vega.parse(data));
            view = new vega.View(vega.parse(data),{
                renderer: 'svg',
                container: '#fokk',
                hover: true
            }).runAsync();
        }
    },

    async mounted(){
        let src = this.inp.getAttribute('src');

        let idx = functions.get_attachment_idx(src);

        let data =atob(this.attachments[idx].file);
        console.log(data);
        data = JSON.parse(data);
        console.log(data);

        this.render(data)
            .catch(err => console.error(err));


        // await vegaEmbed('#fokk', this.data, {actions:false});
    }
}
</script>