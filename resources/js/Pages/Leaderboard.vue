<template>
    <div class="text-white p-8">
		<inertia-link :href="'/'" class="absolute top-0 right-0 p-8 z-50">Home</inertia-link>
        <div class="flex justify-center" style="flex-direction: column;">
            <h1 class="text-5xl">CMGT Coin Leaderboard</h1>
			<p class="text-sm mt-4">Deze pagina ververst elke 60 seconden.</p>
            <table class="mx-auto">
                <tr v-for="user in leaderboard">
                    <td><a :href="'https://coins.cmgt.dev/?name='+ user.name">{{ user.name }}</a></td>
                    <td>{{ user.value }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Leaderboard",
        props: {
            leaderboard: Array | Object,
		},
		methods() {
			setTimeout(function(){
				window.location.reload(1);
			}, 60000);
		}
    }
</script>

<style scoped>

</style>