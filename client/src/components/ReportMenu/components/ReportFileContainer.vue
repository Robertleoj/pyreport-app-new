<template>

    <div
        class="report-folder-container d-flex align-content-start flex-wrap px-1"
    >

        <template v-if='isReport()' v-for='report in elements'>
            <ReportListItem 
                :reportid="report.id"
            />
        </template>
        <template v-if='isFolder()' v-for='folder in elements'>
            <FolderListItem
                :folderid='folder._id'
            />
        </template>

    </div>
 
    <!-- </v-alert> -->
</template>

<script lang="js">
import ReportListItem from './ReportListItem.vue';
import FolderListItem from './FolderListItem.vue';
import services from '/src/services';
import bus from '/src/bus';

export default {
    name:"ReportFileContainer",
    props: {
        title: String,
    },

    data() {
        return {
            elements: []
        }
    },
    // meteor : {
    //     $subscribe: {
    //         'reports': [],
    //         'folders': [],
    //     },
    //     collection(){
    //         if (this.title == 'Folders') {
    //             return Folders.find({});
    //         } else {
    //             return Reports.find({});
    //         }
    //     }
    // },
    components: {
        ReportListItem,
        FolderListItem,
    },
    methods: {
        isFolder() {
            return this.title == 'Folders';
        },
        isReport() {
            return this.title == 'Favorites' || this.title == 'Reports';
        },
        getCollection(){
            if (this.title === "Folders"){
                return services.Folders.getAll();
            } else{
                services.Reports.getAll()
                    .then(res => {
                        this.elements = res.data;
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        },
        removeReport(data){
            let deleted_id = data.id;
            if(this.isReport()){
                this.elements = this.elements.filter(r => {
                    return r.id !== deleted_id;
                });
            }
        }
    },
    mounted(){
        this.getCollection();
        bus.$on('report-deleted', this.removeReport);
    }

}
</script>

<style scoped>
.report-folder-container {
    border: 1px solid var(--v-primary-base);
    background-color: var(--v-black-base);
    border-radius: 10px;
}
</style>
