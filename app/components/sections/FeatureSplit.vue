<script setup lang="ts">
import { Check } from 'lucide-vue-next'
withDefaults(defineProps<{ eyebrow: string; title: string; lead: string; points: string[]; flip?: boolean }>(), { flip: false })
</script>

<template>
  <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
    <div class="reveal" :class="flip && 'lg:order-2'">
      <p class="eyebrow mb-3">{{ eyebrow }}</p>
      <h3 class="text-3xl font-bold leading-tight tracking-tight md:text-[38px]">{{ title }}</h3>
      <p class="mt-4 text-[17px] leading-7 text-soft">{{ lead }}</p>
      <ul class="mt-7 space-y-3.5">
        <li v-for="p in points" :key="p" class="flex gap-3 text-[15px] leading-6 text-value">
          <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pink/15"><Check class="h-3 w-3 text-pink" /></span>{{ p }}
        </li>
      </ul>
      <slot name="cta" />
    </div>
    <div class="reveal relative flex justify-center" :class="flip && 'lg:order-1'">
      <div class="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(135,71,255,0.20),transparent_65%)]" />
      <div class="relative"><slot /></div>
    </div>
  </div>
</template>
