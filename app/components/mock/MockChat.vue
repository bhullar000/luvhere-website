<!-- A match chat, as MatchChatScreen draws it. -->
<script setup lang="ts">
import { ChevronLeft, MoreHorizontal, ShieldCheck, Clock } from 'lucide-vue-next'
</script>

<template>
  <ChatChrome>
    <template #header>
      <div class="flex items-center gap-[9px] px-[14px] pb-[14px] pt-[6px]">
        <ChevronLeft class="h-[22px] w-[22px] text-pink" />
        <div class="relative h-[35px] w-[35px] shrink-0">
          <span class="block h-full w-full rounded-full" style="background: radial-gradient(circle at 50% 38%, #d9a08c 0 26%, transparent 27%), linear-gradient(160deg, #6a3b5c, #2a1d30)" />
          <span class="absolute bottom-[1px] right-0 h-[9px] w-[9px] rounded-full border-[1.5px] border-ground bg-success" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="flex items-center gap-[3px] text-[13px] font-semibold leading-[17px] text-ink">Aanya <ShieldCheck class="h-[10px] w-[10px] text-pink" /></p>
          <p class="text-[9.5px] leading-[13px] text-value">Online now</p>
        </div>
        <MoreHorizontal class="h-[17px] w-[17px] text-pink" />
      </div>
    </template>

    <div class="my-[6px] flex justify-center"><span class="rounded-full bg-white/[0.07] px-[14px] py-[4px] text-[9.5px] text-[#E4DEEA]">Today</span></div>
    <div class="my-[3px] flex justify-center">
      <span class="flex max-w-[88%] items-center gap-[3px] rounded-full bg-white/[0.06] px-[9px] py-[4px] text-[9.5px] text-soft"><Clock class="h-[9px] w-[9px] shrink-0" />You set messages to disappear after seen once</span>
    </div>
    <ChatBubble avatar show-avatar time="9:40 PM">Hey! A fellow hiker 🏔️ What’s your favourite trail?</ChatBubble>
    <ChatBubble mine time="9:41 PM" status="read">Triund, every monsoon. You?</ChatBubble>
    <ChatBubble avatar show-avatar time="9:42 PM">Kedarkantha in winter. Coffee first, trek later?</ChatBubble>
    <ChatBubble mine saved time="9:43 PM" status="delivered">Saturday at 11? 😊</ChatBubble>
    <div class="flex w-fit items-center gap-[4px] rounded-[14px] border-[0.5px] border-white/[0.14] bg-elevated px-[11px] py-[9px]">
      <span v-for="i in 3" :key="i" class="h-[5px] w-[5px] rounded-full bg-soft" :class="i === 2 ? 'opacity-100' : 'opacity-50'" />
    </div>
  </ChatChrome>
</template>
