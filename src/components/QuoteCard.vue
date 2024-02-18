<script lang="ts" setup>
import { useSavedQuotesStore } from '@/stores/savedQuotes'
import { useClipboard } from '@vueuse/core'


defineProps({
  quote: {
    type: Object as () => Quote,
    required: true
  }
})

const emit = defineEmits(['remove', 'copy'])

const { remove } = useSavedQuotesStore()

const { copy, copied } = useClipboard();


const copyQuote = (quote: Quote) => {
  copy(`${quote.content} - ${quote.author}`)
  emit('copy');
}

const removeQuote = (quote: Quote) => {
  remove(quote)
  emit('remove')
}


</script>
<template>
  <div class="bg-russian_violet-500 shadow-md shadow-african_violet-400 rounded-lg p-6 flex flex-col gap-2">
    <h2 class="text-xl font-medium leading-normal font-pt-mono">
      {{ quote.content }}
    </h2>
    <div class="flex justify-between items-center">
      <span>
        - {{ quote.author }}
      </span>
      <span class="flex gap-2 items-center">
        <button class="p-1 bg-transparent hover:bg-red-700" @click="removeQuote(quote)">
          <v-icon name="md-delete-outlined" scale="1.5" />
        </button>
        <button @click="copyQuote(quote)" class="bg-transparent p-1" :class="copied && 'bg-emerald-800'">
          <template v-if="copied">
            <v-icon name="bi-check-lg" scale="1.5" />

          </template>
          <template v-else>
            <v-icon name="la-copy-solid" scale="1.5" />
          </template>
        </button>
      </span>
    </div>
  </div>
</template>