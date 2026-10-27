<script setup lang="ts">
import { X, Heart, MapPin, Briefcase, Music, Plane, Coffee, BadgeCheck, Lock } from 'lucide-vue-next'
// `blurred`: the member chose "Blur my photos on Discover"; the app shows the server-blurred copy.
withDefaults(defineProps<{ blurred?: boolean }>(), { blurred: false })
const chips = [
  { label: 'Travel', icon: Plane },
  { label: 'Music', icon: Music },
  { label: 'Coffee', icon: Coffee },
]
</script>

<template>
  <div class="relative h-full px-4">
    <p class="text-title pt-2 text-[26px] font-bold leading-tight">Discover</p>
    <p class="text-[11px] text-soft">Real people. Meaningful connections.</p>

    <!-- The swipe card: a full-bleed photo inside the brand outline. -->
    <div class="relative mt-3 h-[322px] overflow-hidden rounded-[24px] p-[1.5px] bg-brand">
      <div class="relative h-full overflow-hidden rounded-[23px] bg-elevated">
        <div class="absolute inset-0" :class="blurred && 'scale-125 blur-[14px]'" style="background: radial-gradient(ellipse 34% 26% at 50% 34%, #d9a08c 0 60%, transparent 61%), radial-gradient(ellipse 30% 20% at 50% 20%, #2b1a22 0 70%, transparent 71%), radial-gradient(ellipse 70% 40% at 50% 100%, #6a3b5c 0 70%, transparent 71%), linear-gradient(170deg, #4a2f45, #1d1621 70%)" />
        <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        <div class="absolute inset-x-3 top-3 flex items-center justify-between">
          <span class="rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_0_14px_rgba(255,63,142,0.55)]">92% Match</span>
          <span class="flex items-center gap-1 rounded-full border border-white/15 bg-elevated/60 px-2 py-1 text-[10px] text-white"><BadgeCheck class="h-3 w-3 text-pink" />Verified</span>
        </div>

        <div v-if="blurred" class="absolute inset-0 grid place-items-center">
          <span class="flex items-center gap-1.5 rounded-full border border-white/15 bg-elevated/60 px-2.5 py-1 text-[10px] text-white"><Lock class="h-3 w-3" />Photos visible after you match</span>
        </div>

        <div class="absolute inset-x-4 bottom-4">
          <p class="text-[19px] font-bold text-white">Aanya <span class="font-normal text-white/75">26</span></p>
          <p class="mt-1.5 flex items-center gap-1.5 text-[11px] text-white"><Briefcase class="h-3 w-3" />Product designer</p>
          <p class="mt-1 flex items-center gap-1.5 text-[11px] text-white/70"><MapPin class="h-3 w-3 text-pink" />3 km away · Long-term</p>
          <div class="mt-2.5 flex flex-wrap gap-1.5">
            <span v-for="c in chips" :key="c.label" class="flex items-center gap-1 rounded-chip border border-white/15 bg-white/10 px-2 py-1 text-[10px] text-value">
              <component :is="c.icon" class="h-3 w-3" />{{ c.label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-2.5 flex items-start justify-center gap-6">
      <span class="flex flex-col items-center gap-1">
        <span class="grid h-12 w-12 place-items-center rounded-full border border-pink/50 bg-surface shadow-[0_0_14px_rgba(255,63,142,0.3)]"><X class="h-5 w-5 text-pink" /></span>
        <span class="text-[9px] text-soft">Pass</span>
      </span>
      <span class="flex flex-col items-center gap-1">
        <span class="grid h-12 w-12 place-items-center rounded-full border border-pink/50 bg-surface shadow-[0_0_14px_rgba(255,63,142,0.35)]"><Heart class="h-5 w-5 fill-pink text-pink" /></span>
        <span class="text-[9px] text-soft">Like</span>
      </span>
    </div>
    <MockTabBar active="discover" />
  </div>
</template>
