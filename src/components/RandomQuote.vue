<script setup lang="ts">
import { ref } from 'vue';
import { Quote } from '../lib/types';
import { getRandomQuote } from '../lib/api/random-quote';

const quote = ref<Quote | null>(null);

quote.value = await getRandomQuote();

const refreshQuote = async () => {
  quote.value = await getRandomQuote();
};

</script>
<template>
  <main class="space-y-16 cursor-default">
    <section class="space-y-8 *:mx-auto px-10 min-h-[40vh]">
      <h3 class="text-center italic font-semibold leading-normal font-pt-mono">
        {{ quote?.content }}
      </h3>
      <div class="text-xl font-medium w-fit">
        - {{ quote?.author }}
      </div>
    </section>
    <div class="flex justify-evenly w-2/4 mx-auto">
      <button>
        <v-icon name="co-save" scale="2" />
        <span class="hidden lg:block">
          Save
        </span>
      </button>
      <button @click="refreshQuote">
        <v-icon name="gi-perspective-dice-six-faces-three" scale="2" animation="ring" hover />
        <span class="hidden lg:block">
          Randomize
        </span>
      </button>
      <button>
        <v-icon name="la-copy-solid" scale="2" />
        <span class="hidden lg:block">
          Copy
        </span>
      </button>
    </div>
  </main>
</template>