<script setup lang="ts">
import { ShieldCheck, EyeOff, VenetianMask } from 'lucide-vue-next'
const points = [
  { icon: ShieldCheck, label: 'Selfie-verified people' },
  { icon: EyeOff, label: 'Blur your photos until you match' },
  { icon: VenetianMask, label: 'Anonymous chat, reveal on your terms' },
]
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-pink/[0.12] blur-[120px]" />
    <div class="pointer-events-none absolute -left-48 top-64 h-[420px] w-[420px] rounded-full bg-violet/[0.10] blur-[120px]" />

    <div class="container-site relative grid items-center gap-14 pb-20 pt-10 md:pt-16 lg:grid-cols-[1.25fr_1fr] lg:pb-28">
      <div class="reveal">
        <p class="eyebrow mb-5">Privacy-first dating<span class="hidden sm:inline"> · Launching in India</span></p>
        <h1 class="text-[34px] font-bold leading-[1.08] tracking-tight sm:text-[46px] xl:text-[56px]">
          Real people.
          <span class="text-title block">Your privacy, your pace.</span>
        </h1>
        <p class="mt-6 max-w-xl text-[18px] leading-8 text-soft">
          Every member on Luvhere passes a live selfie check. See how compatible you are on every profile, chat only after a mutual like — or talk anonymously first and reveal yourself when you’re ready.
        </p>
        <div id="download" class="mt-9 scroll-mt-28"><StoreButtons /></div>
        <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <li v-for="p in points" :key="p.label" class="flex items-center gap-2 text-[14px] text-value">
            <component :is="p.icon" class="h-4 w-4 text-pink" />{{ p.label }}
          </li>
        </ul>
      </div>

      <div class="reveal relative flex justify-center">
        <div class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,63,142,0.22),transparent_65%)]" />
        <div class="animate-float relative z-10"><PhoneFrame><MockDiscover /></PhoneFrame></div>
        <div class="animate-float-slow absolute -right-2 top-16 z-0 hidden opacity-80 xl:block xl:-right-10">
          <div class="origin-top-right rotate-[6deg] scale-[0.82]"><PhoneFrame><MockChat /></PhoneFrame></div>
        </div>
      </div>
    </div>
  </section>
</template>
