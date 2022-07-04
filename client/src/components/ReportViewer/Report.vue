<template>
    <div class="report">
        <div 
            v-if="has_error()"
        >
            <span class="pyerror">
                {{this.report_res.err}}
            </span>
        </div>
        <div v-else>
            <div v-for="p in pages()">
                <Page
                    :page_element="p"
                >

                </Page>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import Page from './report_elements/Page.vue';
// import loadScript from 'vue-plugin-load-script';

function add_vega_scripts(){
    let scripts = [
        "https://cdn.jsdelivr.net/npm/vega@5",
        "https://cdn.jsdelivr.net/npm/vega-lite@5",
        "https://cdn.jsdelivr.net/npm/vega-embed@6"
    ];

    // for(let s of scripts){
        // loadScript(s);
    // }
}

export default {
    data() {
        return {
            report_res: this.result,
            attachments: this.result.attachments,
            xml_doc: null
        }
    },
    props: [
        'result'
    ],

    components: {
        Page
    },

    provide(){
        return {attachments: this.attachments}
    },
    created(){
        let parser = new DOMParser();
        let xml_doc = parser.parseFromString(this.report_res.report_doc, 'text/xml');
        console.log(xml_doc);
        console.log(this.report_res.report_doc);

        this.xml_doc = xml_doc;
    },
    mounted(){
    },
    methods: {
        pages(){
            let page_collection = this.xml_doc.getElementsByTagName('Page', 'text/xml');
            console.log(page_collection);
            //console.log(pages);
            let pages = []
            for(let i = 0; i < page_collection.length; i++){
                pages.push(page_collection.item(i))
            }
            return pages;
        },

        has_error(){
            return !!this.report_res.err
        }
    }
}
</script>

<style>
.pyerror {
    white-space: pre-line;
}

.report {
    overflow-x: show;
}


/* .report {
    all:initial;
}


.report * {
    all:unset;
}


.report::before,
.report::after,
.report *::before,
.report *::after {
    all:unset;
} */

</style>