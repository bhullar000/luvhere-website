<script setup lang="ts">
import { ShieldCheck, Check } from 'lucide-vue-next'
const steps = ['Phone number', 'Live selfie', 'Photos match your face']
</script>

<template>
  <div class="relative flex h-full flex-col items-center px-5 pt-6 text-center">
    <p class="text-[18px] font-bold text-ink">Verify it’s you</p>
    <p class="mt-1 text-[11px] text-soft">A quick live check keeps Luvhere real.</p>

    <div class="relative mt-8 grid h-[170px] w-[170px] place-items-center">
      <span class="animate-pulse-ring absolute inset-0 rounded-full border-2 border-pink/60" />
      <div class="relative h-[150px] w-[150px] overflow-hidden rounded-full border-2 border-pink/70 bg-elevated">
        <svg viewBox="0 0 100 100" class="absolute inset-0 h-full w-full text-quiet/60" aria-hidden="true">
          <circle cx="50" cy="40" r="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3" />
          <path d="M20 92c4-18 16-26 30-26s26 8 30 26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3" />
        </svg>
        <span class="animate-scan absolute inset-x-3 h-[2px] rounded-full bg-pink shadow-[0_0_12px_#FF3F8E]" />
      </div>
    </div>

    <div class="mt-8 w-full space-y-2">
      <div v-for="(s, i) in steps" :key="s" class="flex items-center gap-3 rounded-2xl border border-line bg-surface px-3 py-2.5 text-left">
        <span class="grid h-6 w-6 place-items-center rounded-full" :class="i < 2 ? 'bg-success/15 text-success' : 'bg-pink/15 text-pink'">
          <Check v-if="i < 2" class="h-3.5 w-3.5" /><ShieldCheck v-else class="h-3.5 w-3.5" />
        </span>
        <span class="text-[12px] text-value">{{ s }}</span>
        <span class="ml-auto text-[10px]" :class="i < 2 ? 'text-success' : 'text-pink'">{{ i < 2 ? 'Done' : 'Checking…' }}</span>
      </div>
    </div>
  </div>
</template>
