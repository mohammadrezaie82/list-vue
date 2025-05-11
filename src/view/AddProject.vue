<template>
  <form
    class="container mx-auto flex bg-gray-50 flex-col items-start justify-start max-w-2xl h-auto p-8 shadow-xl"
    @submit.prevent="handleSubmit"
  >
    <label class="text-lg uppercase font-bold mb-5 text-slate-400"
      >title:</label
    >
    <input
      type="text"
      class="w-full border-b-2 bg-gray-50 focus:outline-none"
      v-model="title"
    />
    <label class="text-lg uppercase font-bold my-5 text-slate-400"
      >details:</label
    >
    <textarea
      class="w-full border-2 bg-gray-50 min-h-44 focus:outline-none"
      v-model="description"
    />
    <button
      class="px-7 py-3 bg-green-400 m-5 mx-auto text-slate-50 rounded-lg hover:bg-green-500"
    >
      Submit
    </button>
  </form>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const title = ref("");
const description = ref("");
const complete = ref(false);
const router = useRouter();
function handleSubmit() {
  let project = {
    title: title.value,
    description: description.value,
    complete: complete.value,
  };
  fetch("https://list-vue-three.vercel.app/api/getData/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  })
    .then(() => router.push("/"))
    .catch((err) => console.log(err.massage));
}
</script>
<style scoped></style>
