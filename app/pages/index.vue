<script setup lang="ts">
import { faqs } from '~/config/site'
usePageMeta('Privacy-first dating', 'Meet selfie-verified people near you. Blur your photos until you match, chat only on a mutual like, or talk anonymously and reveal yourself when you’re ready.')
useReveal()
</script>

<template>
  <div>
    <HeroSection />
    <HowItWorks />
    <section class="border-y border-line bg-surface/40 py-20 md:py-28">
      <div class="container-site">
        <FeatureSplit
          eyebrow="Disappearing messages"
          title="Say more. Leave less behind."
          lead="Choose how long messages last: always, 24 hours, or until they’ve been seen once. Something worth keeping? Save it, and it stays for both of you."
          :points="['Works in match chats and anonymous chats', 'Either of you can change it — both are told in the chat', 'Sent, delivered and read ticks, like WhatsApp', 'See when they’re typing']"
          flip
        >
          <PhoneFrame><MockChat /></PhoneFrame>
        </FeatureSplit>
      </div>
    </section>
    <section id="anonymous" class="scroll-mt-20 py-20 md:py-28">
      <div class="container-site">
        <FeatureSplit
          eyebrow="Anonymous chat"
          title="Talk first. Reveal when you choose."
          lead="Get matched with someone compatible and chat without names or photos. When the conversation clicks, ask them to reveal — or reveal your own profile. Each of you decides for yourself."
          :points="['Matched on compatibility, interests and distance', 'Request a reveal, and they answer with one tap', 'Reveal yours any time — they see you, you still don’t see them', 'Give them a private nickname only you can see']"
        >
          <PhoneFrame><MockAnon /></PhoneFrame>
        </FeatureSplit>
      </div>
    </section>
    <FeatureGrid />
    <CompareSection />
    <SafetyTeaser />
    <PremiumSection />
    <section id="faq" class="scroll-mt-20 py-20 md:py-28">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div class="reveal">
          <p class="eyebrow mb-3">FAQ</p>
          <h2 class="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">Questions, answered.</h2>
          <p class="mt-4 text-[17px] leading-7 text-soft">Can’t find what you need? <NuxtLink to="/support" class="text-pink hover:underline">Contact support</NuxtLink>.</p>
        </div>
        <div class="reveal"><FaqList :items="faqs" /></div>
      </div>
    </section>
    <DownloadCta />
  </div>
</template>
