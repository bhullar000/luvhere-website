<script setup lang="ts">
import { ScanFace, EyeOff, HeartHandshake, VenetianMask, Timer, Flag, MapPin, Mic, UserX } from 'lucide-vue-next'
const features = [
  { icon: ScanFace, title: 'Live selfie verification', body: 'A liveness check confirms there’s a real person behind every profile.' },
  { icon: EyeOff, title: 'Veiled photos', body: 'Before you match, photos are blurred on our servers — the real image never reaches anyone’s phone.' },
  { icon: HeartHandshake, title: 'Mutual likes only', body: 'Nobody can message you unless you liked them back. No unwanted inboxes.' },
  { icon: VenetianMask, title: 'Anonymous chat', body: 'Talk under a nickname first. Reveal who you are only when you’re ready.' },
  { icon: Timer, title: 'Seen-once messages', body: 'Let messages disappear after they’re read — and save the ones you want to keep.' },
  { icon: MapPin, title: 'Nearby, not pinpointed', body: 'Suggestions use distance, never your exact location.' },
  { icon: Mic, title: 'Photos & voice notes', body: 'Real-time chat with photos, voice messages, read receipts and online status.' },
  { icon: Flag, title: 'Block & report', body: 'One tap to block or report. Our team reviews every report.' },
  { icon: UserX, title: 'You’re in control', body: 'Pause your profile with Deactivate, or delete your account and data any time.' },
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
