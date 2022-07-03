<template>
    <v-app-bar dark app dense flat color="">
        <!-- <template v-slot:extension> -->
            <v-container class="py-0" fluid style="width: 100%;">
                <v-breadcrumbs 
                    :items="breadcrumbItems"
                >
                    <template v-slot:extension>
                        <v-icon>mdi-forward</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
            <v-tabs class='mr-10' right>
                <v-tab to="/">Reports</v-tab>
                <v-tab to="/editor">Editor</v-tab>
                <v-tab>Options</v-tab>
            </v-tabs>
        <!-- </template> -->
    </v-app-bar>
</template>

<script lang="js">
export default {
    name:"NavBar",
    data: () => ({
        breadcrumbItems: [
            {
                text: 'Placeholder 1',
                disabled: false,
                href: '#'
            },
            {
                text: 'Placeholder 2',
                disabled: false,
                href: '#'
            },
            {
                text: 'Placeholder 3',
                disabled: true,
                href: '#'
            },
        ],
    }),
}
</script>

<style scoped>

</style>