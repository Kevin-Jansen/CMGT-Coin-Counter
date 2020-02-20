<template>
<div class="text-white text-center p-8">
    <h1 class="text-5xl">CMGT Coin Leaderboard</h1>
    <p v-for="user in leaderboard">{{user.name}}: {{user.value}}</p>
<!--    <p v-for="user in leaderboard">{{ user }}</p>-->
</div>
</template>

<script>
    export default {
        name: "Leaderboard",
        props: {
            leaderboard: Array | Object,
        },
    }
</script>

<style scoped>

</style>
