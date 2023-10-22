<template>
  <div class="cells">
    <button
      class="cell"
      :disabled="modelValue === 1"
      @click="$emit('update:modelValue', modelValue - 1)"
    >
      &lt;
    </button>
    <div
      v-for="num in nrOfPages"
      class="cell"
      :key="num"
      :class="{ selected: num === modelValue }"
      @click="num !== modelValue && $emit('update:modelValue', num)"
    >
      {{ num }}
    </div>
    <button
      class="cell"
      :disabled="modelValue === nrOfPages"
      @click="$emit('update:modelValue', modelValue + 1)"
    >
      &gt;
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  nrOfPages: number
  modelValue: number
}>()

defineEmits<{
  (e: 'update:modelValue', num: number): void
}>()
</script>

<style scoped>
.cells {
  display: flex;
  gap: 10px;
}

.cell {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 50px;
  height: 50px;
  border: 1px solid aqua;
}

.selected {
  border: 2px solid purple;
  font-weight: bolder;
}
</style>
