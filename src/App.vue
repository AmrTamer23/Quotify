<script setup lang="ts">
import RandomQuote from './components/RandomQuote.vue';
</script>

<template>
  <main class="mx-10 lg:mx-20 my-20 lg:my-0 min-h-screen flex flex-col items-center justify-center">
    <h1 id="logo" class="font-bold select-none pt-10">
      Quotify
    </h1>

    <div class="my-16 w-full">
      <Suspense>
        <RandomQuote />
      </Suspense>
    </div>
  </main>
</template>
