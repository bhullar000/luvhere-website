<!-- One bubble as MessageBubble draws it: solid pink for mine, an elevated surface for theirs, meta under the last of a run. -->
<script setup lang="ts">
import { Star, CheckCheck } from 'lucide-vue-next'
withDefaults(defineProps<{ mine?: boolean; time?: string; status?: 'delivered' | 'read'; saved?: boolean; avatar?: boolean; showAvatar?: boolean }>(), {
  mine: false, avatar: false, showAvatar: false,
})
</script>

<template>
  <div :class="avatar && !mine ? 'flex items-start gap-[9px]' : ''">
    <div v-if="avatar && !mine" class="mt-[3px] h-[27px] w-[27px] shrink-0">
      <span v-if="showAvatar" class="block h-full w-full rounded-full" style="background: radial-gradient(circle at 50% 38%, #d9a08c 0 26%, transparent 27%), linear-gradient(160deg, #6a3b5c, #2a1d30)" />
    </div>
    <div class="flex flex-col" :class="mine ? 'items-end' : 'flex-1 items-start'">
      <div
        class="rounded-[14px] px-[14px] py-[9px] text-[11.5px] leading-[16.5px] text-ink"
        :class="mine ? 'max-w-[78%] bg-pink' : [avatar ? 'max-w-[92%]' : 'max-w-[78%]', 'border-[0.5px] border-white/[0.14] bg-elevated']"
      >
        <slot />
      </div>
      <div v-if="time || saved" class="mx-[11px] mt-[3px] flex items-center gap-[3px] text-[9.5px] text-soft">
        <span v-if="saved" class="mr-[3px] flex items-center gap-[2px] text-pink"><Star class="h-[8px] w-[8px] fill-pink" />Saved</span>
        <span v-if="time">{{ time }}</span>
        <CheckCheck v-if="mine && status" class="h-[12px] w-[12px]" :class="status === 'read' ? 'text-pink' : 'text-soft'" />
      </div>
    </div>
  </div>
</template>
