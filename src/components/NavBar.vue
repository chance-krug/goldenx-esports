<template>
    <v-app-bar class="ma-0 pa-0" :collapse="!collapseOnScroll" color="blue-grey darken-4" dark fixed elevation="3" min-height="60">
        <v-img
                class="mx-2"
                :src="require('@/assets/GXLogo.png')"
                max-height="60"
                max-width="60"
                contain
        />
        <v-toolbar-title>Golden X Esports</v-toolbar-title>
    </v-app-bar>
</template>
<script>
    export default {
        data: () => ({
            collapseOnScroll: true,
        }),
    }

</script>

<style scoped>

</style>