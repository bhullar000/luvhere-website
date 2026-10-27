<script setup lang="ts">
import { Heart, Star, Users, VenetianMask, User } from 'lucide-vue-next'
const props = defineProps<{ active: 'discover' | 'likes' | 'matches' | 'anon' | 'profile' }>()
// Same five tabs and glyphs as the app's floating tab bar.
const tabs = [
  { key: 'discover', icon: Heart },
  { key: 'likes', icon: Star, badge: 3 },
  { key: 'matches', icon: Users, badge: 2 },
  { key: 'anon', icon: VenetianMask },
  { key: 'profile', icon: User },
] as const
</script>

<template>
  <div class="absolute inset-x-3 bottom-3 flex h-[52px] items-center justify-around rounded-[28px] border border-line bg-surface/90 backdrop-blur">
    <div v-for="t in tabs" :key="t.key" class="relative grid h-9 w-12 place-items-center rounded-full" :class="t.key === props.active && 'border border-pink/50 bg-pink/15 shadow-[0_0_14px_rgba(255,63,142,0.35)]'">
      <component :is="t.icon" class="h-[19px] w-[19px]" :class="t.key === props.active ? 'fill-pink text-pink' : 'fill-soft/80 text-soft/80'" />
      <span v-if="'badge' in t && t.key !== props.active" class="absolute -top-1 right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-pink px-1 text-[9px] font-bold text-white">{{ t.badge }}</span>
    </div>
  </div>
</template>
