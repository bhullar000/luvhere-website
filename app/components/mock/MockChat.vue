<script setup lang="ts">
import { ChevronLeft, EyeOff, Bookmark, Mic, Image as ImageIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="relative flex h-full flex-col">
    <div class="flex items-center gap-2.5 border-b border-line px-3 pb-3 pt-2">
      <ChevronLeft class="h-5 w-5 text-soft" />
      <div class="relative h-9 w-9 rounded-full p-[1.5px] bg-brand">
        <div class="h-full w-full rounded-full" style="background: linear-gradient(150deg, #8a5a6e, #2a1d30)" />
        <span class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-ground bg-success" />
      </div>
      <div class="leading-tight">
        <p class="text-[13px] font-semibold text-ink">Aanya, 26</p>
        <p class="text-[10px] text-success">Online</p>
      </div>
      <span class="ml-auto flex items-center gap-1 rounded-full border border-pink/30 bg-pink/10 px-2 py-1 text-[9px] font-semibold text-pink"><EyeOff class="h-3 w-3" />Seen once</span>
    </div>

    <div class="flex-1 space-y-2.5 overflow-hidden px-3 pt-4 text-[12px]">
      <p class="text-center text-[10px] text-quiet">You matched · today</p>
      <div class="max-w-[78%] rounded-2xl rounded-bl-md bg-elevated px-3 py-2 text-value">Hey! A fellow hiker 🏔️ What’s your favourite trail?</div>
      <div class="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-brand px-3 py-2 text-white">Triund, every monsoon. You?</div>
      <div class="max-w-[78%] rounded-2xl rounded-bl-md bg-elevated px-3 py-2 text-value">Kedarkantha in winter. Coffee first, trek later?</div>
      <div class="ml-auto flex max-w-[82%] items-center gap-2 rounded-2xl rounded-br-md border border-pink/30 bg-pink/10 px-3 py-2 text-ink">
        <Bookmark class="h-3.5 w-3.5 shrink-0 fill-pink text-pink" /> Saturday at 11? 😊
      </div>
      <p class="pr-1 text-right text-[9px] text-quiet">Saved · stays after you leave</p>
      <div class="mx-auto mt-2 flex w-fit items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[10px] text-quiet">
        <EyeOff class="h-3 w-3" /> Earlier messages disappeared once seen
      </div>
    </div>

    <div class="mx-3 mb-4 flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2.5">
      <ImageIcon class="h-4 w-4 text-soft" />
      <span class="flex-1 text-[11px] text-quiet">Message…</span>
      <Mic class="h-4 w-4 text-soft" />
    </div>
  </div>
</template>
