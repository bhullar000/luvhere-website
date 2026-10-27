<script setup lang="ts">
import { ScanFace, EyeOff, HeartHandshake, Flag, Coffee, Users, Wallet, Link2, Phone, MessageSquareWarning } from 'lucide-vue-next'
usePageMeta('Safety', 'How Luvhere keeps dating safe: live selfie verification, photos matched to your face, blurred photos until you match, mutual-like chat, block and report — plus tips for meeting in person.')
useReveal()
const { supportEmail } = useSite()

const built = [
  { icon: ScanFace, title: 'Verified members', body: 'Phone verification and a live selfie check, and every photo is matched to the face that passed it.' },
  { icon: EyeOff, title: 'Blur until matched', body: 'Verified members can blur their photos on Discover. They’re blurred on our servers for anyone you haven’t matched with.' },
  { icon: HeartHandshake, title: 'Mutual consent to chat', body: 'Only people you liked back can message you. In anonymous chat, you choose if and when to reveal yourself.' },
  { icon: Flag, title: 'Block & report', body: 'From any chat or your Likes. Blocked people can’t find or contact you.' },
]
const tips = [
  { icon: Link2, title: 'Keep it on Luvhere', body: 'Stay in the app’s chat until you trust someone. Be wary of anyone who rushes you to another app.' },
  { icon: Wallet, title: 'Never send money', body: 'No genuine match will ask for money, gift cards, crypto or your bank details. Report it straight away.' },
  { icon: Coffee, title: 'Meet in public', body: 'Choose a busy café or restaurant for the first few dates, and arrange your own way there and back.' },
  { icon: Users, title: 'Tell a friend', body: 'Share who you’re meeting, where and when. Check in during and after the date.' },
  { icon: Phone, title: 'Video call first', body: 'A quick call helps confirm they are who they say they are before you meet.' },
  { icon: MessageSquareWarning, title: 'Trust your instincts', body: 'If something feels off, leave. You never owe anyone a date — or an explanation.' },
]
const guidelines = [
  ['Be yourself', 'Use your own photos and real details. Impersonating anyone, or using someone else’s photos, gets your account removed.'],
  ['18+ only', 'Luvhere is for adults. We remove anyone under 18 and report child safety concerns to the authorities.'],
  ['Respect consent', 'No harassment, threats, hate speech or unwanted sexual content. “No” and silence both mean no.'],
  ['No nudity or explicit photos', 'Profile photos are moderated. Explicit content in profiles is not allowed.'],
  ['No scams or selling', 'Don’t ask for money, promote products or services, or recruit for anything.'],
  ['Respect privacy', 'Don’t share another member’s photos, messages or personal details outside Luvhere.'],
  ['One person, one account', 'Don’t create multiple accounts or come back after being banned.'],
]
</script>

<template>
  <div>
    <PageHero eyebrow="Safety" title="Safety is built in, not bolted on." lead="Luvhere was designed around privacy from day one. Here’s what we do to protect you — and what you can do too." />

    <section class="py-20">
      <div class="container-site">
        <SectionHeading title="What Luvhere does for you" />
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="b in built" :key="b.title" class="reveal card p-6">
            <component :is="b.icon" class="h-6 w-6 text-pink" />
            <h3 class="mt-4 text-[17px] font-semibold">{{ b.title }}</h3>
            <p class="mt-2 text-[15px] leading-6 text-soft">{{ b.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-line bg-surface/40 py-20">
      <div class="container-site">
        <SectionHeading title="Dating safely" lead="Most people are here for the same reason you are. These habits help keep it that way." />
        <div class="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="t in tips" :key="t.title" class="reveal flex gap-4">
            <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-pink/[0.12]"><component :is="t.icon" class="h-5 w-5 text-pink" /></span>
            <div>
              <h3 class="text-[16px] font-semibold">{{ t.title }}</h3>
              <p class="mt-1.5 text-[15px] leading-6 text-soft">{{ t.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="guidelines" class="scroll-mt-20 py-20">
      <div class="container-site">
        <SectionHeading eyebrow="Community guidelines" title="The few rules that keep Luvhere kind." lead="Breaking them can get your account restricted or removed." />
        <div class="mt-10 divide-y divide-line overflow-hidden rounded-card border border-line">
          <div v-for="([t, b], i) in guidelines" :key="t" class="reveal grid gap-1 px-6 py-5 md:grid-cols-[48px_240px_1fr] md:gap-6">
            <span class="text-[13px] font-semibold text-quiet">0{{ i + 1 }}</span>
            <p class="font-semibold text-ink">{{ t }}</p>
            <p class="text-[15px] leading-6 text-soft">{{ b }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="container-site">
        <div class="reveal gradient-border p-8 md:p-10">
          <h2 class="text-2xl font-bold">Need help right now?</h2>
          <p class="mt-3 max-w-2xl text-[15px] leading-7 text-soft">
            If you are in immediate danger, call <strong class="text-ink">112</strong>. For women in distress, the national helpline is <strong class="text-ink">181</strong>; report cybercrime at <strong class="text-ink">1930</strong> or cybercrime.gov.in.
            To report a member, use Report in the app or email <a :href="`mailto:${supportEmail}`" class="text-pink hover:underline">{{ supportEmail }}</a>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
