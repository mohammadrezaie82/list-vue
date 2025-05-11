<template>
  <form
    @submit.prevent="handleUpdate"
    class="container mx-auto flex bg-gray-50 flex-col items-start justify-start max-w-2xl h-auto p-8 shadow-xl"
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
      Update
    </button>
  </form>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({ id: Number });
const title = ref("");
const description = ref("");

const url = `https://list-vue-three.vercel.app/api/getData/${props.id}`;

function fetchProjectData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      title.value = data.projects.title;
      description.value = data.projects.description;
    })
    .catch((err) => console.log(err.message));
}

function handleUpdate() {
  fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.value,
      description: description.value,
    }),
  })
    .then(() => router.push("/"))
    .catch((err) => console.error("خطا در درخواست:", err));
}
onMounted(fetchProjectData);
</script>

<style scoped></style>
