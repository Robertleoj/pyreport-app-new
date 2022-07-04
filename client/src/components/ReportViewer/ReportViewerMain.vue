<template>
    <div>
        <report
            v-if="result !== null"
            :result="result"
        >
        </report>
    </div>
</template>

<script lang="js">
import Report from './Report.vue';
import services from '/src/services';


export default {
    props: ['id'],

    data() {
        return {
            result:null,
            reportTitle: '',
            reportId: this.id
        }
    },

    components: {
        Report
    },

    methods: {
        async getReport(){
            let report_code;
            await services.Reports.get(this.reportId)
                .then(res => {
                    report_code = res.data.report_code;
                })
                .catch(e => {
                    console.log(e);
                });
            
            services.ReportRunner.run(report_code)
                .then(res => {
                    this.result = res.data;
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    mounted(){
        this.getReport();
    }
}
</script>