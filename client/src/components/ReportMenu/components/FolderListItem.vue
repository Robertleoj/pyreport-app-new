<template>
    
    <!--use v-hover here-->
    <v-card
        color="card"
        style="{width:getWidth()}"
        class="folder-card my-2 mx-1"
        @contextmenu="showCMenu"
    >
        <v-card-title>
            <v-icon class='pr-2' color='primary'>{{ this.icons.folder }}</v-icon>
            <span 
                class="folder-title"
            >
            {{this.folderObj.name}}
            </span>
        </v-card-title> 

        <FolderItemContextMenu
            ref="contextMenu"
            :folderId="folderid"
        />
    </v-card>
</template>

<script lang="js">
// import Folders from '../../../../api/collections/Folders';
import FolderItemContextMenu from './FolderItemContextMenu.vue';
import { mdiFolder } from '@mdi/js';



export default {
    name: "FolderListItem",
    props: ['folderid'],

    data(){
        return {
            shown: false,
            html: null,
            showMenu: false,
            icons: {
                folder: mdiFolder,
            },
        };
    },
    components: {
        FolderItemContextMenu
    },
    mounted() {
        console.log(`folderid: ${this.folderid}`)
    },

    // meteor: {
    //     folderObj() {
    //         return Folders.findOne({
    //             _id: this.folderid
    //         });
    //     },
    // },
    methods: {
        showCMenu(e){
            this.$refs.contextMenu.show(e);
        },
    }
}
</script>

<style scoped>
.folder-title:hover {
    text-decoration: underline;
}

.folder-card {
    flex: 1 16%;
    max-width: 130px;
    min-width: 110px;
    max-height: 75px;
    min-height: 55px;
    overflow: hidden;
}


</style>
