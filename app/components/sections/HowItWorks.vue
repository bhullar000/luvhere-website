<script setup lang="ts">
import { ScanFace, Compass, HeartHandshake, MessagesSquare } from 'lucide-vue-next'
const steps = [
  { icon: ScanFace, title: 'Verify it’s you', body: 'Sign in with your phone number and take a quick live selfie. Everyone you meet has done the same.' },
  { icon: Compass, title: 'Discover anonymously', body: 'See age, distance, interests and how much you have in common — no names, no photos, no snap judgements.' },
  { icon: HeartHandshake, title: 'Like — it’s mutual or nothing', body: 'Your like stays private. Only when they like you back does it become a match.' },
  { icon: MessagesSquare, title: 'Chat, then reveal', body: 'Start talking. Photos and the full profile open up as you match, at a pace that feels right.' },
]
</script>

<template>
  <section id="how-it-works" class="scroll-mt-20 py-20 md:py-28">
    <div class="container-site">
      <SectionHeading eyebrow="How it works" title="Personality first. Photos later." lead="Four simple steps, built so the first thing you notice about someone is who they are." center />
      <ol class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <li v-for="(s, i) in steps" :key="s.title" class="reveal card relative p-6" :style="{ transitionDelay: `${i * 80}ms` }">
          <span class="absolute right-5 top-5 text-[13px] font-semibold text-quiet">0{{ i + 1 }}</span>
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-pink/[0.12]"><component :is="s.icon" class="h-6 w-6 text-pink" /></span>
          <h3 class="mt-5 text-[18px] font-semibold text-ink">{{ s.title }}</h3>
          <p class="mt-2 text-[15px] leading-6 text-soft">{{ s.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
