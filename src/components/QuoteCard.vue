<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  quote: {
    type: Object as () => Quote,
    required: true
  }
})
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
      <span class="flex gap-2">
        <button class="p-1 bg-transparent">
          <v-icon name="md-delete-outlined" scale="1.5" />
        </button>
        <button class="p-1 bg-transparent">
          <v-icon name="la-copy-solid" scale="1.5" />

        </button>
      </span>
    </div>
  </div>
</template>