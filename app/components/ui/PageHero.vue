<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; lead?: string; updated?: string }>()
</script>

<template>
  <section class="relative overflow-hidden border-b border-line">
    <div class="pointer-events-none absolute -right-32 -top-48 h-[420px] w-[420px] rounded-full bg-pink/[0.10] blur-[110px]" />
    <div class="container-site relative py-16 md:py-24">
      <p class="eyebrow mb-4">{{ eyebrow }}</p>
      <h1 class="text-title max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-[52px]">{{ title }}</h1>
      <p v-if="lead" class="mt-5 max-w-2xl text-[17px] leading-7 text-soft">{{ lead }}</p>
      <p v-if="updated" class="mt-5 text-[13px] text-quiet">Last updated {{ updated }}</p>
    </div>
  </section>
</template>
