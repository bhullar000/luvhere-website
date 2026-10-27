<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="py-20 md:py-28">
    <div class="container-site">
      <FeatureSplit
        eyebrow="Trust & safety"
        title="Real people. Verified, every time."
        lead="Fake profiles ruin dating. So every member on Luvhere verifies their phone and passes a live selfie check, and every photo has to match the face that passed it."
        :points="['Liveness check — a photo of a photo won’t pass', 'Photos matched to your selfie and screened before they go live', 'Reports reviewed by a real team', 'Blocked people can never see or contact you again']"
      >
        <PhoneFrame><MockVerify /></PhoneFrame>
        <template #cta>
          <NuxtLink to="/safety" class="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-pink transition-all hover:gap-3">Read our safety guide <ArrowRight class="h-4 w-4" /></NuxtLink>
        </template>
      </FeatureSplit>
    </div>
  </section>
</template>
