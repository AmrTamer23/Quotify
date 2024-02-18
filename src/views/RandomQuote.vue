<script setup lang="ts">
import { ref, watch } from 'vue';
import { getRandomQuote } from '../lib/api/random-quote';
import { useClipboard } from '@vueuse/core'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useToast } from '@/components/ui/toast/use-toast'
import { useSavedQuotesStore } from '@/stores/savedQuotes'


const quote = ref<Quote | null>(null);
const { copy, copied } = useClipboard();
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
      <div class="text-xl font-medium w-fit">
        - {{ quote.author }}
      </div>
    </section>
    <div class="flex gap-4 justify-evenly w-2/4 mx-auto">
      <button @click="saveQuote(quote)">
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
      <button @click="copyQuote" :class="copied && 'bg-emerald-800'">
        <template v-if="copied">
          <v-icon name="bi-check-lg" scale="2" />
          <span class="hidden lg:block">
            Copied
          </span>
        </template>
        <template v-else>
          <v-icon name="la-copy-solid" scale="2" />
          <span class="hidden lg:block">
            Copy
          </span>
        </template>
      </button>
      <Toaster />
    </div>
  </main>
</template>