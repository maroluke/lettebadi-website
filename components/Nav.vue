<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './shadcn/ui/dropdown-menu/';
import { Waves } from 'lucide-vue-next';

const props = defineProps<{
  activeSection: string | null;
}>();
</script>

<template>
  <nav class="hidden gap-20 text-2xl xl:flex">
    <NavLink
      :active="activeSection === 'about'"
      :id="'about'"
      :label="'Badi'"
    />
    <NavLink
      :active="activeSection === 'service'"
      :id="'service'"
      :label="'Gastronomie'"
    />
    <NavLink
      :active="activeSection === 'events'"
      :id="'events'"
      :label="'Veranstaltungen'"
    />
    <NavLink
      :active="activeSection === 'reservation'"
      :id="'reservation'"
      :label="'Reservation'"
    />
    <NavLink
      :active="activeSection === 'opening-hours'"
      :id="'opening-hours'"
      :label="'Öffnungszeiten und Kontakt'"
    />
  </nav>

  <div class="flex items-center xl:hidden">
    <DropdownMenu>
      <DropdownMenuTrigger><Waves /></DropdownMenuTrigger>
      <DropdownMenuContent class="p-0">
        <DropdownMenuItem :class="'p-0'"
          ><NavLink
            :active="activeSection === 'about'"
            :id="'about'"
            :label="'Badi'"
            :compact="true"
        /></DropdownMenuItem>
        <DropdownMenuItem :class="'p-0'"
          ><NavLink
            :active="activeSection === 'service'"
            :id="'service'"
            :label="'Gastronomie'"
            :compact="true"
        /></DropdownMenuItem>
        <DropdownMenuItem :class="'p-0'"
          ><NavLink
            :active="activeSection === 'events'"
            :id="'events'"
            :label="'Veranstaltungen'"
            :compact="true"
        /></DropdownMenuItem>
        <DropdownMenuItem class="p-0"
          ><NavLink
            :active="activeSection === 'opening-hours'"
            :id="'opening-hours'"
            :label="'Öffnungszeiten und Kontakt'"
            :compact="true"
        /></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
