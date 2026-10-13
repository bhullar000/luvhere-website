<script setup lang="ts">
withDefaults(defineProps<{ center?: boolean }>(), { center: false })
const { appStoreUrl, playStoreUrl } = useSite()
const stores = computed(() => [
  { key: 'ios', small: 'Download on the', label: 'App Store', url: appStoreUrl },
  { key: 'android', small: 'Get it on', label: 'Google Play', url: playStoreUrl },
])
</script>

<template>
  <div class="flex flex-wrap gap-3" :class="center && 'justify-center'">
    <component
      :is="s.url ? 'a' : 'div'"
      v-for="s in stores"
      :key="s.key"
      :href="s.url || undefined"
      target="_blank"
      rel="noopener"
      class="group flex h-[54px] min-w-[150px] flex-1 items-center sm:flex-none sm:min-w-[172px] gap-3 rounded-2xl border border-line bg-white/[0.04] px-4 transition"
      :class="s.url ? 'hover:border-pink/40 hover:bg-white/[0.08]' : 'cursor-default'"
      :aria-label="s.url ? `${s.small} ${s.label}` : `${s.label} — coming soon`"
    >
      <svg v-if="s.key === 'ios'" viewBox="0 0 24 24" class="h-6 w-6 fill-ink" aria-hidden="true">
        <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.38-.92-2.4-3.66ZM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.68-1.28Z" />
      </svg>
      <svg v-else viewBox="0 0 24 24" class="h-6 w-6 fill-ink" aria-hidden="true">
        <path d="M4.6 2.3c-.36.2-.6.6-.6 1.1v17.2c0 .5.24.9.6 1.1L14.3 12 4.6 2.3Zm11.1 8.3-2.4-2.4L6.2 1.6l9.5 9Zm0 2.8-9.5 9 7.1-6.6 2.4-2.4Zm1.4-2.1-2.1 2.1-.1.1 2.3 2.3 3.1-1.8c.9-.5.9-1.4 0-1.9l-3.2-1.8v1Z" />
      </svg>
      <span class="flex flex-col leading-tight">
        <span class="text-[11px] text-soft">{{ s.url ? s.small : 'Coming soon on' }}</span>
        <span class="text-[16px] font-semibold text-ink">{{ s.label }}</span>
      </span>
    </component>
  </div>
</template>
