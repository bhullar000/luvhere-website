<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { nav } from '~/config/site'

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 8 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header class="sticky top-0 z-50 transition duration-300" :class="scrolled || open ? 'border-b border-line bg-ground/80 backdrop-blur-xl' : 'border-b border-transparent'">
    <div class="container-site flex h-16 items-center justify-between md:h-[72px]">
      <BrandMark />
      <nav class="hidden items-center gap-8 lg:flex" aria-label="Main">
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" class="text-[15px] font-medium text-soft transition hover:text-ink">{{ item.label }}</NuxtLink>
      </nav>
      <div class="flex items-center gap-2">
        <NuxtLink to="/#download" class="btn-primary hidden h-11 px-5 text-[15px] sm:inline-flex">Get the app</NuxtLink>
        <button class="grid h-11 w-11 place-items-center rounded-full border border-line text-ink lg:hidden" :aria-expanded="open" aria-label="Menu" @click="open = !open">
          <X v-if="open" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </div>
    <nav v-if="open" class="container-site flex flex-col gap-1 pb-5 lg:hidden" aria-label="Mobile">
      <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" class="rounded-xl px-3 py-3 text-[16px] font-medium text-value hover:bg-white/5">{{ item.label }}</NuxtLink>
      <NuxtLink to="/#download" class="btn-primary mt-2">Get the app</NuxtLink>
    </nav>
  </header>
</template>
