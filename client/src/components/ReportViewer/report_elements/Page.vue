<template>
    <div>
        <div id="shit" v-for="block in blocks()">
            <Block
                :block_element="block"
            >
            </Block>
        </div>
    </div>
</template>

<script lang="js">
import Block from './Block.vue';

export default {
    // inject: [
    //     'attachments'
    // ],
    props: [
        'page_element'
    ],
    created(){
        // console.log(this.attachments);
        console.log(this.page_element)
        console.log(typeof this.page_element)
    },

    components: {
        Block
    },

    methods: {
        blocks(){
            let children =  this.page_element.children;
            console.log(children);
            let child_arr =  [...Array(children.length).keys()].map(i=>children.item(i));
            console.log(child_arr);
            return child_arr;
        }
    }


}
</script>
