<template>
    <v-app id="app">
        <nav-bar></nav-bar>
        <div height="30px"></div>
        <v-main
            class="mx-5"
        >
        <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang='js'>
import NavBar from '/src/components/NavBar/NavBar.vue';

export default {
    name: "App",

    components: {
        NavBar,
    },
    created(){
        console.log("App creatd");
    }
}
</script>

<style scoped>
#app {
  background-color: var(--v-background-base);
}
</style>
