<template>
  <div id="app">
    <router-link
      class="mr-6 text-xl font-bold capitalize"
      :to="{ name: 'Home' }"
      :class="{
        'border-b-4 border-green-500 font-bold': route.name === 'Home',
      }"
    >
      project
    </router-link>
    <router-link
      class="mr-6 text-xl font-bold capitalize"
      :to="{ name: 'AddProject' }"
      :class="{ 'border-b-4 border-green-500': route.name === 'AddProject' }"
    >
      add a new project
    </router-link>
  </div>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const data = ref([]);
onMounted(async () => {
  const res = await fetch("https://list-vue-three.vercel.app/api/getData");
  data.value = await res.json();
});
</script>

<style>
html,
body,
#app {
  /* height: 100%; */
  margin: 0;
  padding: 0;
  background-color: rgb(241, 244, 248);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
}
</style>
