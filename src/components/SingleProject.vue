<template>
  <div
    class="flex flex-col bg-slate-200 max-w-[40rem] mx-auto my-2 rounded-lg mt-10 p-6 border-l-4"
    :class="{
      ' border-l-green-600': project.complete,
      ' border-l-red-600': !project.complete,
    }"
  >
    <div class="flex justify-between">
      <h1
        class="text-lg font-bold cursor-pointer"
        @click="showModal = !showModal"
      >
        {{ project.title }}
      </h1>
      <div class="flex space-x-5">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
            height="20"
            fill="currentColor"
            @click="showForm"
            class="text-slate-400 cursor-pointer hover:text-slate-600"
          >
            <path
              d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
            /></svg
        ></router-link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          fill="currentColor"
          class="text-slate-400 cursor-pointer hover:text-slate-600"
          @click="deleteItem"
        >
          <path
            d="M135.2 17.7C140.5 7.1 151.3 0 163.2 0h121.6c11.9 0 22.7 7.1 28 17.7L328 32h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8l-21.2 339.3c-1.6 25.8-23.1 46.7-49 46.7H110.2c-25.9 0-47.4-20.9-49-46.7L40 80H32c-13.3 0-24-10.7-24-24S18.7 32 32 32h88l15.2-14.3zM144 224c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v64zm80 0c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v64zm80 0c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v64z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="20"
          height="20"
          fill="currentColor"
          class="text-slate-400 cursor-pointer hover:text-slate-600"
          @click="changeComplete"
        >
          <path
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
      </div>
    </div>

    <!-- کشویی -->
    <div
      class="overflow-hidden transition-all duration-500 ease-in-out max-h-40 mt-6"
      v-if="showModal"
    >
      <p class="mb-4">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, defineEmits } from "vue";

const props = defineProps({
  project: Object,
});
const showModal = ref(false);
const url = ref("http://localhost:3000/projects/" + props.project.id);
function deleteItem() {
  fetch(url.value, { method: "DELETE" }).then(() =>
    emit("delete", props.project.id)
  );
}
function changeComplete() {
  fetch(url.value, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ complete: !props.project.complete }),
  })
    .then(() => emit("complete", props.project.id))
    .catch((err) => console.log(err.massage));
}
const emit = defineEmits(["delete", "complete"]);
</script>
