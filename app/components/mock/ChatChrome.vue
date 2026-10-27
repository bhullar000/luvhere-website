<!-- The chat thread's frame, measured off the app (MatchChatScreen, ChatComposer, ChatBackground) at ~0.72 scale. -->
<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <div class="relative flex h-full flex-col">
    <!-- The plum band lit behind the header, running up under the status bar. -->
    <div class="-mt-11 border-b border-line bg-gradient-to-b from-pink/20 to-violet/[0.07] pt-11">
      <slot name="header" />
    </div>

    <div class="flex flex-1 flex-col justify-end gap-[6px] overflow-hidden px-[14px] pb-[8px]">
      <slot />
    </div>

    <!-- The composer: the same band, mirrored. -->
    <div class="flex items-end gap-[9px] border-t border-line bg-gradient-to-t from-pink/20 to-violet/[0.07] px-[14px] pb-[22px] pt-[12px]">
      <span class="flex h-[37px] flex-1 items-center rounded-full border border-pink/[0.22] bg-surface/85 px-[14px] text-[11.5px] text-quiet">Message...</span>
      <span class="relative grid h-[37px] w-[37px] place-items-center overflow-hidden rounded-full bg-brand shadow-[0_0_12px_rgba(255,63,142,0.28)]">
        <span class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.16] to-transparent" />
        <Heart class="relative h-[17px] w-[17px] fill-white text-white" />
      </span>
    </div>
  </div>
</template>
