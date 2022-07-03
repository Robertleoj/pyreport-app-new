<template>
    <div>
        <div
            class="report-header"
        >
            <div>
                <v-text-field
                    single-line
                    filled
                    type="string"
                    v-model="reportTitle"
                    style="font-size:30px"
                    @change="updateTitle($event)"
                >

                </v-text-field>
            </div>
        </div>
        <editor 
            ref="editor" 
        />
        <div
            class="d-flex-align-content-start flex-wrap px-1 my-4"
        >
            <v-btn
                @click="save"
            >Save</v-btn>

        </div>
        
       

        
        <!-- <div class="buttonRow">
            <button @click="send_report_code">Submit Code</button>
            <button @click="log_code">Log Code</button>
        </div> -->
    </div>
</template>



<script lang="js">
import Editor from './Editor.vue';
import services from '/src/services';

// import router from '/src/startup/routes';

// const DefaultCode = 'def isEven(num):\n\treturn num % 2 == 0';
const DefaultCode = `def make_report():
    import numpy as np
    import pandas as pd
    import datapane as dp


    return dp.Report(dp.Table(pd.DataFrame(np.linspace(0, 1, 10))))`;


export default {
    name: "EditorPage",
    components: {
        Editor
    },
    data() {
        return {
            reportTitle: '',
            newReport: !this.$route.params.reportId,
            reportId: this.$route.params.reportId
        };
    },

    mounted(){
        var reportId = this.reportId;
        if(typeof reportId === 'undefined'){
            this.initCode = DefaultCode;
            this.renderEditor=true;
        }
    },
    methods: {
        updateTitle(e){
            this.reportTitle=e;
        },

        updateCode(code){
            this.$refs.editor.setCode(code);
        },
        // log_code(){
        //     console.log(this.$refs.editor.getValue());
        // },
        getReport(){
            services.Reports.get(this.reportId)
                .then(res => {
                    let rep = res.data;
                    this.reportTitle = rep.name;
                    this.updateCode(rep.report_code);
                })
                .catch(e => {
                    console.log(e);
                });

        },
        async save(){
            var title = this.reportTitle;
            var reportCode = this.$refs.editor.content;

            if(this.newReport){
                const report = {
                    name: title,
                    report_code: reportCode,
                    folder_id: 1,
                    description: 'random description'
                };
                services.Reports.create(report)
                    .then(res => {
                        console.log(res);
                        this.reportId = res.data.id;
                        this.newReport = false;
                    })
                    .catch(e => {
                        console.log(e);
                    })
            } else {
                const report = {
                    name : title,
                    description : "random description",
                    folder_id : 1,
                    report_code: reportCode
                };

                services.Reports.update(this.reportId, report)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
    },
    mounted(){
        console.log(this.newReport);
        if(this.reportId){
            this.getReport();
        }
    }
}
</script>