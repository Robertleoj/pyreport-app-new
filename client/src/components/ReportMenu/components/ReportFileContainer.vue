<template>

    <div
        class="report-folder-container d-flex align-content-start flex-wrap px-1"
    >

        <template v-if='isReport()' v-for='report in collection'>
            <ReportListItem 
                :reportid="report._id"
            />
        </template>
        <template v-if='isFolder()' v-for='folder in collection'>
            <FolderListItem
                :folderid='folder._id'
            />
        </template>

    </div>
 
    <!-- </v-alert> -->
</template>

<script lang="js">
// import Reports from '../../../../api/collections/Reports';
// import Folders from '../../../../api/collections/Folders';
import ReportListItem from './ReportListItem.vue';
import FolderListItem from './FolderListItem.vue';

export default {
    name:"ReportFileContainer",
    props: {
        title: String,
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
            console.log('this.title:', this.title)
            return this.title == 'Folders';
        },
        isReport() {
            return this.title == 'Favorites' || this.title == 'Reports';
        }
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
