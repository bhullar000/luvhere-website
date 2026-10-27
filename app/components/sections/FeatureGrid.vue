<script setup lang="ts">
import { ScanFace, EyeOff, HeartHandshake, VenetianMask, Timer, Flag, SlidersHorizontal, CheckCheck, UserX } from 'lucide-vue-next'
const features = [
  { icon: ScanFace, title: 'Live selfie verification', body: 'A liveness check confirms a real person is behind every profile, and every photo is matched to that face.' },
  { icon: EyeOff, title: 'Blur my photos', body: 'Verified members can blur their photos on Discover. They’re blurred on our servers, so the clear photo only reaches people you match with.' },
  { icon: HeartHandshake, title: 'Mutual likes only', body: 'Nobody can message you unless you liked them back. No unwanted inboxes.' },
  { icon: VenetianMask, title: 'Anonymous chat', body: 'Get matched on compatibility and talk without names or photos. Ask them to reveal, or reveal yourself — each side decides for itself.' },
  { icon: Timer, title: 'Disappearing messages', body: 'Keep messages, have them vanish after 24 hours, or after they’re seen once. Save any message you want to keep.' },
  { icon: CheckCheck, title: 'Real-time chat', body: 'Typing indicators and WhatsApp-style ticks: sent, delivered and read.' },
  { icon: SlidersHorizontal, title: 'Your filters', body: 'Choose how far away and what age range you want to see, right from Discover.' },
  { icon: Flag, title: 'Block & report', body: 'Block or report from any chat or from your Likes. Our team reviews every report.' },
  { icon: UserX, title: 'You’re in control', body: 'Hide from Likes or from anonymous chat, pause your profile, or delete your account and data any time.' },
]
</script>

<template>
  <section id="features" class="scroll-mt-20 py-20 md:py-28">
    <div class="container-site">
      <SectionHeading eyebrow="Features" title="Everything you need. Nothing that exposes you." center />
      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(f, i) in features" :key="f.title" class="reveal card p-6 transition duration-300 hover:border-pink/30" :style="{ transitionDelay: `${(i % 3) * 70}ms` }">
          <component :is="f.icon" class="h-6 w-6 text-pink" />
          <h3 class="mt-4 text-[17px] font-semibold text-ink">{{ f.title }}</h3>
          <p class="mt-2 text-[15px] leading-6 text-soft">{{ f.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
