<template>
    <v-card class="mx-auto" max-width="700"  min-width="344" min-height="250" color="#37474F">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title v-text="`${name}`" class="headline mb-1 white--text"></v-list-item-title>
                <v-list-item class="white--text" v-text="`${desc}`"></v-list-item>
            </v-list-item-content>
            <v-list-item-avatar tile size="80">
                <v-img id="icon" :src="require(`../assets/${sourceImage}`)" max-height="200" max-width="200" v-on:click="link"/>
            </v-list-item-avatar>
        </v-list-item>
    </v-card>
</template>
<script>
    export default {
        name: "Twitch",
        props: {
            sourceImage: String,
            sourceLink: String,
            name: String,
            desc: String
        }
        ,
        methods: {
            link: function(){
                window.open(this.$props.sourceLink);
            }
        }
    }
</script>

<style scoped>
    #icon
    {
        cursor: pointer;
    }
</style>