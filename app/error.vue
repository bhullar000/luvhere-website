<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps<{ error: NuxtError }>()
const notFound = computed(() => props.error.statusCode === 404)
</script>

<template>
  <NuxtLayout>
    <section class="container-site grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p class="text-brand text-7xl font-bold">{{ error.statusCode }}</p>
        <h1 class="mt-4 text-2xl font-bold">{{ notFound ? 'This page didn’t match.' : 'Something went wrong.' }}</h1>
        <p class="mt-3 text-soft">{{ notFound ? 'The page you’re looking for doesn’t exist.' : 'Please try again in a moment.' }}</p>
        <button class="btn-primary mt-8" @click="clearError({ redirect: '/' })">Back home</button>
      </div>
    </section>
  </NuxtLayout>
</template>
