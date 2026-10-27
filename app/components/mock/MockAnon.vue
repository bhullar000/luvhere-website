<!-- An anonymous chat with their reveal request, as AnonChatScreen and RevealRequestCard draw it. -->
<script setup lang="ts">
import { ChevronLeft, MoreHorizontal, Lock, Eye, VenetianMask } from 'lucide-vue-next'
</script>

<template>
  <ChatChrome>
    <template #header>
      <div class="flex items-center gap-[9px] px-[14px] pb-[6px] pt-[6px]">
        <ChevronLeft class="h-[22px] w-[22px] text-pink" />
        <span class="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-brand"><VenetianMask class="h-[10px] w-[10px] text-white" /></span>
        <p class="flex-1 text-[13px] font-semibold text-ink">Anonymous · 25</p>
        <MoreHorizontal class="h-[16px] w-[16px] text-soft" />
      </div>
      <p class="flex items-center justify-center gap-[3px] pb-[6px] text-[9.5px] text-ink/45"><Lock class="h-[8px] w-[8px]" />Your profile is hidden · Always in chat</p>
    </template>

    <ChatBubble>Okay, best street food in Delhi. Go.</ChatBubble>
    <ChatBubble mine time="8:12 PM" status="read">Chole bhature at Sita Ram. Not even close.</ChatBubble>
    <ChatBubble time="8:13 PM">Finally, someone with taste 😄</ChatBubble>

    <div class="my-[3px] rounded-[14px] border-[0.5px] border-line bg-white/[0.06] px-[17px] py-[17px] text-center">
      <span class="mx-auto mb-[9px] grid h-[35px] w-[35px] place-items-center rounded-full bg-pink/[0.14]"><Eye class="h-[16px] w-[16px] text-pink" /></span>
      <p class="mb-[3px] text-[11.5px] font-semibold leading-[16px] text-ink">Anonymous asked to see your profile</p>
      <p class="text-[9.5px] leading-[13px] text-soft">Reveal it to show your photos and details. You’ll see theirs only if they reveal too.</p>
      <span class="relative mt-[14px] grid h-[37px] place-items-center overflow-hidden rounded-[19px] bg-brand text-[12px] font-semibold text-white">
        <span class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.16] to-transparent" /><span class="relative">Reveal Profile</span>
      </span>
      <span class="grid h-[37px] place-items-center text-[12px] font-semibold text-pink">Not Now</span>
    </div>
  </ChatChrome>
</template>
