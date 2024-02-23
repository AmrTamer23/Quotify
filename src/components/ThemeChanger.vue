<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useThemeStore, setTheme } from '@/stores/theme'
const themeStore = useThemeStore()
setTheme(themeStore.theme)
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
        <button class="p-2 rounded-md text-button-themeSwitcher" name="default" @click="themeStore.change('default')"
          @mouseenter="themeStore.changeOnHover('default')" @mouseleave="themeStore.changeOnHoverOut()">
          <span>
            Default
          </span>
        </button>
        <button class="p-2 rounded-md text-button-themeSwitcher" name="vesper" @click="themeStore.change('vesper')"
          @mouseenter="themeStore.changeOnHover('vesper')" @mouseleave="themeStore.changeOnHoverOut()">
          <span>
            Vesper
          </span>
        </button>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
</template>