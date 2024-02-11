<script setup lang="ts">
import RandomQuote from './components/RandomQuote.vue';
</script>

<template>
  <main class="px-10 lg:px-20 py-20 lg:min-h-screen flex flex-col items-center justify-center">
    <h1 id="logo" class="font-bold select-none">
      Quotify
    </h1>

    <div class="my-16 w-full">
      <Suspense>
        <RandomQuote />
      </Suspense>
    </div>
  </main>
</template>
