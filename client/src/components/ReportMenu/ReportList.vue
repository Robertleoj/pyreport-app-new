<template>
    <div>
        <template v-for="section in sections">
            <div class="my-5">
                <div class="my-3">
                    <v-icon color='primary'>{{ section.icon }}</v-icon>
                    <strong>{{ section.title }}</strong>
                </div>

                <report-file-container
                    :class="section.class"
                    :title="section.title"
                />
            </div>
        </template>
        <p class='font-weight-bold'>
            Create a folder
        </p>
        <div class='d-flex align-center'>
            <v-text-field class="folderCreationTextField" solo outlined hide-details append-outer-icon='mdi-send' v-model='newFolderName'></v-text-field>
            <v-btn class="ml-6" @click="addFolder">Create a folder</v-btn>
        </div>
        <!-- </v-row> -->
    </div>
</template>

<script lang="js">
import ReportFileContainer from './components/ReportFileContainer.vue';
import { mdiHeart, mdiFolder, mdiFile, mdiPlus } from '@mdi/js';
// import Folders from '../../../api/collections/Folders';

export default {
    name:"ReportList",
    data() {
        return {
            sections: [
                {
                    class: "favs",
                    title: "Favorites",
                    icon: mdiHeart,
                },
                {
                    class: "folders",
                    title: "Folders",
                    icon: mdiFolder,
                },
                {
                    class: "reports",
                    title: "Reports",
                    icon: mdiFile,
                },
            ],
            newFolderName: null,
            icons: {
                addFolder: mdiPlus,
            },
        };
    },
    methods: {
        addFolder(){
            // Meteor.call('add_folder', this.newFolderName, (err, res) => {
            //     console.log(res);
            // })
        }
    },
    // meteor: {
    //     currentFolderId() {
    //         return Session.get('currentFolderId') || Folders.findOne({parentId: null});
    //     },
    // },
    components: {
        ReportFileContainer,
    },
}
</script>

<style scoped>
.favs {
    min-height: 100px;
}

.folders {
    min-height: 100px;
}

.reports {
    min-height: 400px;
}

.folderCreationTextField {
    max-width: 400px;
    min-width: 300px;
}

</style>
