<template>
    <v-card class="mx-auto" max-width="350" min-width="344" min-height="175" color="#37474F">
        <v-list-item three-line>
            <v-list-item-content class="text-lg-center">
                <v-list-item-title v-text="`${name}`" class="headline mb-1 white--text"></v-list-item-title>
                <v-list-item-subtitle v-text="`${subTitle}`"></v-list-item-subtitle>
                <v-list-item class="text-lg-left" v-html="`${desc}`"></v-list-item>
            </v-list-item-content>
            <v-list-item-avatar tile size="35">
                <v-img id="icon" :src="require(`../assets/${sourceImage}`)" max-height="200" max-width="200"/>
            </v-list-item-avatar>
        </v-list-item>
    </v-card>
</template>

<script>
    export default {
        name: "ClanCard",
        props: {
            sourceImage: String,
            name: String,
            desc: String,
            subTitle: String
        }
    }
</script>

<style scoped>

</style>