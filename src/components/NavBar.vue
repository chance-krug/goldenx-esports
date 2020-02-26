<template>
    <nav>
        <Slide class="menu" right>
            <a id="home" href="#">
                <span>Home</span>
            </a>
        </Slide>
        <v-app-bar class="ma-0 pa-0 back" :collapse="!collapseOnScroll" color="blue-grey darken-4" dark fixed elevation="3" min-height="60">
            <v-img class="mx-2" :src="require('@/assets/GXLogo.png')" max-height="60" max-width="60" contain/>
            <v-spacer/>

<!--            <v-icon x-large  @click.stop="drawer = !drawer">menu</v-icon>-->
        </v-app-bar>

<!--        <v-navigation-drawer v-model="drawer" absolute temporary right>-->
<!--            <v-list>-->
<!--                <v-list-item-group v-model="group" active-class="text&#45;&#45;accent-4">-->
<!--                    <v-list-item v-for="(page, index) in pages" :key="`page-${index}`">-->
<!--                        <v-list-item-title @click="$vuetify.goTo( '#'+ page.title, options)">{{page.title}}</v-list-item-title>-->
<!--                    </v-list-item>-->
<!--                </v-list-item-group>-->
<!--            </v-list>-->
<!--        </v-navigation-drawer>-->
    </nav>

</template>

<script>
    import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
    export default {
        data: () => ({
            drawer: false,
            group: null,
            collapseOnScroll: true,
            pages:[
                {title: 'Home'},
                {title: 'News'},
                {title: 'Merch'},
                {title: 'History'},
                {title: 'Media'},
                ]

        }),
        watch: {
            group () {
                this.drawer = false
            },
        },
        components: {
            Slide // Register your component
        }
    }
</script>

<style scoped>
    .menu{
        position: fixed;
        left: 95%;
        top: -17px;
        cursor: pointer;
        z-index: 10;

    }
    .back{
        z-index: 11;
    }
</style>



