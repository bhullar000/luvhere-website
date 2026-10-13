<script setup lang="ts">
import { X, Heart, MapPin, Music, Plane, Coffee, Mountain, BadgeCheck } from 'lucide-vue-next'
const chips = [
  { label: 'Travel', icon: Plane },
  { label: 'Music', icon: Music },
  { label: 'Coffee', icon: Coffee },
  { label: 'Hiking', icon: Mountain },
]
</script>

<template>
  <div class="relative h-full px-4">
    <p class="text-title pt-2 text-[26px] font-bold">Discover</p>
    <p class="text-[11px] text-soft">Real people. Meaningful connections.</p>

    <div class="gradient-border mt-3 px-4 pb-3.5 pt-4">
      <div class="relative mx-auto grid h-[96px] w-[96px] place-items-center rounded-full p-[2px] bg-brand">
        <div class="h-full w-full overflow-hidden rounded-full bg-elevated">
          <div class="h-full w-full scale-125 blur-[10px]" style="background: radial-gradient(circle at 45% 35%, #c98a7a 0 22%, transparent 23%), radial-gradient(ellipse at 50% 95%, #3d2a4a 0 45%, transparent 46%), linear-gradient(160deg, #5b3a52, #1d1621)" />
        </div>
        <span class="absolute -bottom-1 right-2 grid h-7 w-7 place-items-center rounded-full border-2 border-ground bg-pink"><BadgeCheck class="h-4 w-4 text-white" /></span>
      </div>
      <p class="mt-3 text-center text-[18px] font-bold text-ink">26 · Woman</p>
      <p class="mt-1 flex items-center justify-center gap-1 text-[11px] text-quiet"><MapPin class="h-3 w-3" /> 3 km away</p>
      <div class="mt-2 flex items-center justify-center gap-1.5">
        <span class="rounded-full bg-pink/15 px-2.5 py-1 text-[10px] font-semibold text-pink">92% match</span>
      </div>
      <p class="mt-3 text-[10px] font-semibold uppercase tracking-wider text-quiet">Things we both love</p>
      <div class="mt-2 flex flex-wrap gap-1.5">
        <span v-for="c in chips" :key="c.label" class="flex items-center gap-1 rounded-chip border border-line bg-white/[0.03] px-2 py-1 text-[10px] text-value">
          <component :is="c.icon" class="h-3 w-3 text-pink" />{{ c.label }}
        </span>
      </div>
    </div>

    <div class="mt-3 flex items-center justify-center gap-5">
      <span class="grid h-12 w-12 place-items-center rounded-full border border-line bg-surface"><X class="h-5 w-5 text-soft" /></span>
      <span class="grid h-14 w-14 place-items-center rounded-full bg-brand shadow-[0_6px_20px_rgba(255,63,142,0.35)]"><Heart class="h-6 w-6 fill-white text-white" /></span>
    </div>
    <MockTabBar active="discover" />
  </div>
</template>
