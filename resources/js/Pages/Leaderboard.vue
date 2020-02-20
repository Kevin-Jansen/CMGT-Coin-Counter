<template>
    <div class="text-white p-8">
        <div class="flex justify-center" style="flex-direction: column;">
            <h1 class="text-5xl">CMGT Coin Leaderboard</h1>
            <table class="mx-auto">
                <tr v-for="user in leaderboard">
                    <td>{{ user.name }}</td>
                    <td>{{ user.value }}</td>
                </tr>
            </table>
        </div>
        <!--    <p v-for="user in leaderboard">{{user.name}}: {{user.value}}</p>-->
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
