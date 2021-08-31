<template>
    <h1 class="current-mode">{{ mode }}</h1>
    <img v-if="mode === 'Home'" src="../assets/logo.png" alt="Robotics Logo">
    <XHR v-if="mode === 'XHR'"/>
    <MCTest v-if="mode === 'MCTest'"/>
</template>

<script>
import XHR from '../components/XHR.vue'
import MCTest from '../components/MCTest.vue'

export default {
    props: ['mode'],
    components: { XHR, MCTest }
}
</script>

<style scoped>
img {
  position: absolute;
  top: 0;
  bottom: 70px;
  left: 0;
  right: 0;
  margin: auto;
}
</style>