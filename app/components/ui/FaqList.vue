<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
defineProps<{ items: { q: string; a: string }[] }>()
</script>

<template>
  <div class="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
    <details v-for="item in items" :key="item.q" class="group">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-[16px] font-medium text-ink md:px-6 [&::-webkit-details-marker]:hidden">
        {{ item.q }}
        <ChevronDown class="h-5 w-5 shrink-0 text-quiet transition duration-200 group-open:rotate-180 group-open:text-pink" />
      </summary>
      <p class="px-5 pb-5 text-[15px] leading-7 text-soft md:px-6">{{ item.a }}</p>
    </details>
  </div>
</template>
