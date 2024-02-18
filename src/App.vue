<script setup lang="ts">
import { useRouter } from 'vue-router'
import ThemeChanger from '@/components/ThemeChanger.vue'
const router = useRouter()

</script>

<template>
  <main class="mx-10 lg:mx-20 my-20 lg:my-0 min-h-screen flex flex-col items-center justify-center">
    <RouterLink to="/">
      <h1 id="logo" class="font-bold select-none pt-10">
        Quotify
      </h1>
    </RouterLink>
    <div class="my-16 w-full">
      <RouterView />
    </div>
  </main>
  <div v-if="router.currentRoute.value.path !== '/saved-quotes'" class="fixed bottom-4 right-4">
    <RouterLink to="saved-quotes">
      <button class="bg-transparent hover:bg-transparent">
        <v-icon name="co-save" scale="2" />
      </button>

    </RouterLink>
  </div>
  <div class="fixed top-4 right-4">
    <ThemeChanger />
  </div>
</template>
