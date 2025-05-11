<template>
  <div v-if="projects.length">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-for="project in filteredProjects" :key="project.id">
      <SingleProject
        :project="project"
        @delete="handleDelate"
        @complete="handleComplete"
        @edit="handleEdit"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";
const current = ref("all");
const projects = ref([]);
onMounted(() => {
  fetch("https://list-vue-three.vercel.app/api/getData")
    .then((res) => res.json())
    .then((data) => (projects.value = data))
    .catch((err) => console.log(err.massage));
});
function handleDelate(id) {
  projects.value = projects.value.filter((project) => project.id !== id);
}
function handleComplete(id) {
  let p = projects.value.find((item) => item.id === id);
  p.complete = !p.complete;
}
let filteredProjects = computed(() => {
  if (current.value === "completed") {
    return projects.value.filter((item) => item.complete);
  } else if (current.value === "ongoing") {
    return projects.value.filter((item) => !item.complete);
  } else {
    return projects.value;
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
