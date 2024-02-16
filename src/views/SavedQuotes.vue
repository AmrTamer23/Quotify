<script setup lang="ts">
import { useSavedQuotesStore } from '@/stores/savedQuotes'
import QuoteCard from '@/components/QuoteCard.vue'
const savedQuotesStore = useSavedQuotesStore()
</script>

<template>
  <main class="h-full">
    <section class="*:mx-auto space-y-8">
      <h2>
        Saved Quotes
      </h2>

      <ul class="w-[40rem] *:w-full flex flex-col items-center gap-4 max-h-[35rem] p-5 overflow-y-scroll">

        <li v-for="quote in savedQuotesStore.savedQuotes" :key="`quote-id:${quote._id}`">
          <QuoteCard :quote="quote" />
        </li>

      </ul>
    </section>
  </main>
</template>
