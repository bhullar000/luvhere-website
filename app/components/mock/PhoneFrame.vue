<!-- An iPhone-shaped frame for the HTML app mockups. -->
<template>
  <div class="relative w-[300px] shrink-0 rounded-[46px] border border-white/10 bg-[#050307] p-[9px] shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(255,63,142,0.10)]">
    <div class="relative aspect-[9/19.3] overflow-hidden rounded-[38px] bg-ground">
      <div class="absolute left-1/2 top-2.5 z-20 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-black" />
      <div class="absolute inset-x-0 top-0 z-10 flex h-11 items-center justify-between px-7 pt-1 text-[12px] font-semibold text-ink">
        <span>9:41</span>
        <span class="flex items-center gap-1">
          <span class="h-2.5 w-4 rounded-[3px] border border-ink/80"><span class="block h-full w-3/4 bg-ink/80" /></span>
        </span>
      </div>
      <div class="absolute inset-0 pt-11"><slot /></div>
    </div>
  </div>
</template>
