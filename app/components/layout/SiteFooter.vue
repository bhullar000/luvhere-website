<script setup lang="ts">
import { legal, nav } from '~/config/site'
const { supportEmail } = useSite()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div class="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
      <div class="max-w-sm">
        <BrandMark />
        <p class="mt-4 text-[15px] leading-7 text-soft">Privacy-first dating. Meet real, verified people for who they are — photos come later.</p>
        <a :href="`mailto:${supportEmail}`" class="mt-4 inline-block text-[15px] text-pink hover:underline">{{ supportEmail }}</a>
      </div>
      <div>
        <p class="mb-4 text-sm font-semibold text-ink">Explore</p>
        <ul class="space-y-3">
          <li v-for="item in nav" :key="item.to"><NuxtLink :to="item.to" class="text-[15px] text-soft hover:text-ink">{{ item.label }}</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="mb-4 text-sm font-semibold text-ink">Legal</p>
        <ul class="space-y-3">
          <li v-for="item in legal" :key="item.to"><NuxtLink :to="item.to" class="text-[15px] text-soft hover:text-ink">{{ item.label }}</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="container-site flex flex-col gap-2 border-t border-line py-6 text-[13px] text-quiet md:flex-row md:justify-between">
      <p>© {{ year }} Luvhere. All rights reserved.</p>
      <p>For adults 18+ only.</p>
    </div>
  </footer>
</template>
