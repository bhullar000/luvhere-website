<script setup lang="ts">
import { Check, Crown } from 'lucide-vue-next'
const free = ['Verified profile', 'Unlimited anonymous discovery', 'Likes and mutual matches', 'Start chatting with every match', 'Block, report and privacy controls']
const premium = ['More messages in every chat', 'See who already likes you', 'Advanced filters', 'Priority in discovery', 'Secure payments, cancel any time']
</script>

<template>
  <section id="premium" class="scroll-mt-20 py-20 md:py-28">
    <div class="container-site">
      <SectionHeading eyebrow="Pricing" title="Free to fall in love." lead="Everything you need to meet someone is free. Premium is there if you want a little more." center />
      <div class="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
        <div class="reveal card p-7">
          <p class="text-[15px] font-semibold text-soft">Luvhere</p>
          <p class="mt-2 text-4xl font-bold">Free</p>
          <ul class="mt-7 space-y-3">
            <li v-for="f in free" :key="f" class="flex gap-3 text-[15px] text-value"><Check class="mt-0.5 h-4 w-4 shrink-0 text-success" />{{ f }}</li>
          </ul>
        </div>
        <div class="reveal gradient-border p-7">
          <p class="flex items-center gap-2 text-[15px] font-semibold text-pink"><Crown class="h-4 w-4" />Luvhere Premium</p>
          <p class="mt-2 text-4xl font-bold">Upgrade in-app</p>
          <ul class="mt-7 space-y-3">
            <li v-for="f in premium" :key="f" class="flex gap-3 text-[15px] text-value"><Check class="mt-0.5 h-4 w-4 shrink-0 text-pink" />{{ f }}</li>
          </ul>
          <p class="mt-6 text-[13px] text-quiet">Plans and prices in ₹ are shown in the app before you pay.</p>
        </div>
      </div>
    </div>
  </section>
</template>
