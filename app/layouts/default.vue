<template>
  <div class="flex min-h-screen flex-col">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-surface focus:px-4 focus:py-2">Skip to content</a>
    <SiteHeader />
    <main id="main" class="flex-1"><slot /></main>
    <SiteFooter />
  </div>
</template>
