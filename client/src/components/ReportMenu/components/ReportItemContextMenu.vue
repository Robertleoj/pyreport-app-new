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
    name: "ReportItemContextMenu",
    props: [
        'reportId'
    ],

    data(){
        return {
            selectedItem: 0,
            x: 0,
            y: 0,
            showMenu: false,
            rcmenu: [
                {
                    title: 'Delete report',
                    handler: this.deleteReport
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
        deleteReport(){
            // Meteor.call('delete_report', this.reportId, (err, res) =>{
            //     console.log(err);
            //     console.log(res);
            // });
        }
    }

}
</script>
