<template>
    <div>
        <component
            :is="comp()"
            :inp="data()"
        ></component>
    </div>
</template>


<script lang="js">
import TableBlock from './TableBlock.vue';
import PlotBlock from './PlotBlock.vue';

export default {
    props: [
        'block_element'
    ],
    created(){
        console.log(typeof this.block_element);
        console.log(this.block_element);
        console.log(this.block_element.tagName);
    },
    methods:{
        comp(){
            switch(this.block_element.tagName){
                case 'Table':
                    return TableBlock;
                case 'Plot':
                    return PlotBlock;
            }
        },
        data(){
            return this.block_element;
        }
    },
    components: {
        TableBlock,
        PlotBlock
    }
}
</script>