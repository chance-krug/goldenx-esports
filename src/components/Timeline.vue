<template>
    <a class="twitter-timeline"
       href="https://twitter.com/GoldenXEsports"
       data-chrome="noheader nofooter noborders noscrollbar transparent"
       data-tweet-limit="10"
       data-theme="dark"
       data-width="900"
       data-height="600">
    </a>
</template>

<script>
    export default {
        name: "Timeline"
    }
    window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };

        return t;
    }(document, "script", "twitter-wjs"));
</script>

<style scoped>

</style>