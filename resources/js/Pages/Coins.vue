<template>
    <div class="text-white text-center ">
        <div class="z-20 px-8">
            <h2 class="text-5xl">Jij hebt
                <count-to :startVal="0" :endVal="coinCount" :duration="3000"></count-to>
                CMGT Coins
            </h2>
            <p>Elke particle staat voor één coin.</p>
        </div>
        <transition name="fade">
            <vue-particles color="#dedede" class="h-screen w-screen absolute top-0 left-0 right-0 bottom-0 z-10"
                           :particlesNumber="coinCount" :clickEffect="false"
                           :particleOpacity="1" v-if="isLoaded"></vue-particles>
        </transition>
    </div>
</template>

<script>
    import countTo from 'vue-count-to';

    export default {
        name: "Coins",
        props: {
            coinCount: Number,
            names: Array,
        },
        data() {
            return {
                isLoaded: false,
            }
        },
        created() {
          setTimeout(() => {this.isLoaded = true}, 10)
        },
        components: {countTo},
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
