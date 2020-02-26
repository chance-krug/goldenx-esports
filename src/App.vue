<template>
  <v-app>
    <v-container fluid>
      <NavBar/>
      <Twitch class="spacing" name="Gogmackk" desc="HELLO!
My name is Garrett, I am just your average human. I have a degree in business management and currently work in real estate! I am a fun, goofy person who would love to get to know you! Let me know a little about you in chat!
If you have any questions at all about me, my journey or anything at all, please feel free to ask!" source-link="http://www.twitch.tv/gogmackk" source-image="GogmackkLogo.png"></Twitch>
      <Twitch class="spacing" name="iZues" desc="My name is Buddy, I play under the gamertag iZeus for those who don't know. I am 21 years old, live in Michigan. I mostly play PugB and Counter strike. Just trying to hangout and meet some new people." source-link="https://www.twitch.tv/izeus" source-image="ZuesLogo.png"></Twitch>
      <Twitch class="spacing" name="Crunch Gaming" desc="Description here" source-link="https://twitch.tv/crunchgamingtm" source-image="CrunchLogo.png"></Twitch>
      <Twitch class="spacing" name="Judo Sloth" desc="Description here" source-link="https://www.twitch.tv/judo_sloth/" source-image="placeholder.png"></Twitch>
      <Twitch class="spacing" name="Roar's War" desc="📱Mobile Gaming YouTuber | Content Creator | Content Manager and clan leader for @APHEsports" source-link="https://www.twitch.tv/roarswar/" source-image="placeholder.png"></Twitch>
      <Timeline/>
    </v-container>


  </v-app>

</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/NavBar";
  import Timeline from "@/components/Timeline";
  import Twitch from "@/components/Twitch";
  export default {
    name: 'app',
    components: {
      NavBar,
      Timeline,
      Twitch,
    }
  }


</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
  #app {
    font-family: 'Acme';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: #263238;
  }

  .spacing{
    margin-bottom: 10px;
  }
  .bm-burger-bars {
    background-color: white;
  }
</style>