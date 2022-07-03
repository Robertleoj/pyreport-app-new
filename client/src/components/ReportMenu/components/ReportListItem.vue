<template>
    
    <!--use v-hover here-->
    <v-card
        color="card"
        style="{width:getWidth()}"
        class="report-card my-2 mx-1"
        @contextmenu="showCMenu"
    >

        <v-btn
            fab
            small
            absolute
            right
            :to="`/editor/${reportid}`"
            :retain-focus-on-click="true"
            :icon="true"
            :dark="true"
            :style="{right: '0px', top:'0px'}"
            class="pr-0 mr-0"
        >
            <v-icon color="primary">{{icons.edit}}</v-icon>
        </v-btn>

        <v-card-title>
            <span 
                class="report-title"
                @click="openReport()"
            >
            {{this.reportObj.title}}
            </span>
             
        <ReportItemContextMenu
            ref="contextMenu"
            :reportId="reportid"
        />
        </v-card-title> 
        <v-card-text>{{this.reportObj.description}}</v-card-text>

    </v-card>
</template>

<script lang="js">
// import Reports from '../../../../api/collections/Reports';
import ReportItemContextMenu from './ReportItemContextMenu.vue';
import { mdiPencilCircle } from '@mdi/js';



export default {
    name: "ReportListItem",
    props: ['reportid'],

    data(){
        return {
            shown: false,
            html: null,
            showMenu: false,
            icons: {
                edit: mdiPencilCircle,
            },
        };
    },

    components: {
        ReportItemContextMenu
    },
    // meteor: {

    //     reportObj() {
    //         return Reports.findOne({
    //             _id: this.reportid
    //         });
    //     },
    // },

    methods: {
        openReport(){
            this.$router.push(`/report/${this.reportid}`);
        },
        showCMenu(e){
            this.$refs.contextMenu.show(e);
        }
    }
}
</script>

<style scoped>
.report-title:hover {
    text-decoration: underline;
}

.report-card {
    flex: 1 16%;
    max-width: 130px;
    min-width: 110px;
    max-height: 130px;
    min-height: 110px;
    overflow: hidden;
}


</style>
