<template>
    <v-menu
        v-model="showMenu"
        :position-x="x"
        :position-y="y"
        absolute
        offset-y
    >
        <v-list>
            <v-list-item-group
                :value="true"
            >
            <v-list-item
                v-for="(item, index) in rcmenu"
                :key="index"
                @click="item.handler"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-menu>
</template>

<script lang="js">

export default {
    name: "FolderItemContextMenu",
    props: [
        'folderId'
    ],

    data(){
        return {
            selectedItem: 0,
            x: 0,
            y: 0,
            showMenu: false,
            rcmenu: [
                {
                    title: 'Delete folder',
                    handler: this.deleteFolder
                },
            ]
        }
    },
    methods: {
        show (e) {
            e.preventDefault()
            this.showMenu = false
            this.x = e.clientX
            this.y = e.clientY
            this.$nextTick(() => {
                this.showMenu = true
            })
        },
        deleteFolder(){
            // Meteor.call('delete_folder', this.folderId, (err, res) =>{
            //     console.log(err);
            //     console.log(res);
            // });
        }
    }

}
</script>
