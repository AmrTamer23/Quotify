<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const changeTheme = (theme: Theme) => {
  themeStore.change(theme)
  const html = document.getElementsByTagName('html')[0];
  html.classList.value = theme;
}
const setThemeOnMount = () => {
  const html = document.getElementsByTagName('html')[0];
  html.classList.value = themeStore.theme;
}
setThemeOnMount()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button class="bg-transparent hover:bg-transparent">
        <v-icon name="bi-palette" scale="2" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56 mx-4 bg-card-base p-0">
      <div class="flex flex-col gap-2 p-4">
        <button class="p-2 rounded-md" :class="themeStore.theme === 'default' && 'text-skin-base bg-button-base'"
          name="default" @click="changeTheme('default')">
          <span>
            Default
          </span>
        </button>
        <button class="p-2 rounded-md" :class="themeStore.theme === 'default' && 'text-skin-base bg-button-base'"
          name="vesper" @click="changeTheme('vesper')">
          <span>
            Vesper
          </span>
        </button>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
</template>