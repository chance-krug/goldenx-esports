<template>
    <nav>
        <Slide class="menu" right>
            <a :href="'#' + `${page.title}`" v-for="(page, index) in pages" :key="`page-${index}`">
                <span>{{page.title}}</span>
            </a>
        </Slide>
        <v-app-bar class="ma-0 pa-0 back" :collapse="!collapseOnScroll" color="blue-grey darken-4" dark fixed elevation="3" min-height="60">
            <v-img class="mx-2" :src="require('@/assets/GXLogo.png')" max-height="60" max-width="60" contain/>
            <v-img class="mx-2 icon"  v-on:click="link('http://www.discord.gg/goldenxesports')" :src="require('@/assets/discordLight.png')" max-height="30" max-width="30" contain/>
            <v-img class="mx-2 icon" v-on:click="link('https://twitter.com/GoldenXEsports')" :src="require('@/assets/twitterLight.png')" max-height="30" max-width="30" contain/>
            <v-img class="mx-2 icon" v-on:click="link('https://www.twitch.tv/clash_with_eric_onehive/')" :src="require('@/assets/twitchLight.png')" max-height="30" max-width="30" contain/>
            <v-img class="mx-2 icon" v-on:click="link('https://www.youtube.com/channel/UC5NBdAuGjnz7CCU3yC9oOug')" :src="require('@/assets/youtubeLight.png')" max-height="30" max-width="30" contain/>
            <v-spacer/>

        </v-app-bar>
    </nav>

</template>

<script>
    import { Slide } from 'vue-burger-menu';
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
        },
        methods: {
            link: function(link){
                window.open(link);
            }
        }
    }
</script>

<style scoped>
    .menu{
        position: fixed;
        left: 100%;
        top: -17px;
        cursor: pointer;
        z-index: 10;

    }
    .back{
        z-index: 11;
    }
    .icon
    {
        cursor: pointer;
    }
</style>



