<script setup lang="ts">
import { X, Check } from 'lucide-vue-next'
const rows = [
  ['Judged on a photo in a split second', 'Compatibility and shared interests on every card'],
  ['Your photos are visible to everyone', 'Blur your photos until you match'],
  ['Anyone can be anyone', 'Every member passes a live selfie check'],
  ['Strangers can fill your inbox', 'Chat only after a mutual like'],
  ['Conversations stay forever', 'Messages can disappear once seen'],
  ['Show everything or nothing', 'Chat anonymously and reveal when you choose'],
]
</script>

<template>
  <section class="py-20 md:py-28">
    <div class="container-site">
      <SectionHeading eyebrow="Why Luvhere" title="Dating, without the shop window." lead="Most apps put everything on show the moment you sign up. On Luvhere you decide who sees what, and when." center />
      <div class="reveal mx-auto mt-12 max-w-4xl overflow-hidden rounded-card border border-line">
        <div class="grid grid-cols-2 bg-surface text-[13px] font-semibold uppercase tracking-wider">
          <p class="px-5 py-4 text-quiet md:px-7">Typical swipe apps</p>
          <p class="text-brand px-5 py-4 md:px-7">Luvhere</p>
        </div>
        <div v-for="[a, b] in rows" :key="a" class="grid grid-cols-2 border-t border-line text-[15px]">
          <p class="flex gap-3 px-5 py-4 text-soft md:px-7"><X class="mt-0.5 h-4 w-4 shrink-0 text-quiet" />{{ a }}</p>
          <p class="flex gap-3 bg-pink/[0.04] px-5 py-4 text-ink md:px-7"><Check class="mt-0.5 h-4 w-4 shrink-0 text-pink" />{{ b }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
