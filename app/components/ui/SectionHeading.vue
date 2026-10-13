<script setup lang="ts">
withDefaults(defineProps<{ eyebrow?: string; title: string; lead?: string; center?: boolean }>(), { center: false })
</script>

<template>
  <div class="reveal max-w-2xl" :class="center && 'mx-auto text-center'">
    <p v-if="eyebrow" class="eyebrow mb-3">{{ eyebrow }}</p>
    <h2 class="text-3xl font-bold leading-tight tracking-tight text-ink md:text-[40px]">{{ title }}</h2>
    <p v-if="lead" class="mt-4 text-[17px] leading-7 text-soft">{{ lead }}</p>
  </div>
</template>
