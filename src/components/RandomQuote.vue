<script setup lang="ts">
</script>
<template>
  <main class="space-y-16 cursor-default">
    <section class="space-y-8">
      <h3 class="text-center italic font-semibold leading-normal font-pt-mono">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis tenetur ullam. Nemo quos, soluta mollitia labore
        quam libero dicta numquam quaerat ea sunt quidem modi enim! In, et nemo?
      </h3>
      <div class="text-xl font-medium">
        -The Author
      </div>
    </section>
    <div class="flex justify-evenly">
      <button>
        <v-icon name="co-save" scale="2" />
        <span class="hidden lg:block">
          Save
        </span>
      </button>
      <button>
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