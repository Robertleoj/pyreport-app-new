<template>
    <div class="edit-main">
        <v-text-field
            filled
            outlined
            :rules="[nameRules.required]"
            type="string"
            v-model="reportName"
            label="Name"
        ></v-text-field>

        <v-textarea
            filled
            outlined
            v-model="description"
            label="Description"
        >
        </v-textarea>
        <v-btn
            @click="save"
        >
            Save
        </v-btn>
    </div>
</template>


<script lang="js">

import services from '/src/services';

export default {
    props: ['id'],
    data(){
        return{
            reportId: this.id,
            reportName: '',
            description: '',
            nameRules: {
                required: value => !!value || "Required"
            }
        }
    },
    methods: {
        save(){
            const report ={
                name:this.reportName,
                description: this.description
            };

            services.Reports.update(this.reportId, report)
                .then(res => {
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        getData(){
            services.Reports.get(this.reportId)
                .then(res => {
                    console.log(res);
                    this.reportName = res.data.name;
                    this.description = res.data.description;
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    mounted(){
        this.getData();
    }

}
</script>


<style>

.edit-main{
    margin-top:20px;
}

</style>