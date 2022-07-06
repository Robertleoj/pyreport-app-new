<template>
    <div class="plot-container">
        <div>
            <div class="plotblock">
                <div id="fokk" class="vegaplot">
                </div>
            </div>
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
            const result = await embed('#fokk', spec, false);
            console.log(result.view);
        },

        getData(){
            let src = this.inp.getAttribute('src');
            let idx = functions.get_attachment_idx(src);

            let data =atob(this.attachments[idx].file);
            data = JSON.parse(data);
            return data;
        }
    },

    async mounted(){
        await this.render(this.getData());
    }
}
</script>

<style lang="css" scoped>
.plotblock {
    margin: auto;
    all:initial;
}

.plotblock * {
    all:unset;
}
.plot-container {
    width:50%;
    margin: auto;

}


.plotblock::before,
.plotblock::after,
.plotblock *::before,
.plotblock *::after {
    all:unset;
}

</style>