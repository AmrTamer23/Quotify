<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <main class="mx-10 lg:mx-20 my-20 lg:my-0 min-h-screen max-h-screen flex flex-col items-center justify-center">
    <h1 id="logo" class="font-bold select-none pt-10">
      Quotify
    </h1>
    <div class="my-16 w-full">
      <RouterView />
    </div>
  </main>
  <div v-if="router.currentRoute.value.path !== '/saved-quotes'" class="fixed bottom-2 right-2">
    <RouterLink to="saved-quotes">
      <v-icon name="co-save" scale="2" />
    </RouterLink>
  </div>
</template>
