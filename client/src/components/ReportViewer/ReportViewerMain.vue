<template>
    <div>
        <!-- <h1>{{reportTitle}}</h1> -->
        <report
            v-if="result !== null"
            :result="result"
        >
        </report>
        <!-- <iframe 
            v-if="html !== null"
            :srcdoc="html"
            width="100%"
            height="1000px"
        >
        </iframe> -->

    </div>
</template>

<script lang="js">
import Report from './Report.vue';


export default {
    data() {
        return {
            result:null,
            reportTitle: ''
        }
    },

    components: {
        Report
    },
    created() {
        this.reportId = this.$route.params.reportId;
        // Meteor.call('run_report', this.reportId, (error, result) => {
        //     console.log("Ran report");
        //     console.log(result);
        //     this.result = result;
        //     // let parser = new DOMParser();
        //     // let xmlDoc = parser.parseFromString(result.report_doc, 'text/xml');
        //     // console.log(xmlDoc);
        //     // this.html = result.html;
        // });
    }
}
</script>