<script setup lang="ts">
import { ref, watch } from 'vue';
import { getRandomQuote } from '../lib/api/random-quote';
import { useClipboard } from '@vueuse/core'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useToast } from '@/components/ui/toast/use-toast'
import { useSavedQuotesStore } from '@/stores/savedQuotes'


const quote = ref<Quote | null>(null);
const { copy } = useClipboard();
const toBeCopied = ref<string | null>(null);
const savedQuotesStore = useSavedQuotesStore();
const { toast } = useToast()

watch(quote, () => {
  toBeCopied.value = `${quote.value?.content} - ${quote.value?.author}`;
});


const refreshQuote = async () => {
  quote.value = await getRandomQuote();
};


const copyQuote = () => {
  copy(toBeCopied.value!)
  toast({
    title: 'Quote Copied!',
    variant: 'default',
  });
}

const saveQuote = (quote: Quote) => {
  if (!savedQuotesStore.savedQuotes.find(q => q._id === quote._id))
    savedQuotesStore.add(quote);
  toast({
    title: 'Quote Saved!',
    variant: 'default',
  });
}


refreshQuote();
</script>


<template>
  <main v-if="quote" class="space-y-16 cursor-default">
    <section class="space-y-8 *:mx-auto px-10 min-h-[40vh]">
      <h3 class="text-center italic font-semibold leading-normal font-pt-mono">
        {{ quote.content }}
      </h3>
      <div class="text-xl font-medium w-fit text-skin-faded">
        - {{ quote.author }}
      </div>
    </section>
    <div class="flex gap-4 justify-evenly w-2/4 mx-auto *:text-button-base">
      <button @click="saveQuote(quote)">
        <v-icon name="co-save" scale="2" />
        <span class="hidden lg:block">
          Save
        </span>
      </button>
      <button @click="refreshQuote" class="group/randBtn">
        <v-icon name="gi-perspective-dice-six-faces-three" scale="2" class="group-hover/randBtn:animate-spin" />
        <span class="hidden lg:block">
          Randomize
        </span>
      </button>
      <button @click="copyQuote">
        <v-icon name="la-copy-solid" scale="2" />
        <span class="hidden lg:block">
          Copy
        </span>
      </button>
      <Toaster />
    </div>
  </main>
</template>