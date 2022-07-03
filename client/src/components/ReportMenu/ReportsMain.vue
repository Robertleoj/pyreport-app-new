<template>
    <div>
    <search-bar></search-bar>
    <report-list></report-list>
    </div>
</template>


<script lang='js'>
import ReportList from './ReportList.vue';
import SearchBar from './SearchBar.vue';


export default {
    props: [
        'folderId'
    ],
    name: "ReportsMain",

    methods: {
    },
    components: {
        ReportList,
        SearchBar,
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
