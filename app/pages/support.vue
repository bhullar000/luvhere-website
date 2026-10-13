<script setup lang="ts">
import { Mail, ShieldAlert, UserX } from 'lucide-vue-next'
import { faqs } from '~/config/site'
usePageMeta('Support', 'Get help with your Luvhere account, matches, payments or safety.')
useReveal()
const { supportEmail } = useSite()
const cards = computed(() => [
  { icon: Mail, title: 'Email support', body: 'Account, login, payments or anything else. We aim to reply within 2 working days.', href: `mailto:${supportEmail}`, cta: supportEmail },
  { icon: ShieldAlert, title: 'Report a member', body: 'Use Report on their profile or chat. For urgent concerns, email us with “Safety” in the subject.', href: '/safety', cta: 'Safety centre' },
  { icon: UserX, title: 'Delete your account', body: 'Delete in the app, or ask us to do it for you.', href: '/delete-account', cta: 'How to delete' },
])
</script>

<template>
  <div>
    <PageHero eyebrow="Support" title="How can we help?" lead="Most answers are below. If not, we’re a message away." />
    <section class="py-16">
      <div class="container-site grid gap-5 md:grid-cols-3">
        <component :is="c.href.startsWith('/') ? 'NuxtLink' : 'a'" v-for="c in cards" :key="c.title" :to="c.href" :href="c.href" class="reveal card block p-6 transition hover:border-pink/30">
          <component :is="c.icon" class="h-6 w-6 text-pink" />
          <h2 class="mt-4 text-[17px] font-semibold">{{ c.title }}</h2>
          <p class="mt-2 text-[15px] leading-6 text-soft">{{ c.body }}</p>
          <p class="mt-4 text-[15px] font-semibold text-pink">{{ c.cta }}</p>
        </component>
      </div>
    </section>
    <section class="pb-24">
      <div class="container-site">
        <SectionHeading title="Frequently asked questions" />
        <div class="reveal mt-8"><FaqList :items="faqs" /></div>
      </div>
    </section>
  </div>
</template>
