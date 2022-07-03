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
                    :value="getReportName()"
                    style="font-size:30px"
                    @change="updateTitle($event)"
                >

                </v-text-field>
            </div>
            <div
                class="d-flex-align-content-start flex-wrap px-1 my-4"
            >
                <v-btn
                    @click="save"
                >Save</v-btn>

            </div>
            
        </div>
       
        <editor 
            v-if="renderEditor"
            ref="editor" 
            :initial_content="initCode" 
        />
        
        <!-- <div class="buttonRow">
            <button @click="send_report_code">Submit Code</button>
            <button @click="log_code">Log Code</button>
        </div> -->
    </div>
</template>



<script lang="js">
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/darcula.css';
// import 'codemirror/keymap/vim';
// import 'codemirror/mode/python/python';

import Editor from './Editor.vue';
// import Reports from '../../../api/collections/Reports';
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
            initCode: '',
            newReport: true,
            editingHeader: false,
            renderEditor: false,
            reportId: this.$route.params.reportId
        };
    },
    watch:{
        reportObj(rep){
            var reportId = this.reportId;

            if(typeof reportId === 'undefined'
                || this.renderEditor
                || typeof rep === 'undefined'
            ){
                return;
            }

            this.initCode = rep.report_code;
            this.newReport = false;
            this.reportTitle = rep.title;

            this.renderEditor=true;
        },
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

        // update_code(){
        //     this.content = this.$refs.editor.getValue();
        // },
        // log_code(){
        //     console.log(this.$refs.editor.getValue());
        // },
        save(){
            var title = this.reportTitle;
            var reportCode = this.$refs.editor.content;

            if(this.newReport){
                console.log(services.Reports);
                // Meteor.call('add_report', reportCode, title, 'some description', (err, res) => {
                //     console.log(res);
                //     router.replace({path: `/editor/${res}`});
                //     this.newReport = false;
                //     this.reportId = res;
                // });
            } else {
                var description = this.reportObj.description;
                console.log(title)
                console.log(description)
                console.log(this.reportId)
                console.log(reportCode);

                // Meteor.call(
                //     'update_report', this.reportId, reportCode, title, 
                //     description, (err, res) => {
                //         console.log(err);
                //         console.log(res);
                // });
            }
        },
        getReportName(){
            if(this.reportTitle !== ''){
                return this.reportTitle;
            } else {
                return '(New Report)';
            }
        },

    },

    // meteor: {
    //     $subscribe: {
    //         'reports': []
    //     },
    //     reportObj(){

    //         var report = Reports.findOne(
    //             this.$route.params.reportId
    //         );

    //         return report;

    //     }
    // }
}
</script>