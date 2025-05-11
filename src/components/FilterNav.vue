<template>
  <nav class="space-x-5">
    <button
      :class="{
        'border-b-4 border-green-500 font-bold': props.current === 'all',
      }"
      class="uppercase"
      @click="updateFilter('all')"
    >
      view all
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{
        'border-b-4 border-green-500 font-bold': props.current === 'completed',
      }"
      class="uppercase"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{
        'border-b-4 border-green-500 font-bold': props.current === 'ongoing',
      }"
      class="uppercase"
    >
      Ongoing
    </button>
  </nav>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  current: String,
});
const emit = defineEmits("filterChange");
function updateFilter(by) {
  emit("filterChange", by);
}
</script>
