<script setup lang="ts">
import { faqs } from '~/config/site'
usePageMeta('Privacy-first dating', 'Meet verified people for who they are. Luvhere hides photos and names until you both like each other, so connections start with personality.')
useReveal()
</script>

<template>
  <div>
    <HeroSection />
    <HowItWorks />
    <section class="border-y border-line bg-surface/40 py-20 md:py-28">
      <div class="container-site">
        <FeatureSplit
          eyebrow="Seen-once chat"
          title="Say more. Leave less behind."
          lead="Turn on seen-once mode and messages disappear after they’ve been read and you’ve both left the chat. Something worth keeping? Save it, and it stays."
          :points="['Works in match chats and anonymous chats', 'Save any message to keep it for both of you', 'Photos and voice notes, in real time', 'Read receipts and online status']"
          flip
        >
          <PhoneFrame><MockChat /></PhoneFrame>
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
