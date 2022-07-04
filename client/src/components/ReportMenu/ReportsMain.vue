<template>
    <div>
    <search-bar></search-bar>
    <report-list></report-list>
    </div>
</template>


<script lang='js'>
import ReportList from './ReportList.vue';
import SearchBar from './SearchBar.vue';
import services from '/src/services';
import {computed} from 'vue';

export default {
    props: [
        'folderId'
    ],
    provide() {
        return {
            repFolderId: computed(() => this.repFolderId)
        };
    },
    data(){
        return {
            repFolderId: this.folderId
        };
    },
    name: "ReportsMain",

    methods: {
        setRootFolder(){
            console.log("Getting root folder");
            services.Folders.getRoot()
                .then(data => {
                    let folderId = data.data.id;
                    console.log(folderId);
                    this.repFolderId = folderId;
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    components: {
        ReportList,
        SearchBar,
    },


    mounted(){
        if(!this.repFolderId){
            this.setRootFolder();
        }
    }
}
</script>

<style scoped>
#app {
  background-color: var(--v-background-base);
}

html {
    height: 100%
}
.bodyDiv {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>
