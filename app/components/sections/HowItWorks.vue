<script setup lang="ts">
import { ScanFace, Compass, HeartHandshake, MessagesSquare } from 'lucide-vue-next'
const steps = [
  { icon: ScanFace, title: 'Verify it’s you', body: 'Sign in with your phone number, take a quick live selfie and add a photo. Every photo is checked against your selfie.' },
  { icon: Compass, title: 'Discover', body: 'Swipe through people nearby, with your compatibility score and shared interests on every card. Set the distance and age you want.' },
  { icon: HeartHandshake, title: 'Like — it’s mutual or nothing', body: 'Like someone, and if they like you back it’s a match. Nobody can message you unless you liked them too.' },
  { icon: MessagesSquare, title: 'Chat your way', body: 'Talk in real time with disappearing messages if you want them. Or start anonymously, and reveal your profile when you choose.' },
]
</script>

<template>
  <section id="how-it-works" class="scroll-mt-20 py-20 md:py-28">
    <div class="container-site">
      <SectionHeading eyebrow="How it works" title="Simple to start. Safe all the way." lead="Four steps from sign-up to your first conversation, with privacy built into each one." center />
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
