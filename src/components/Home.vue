<template>
    <v-container fluid>
        <v-row justify="center">
            <v-spacer/>
            <clan-card name="Golden X" subTitle="Ultra Competitive War Clan" desc="- Top 10 Champion I League<br>- World Championship Katowice, Poland<br>- Champions War League Elite<br>- No Dip League Super Heavy" source-image="GXBadge.png"/>
            <div class="space"></div>
            <clan-card name="CG War Clan" subTitle="Highly Competitive War Clan" desc="- Top 100 Champion I League<br>- Miner League Clan Wars Royal Champion Division" source-image="GXBadge.png"/>
            <v-spacer/>
        </v-row>
        <div class="space"></div>
        <v-row justify="center">
            <v-spacer/>
            <clan-card name="Relic" subTitle="Highly Competitive War Clan" desc="-Top 100 Champion I League<br>- Applicant tryout clan<br>- Top members potential to move to CG War Clan or Golden X" source-image="GXBadge.png"/>
            <div class="space"></div>
            <clan-card name="Texas Reign" subTitle="Competitive War Clan" desc="- Champion II League Participant<br>- Back-to-Back Clan Wars<br>- Non-rushed TH13s<br>- All heros required" source-image="TexasReignBadge.png"/>
            <v-spacer/>
        </v-row>
    </v-container>

</template>

<script>
    import ClanCard from "@/components/ClanCard";
    export default {
        name: "Home",
        components: {ClanCard}
    }
</script>

<style scoped>
    .space {
        min-height: 20px;
    }
</style>