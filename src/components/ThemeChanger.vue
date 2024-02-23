<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useThemeStore, setTheme } from '@/stores/theme'
const themeStore = useThemeStore()
setTheme(themeStore.theme)
const themesList: {
  name: string
  color: Theme
}[]
  = [
    {
      name: 'Default',
      color: 'default'
    },
    {
      name: 'Vesper',
      color: 'vesper'
    },
    {
      name: 'Solarized',
      color: 'solarized'
    }
  ]
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button class="bg-transparent hover:bg-transparent">
        <v-icon name="bi-palette" scale="2" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56 mx-4 bg-card-base p-0 ">
      <div class="flex flex-col divide-y-2">
        <button class="p-3 text-button-themeSwitcher my-0 rounded-none" v-for="theme in themesList" name="theme.name"
          @click="themeStore.change(theme.color)" @mouseenter="themeStore.changeOnHover(theme.color)"
          @mouseleave="themeStore.changeOnHoverOut()">
          <span class="text-base">
            {{ theme.name }}
          </span>
        </button>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
</template>