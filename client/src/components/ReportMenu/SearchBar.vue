<template>
    <v-autocomplete
        :items='items'
        outlined
        background-color='black'
        label="Search"
        solo
        class="my-5"
    >
    </v-autocomplete>
</template>


<script lang="js">
import { mdiMagnify } from '@mdi/js';

export default {
    name: "SearchBar",
    data() {
        return {
            searchSvg: mdiMagnify,
            items: ['Bongus', 'Drongus', "Pingus"],
        };
    },
}
</script>