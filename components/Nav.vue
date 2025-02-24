<script setup lang="ts">
const props = defineProps<{
  activeSection: string | null;
}>();
</script>

<template>
  <nav class="flex gap-20 text-lg uppercase">
    <NavLink :active="activeSection === 'about'" id="about" label="Badi" />
    <NavLink
      :active="activeSection === 'service'"
      id="service"
      label="Gastronomie"
    />
    <NavLink
      :active="activeSection === 'events'"
      id="events"
      label="Veranstaltungen"
    />
    <NavLink
      :active="activeSection === 'opening-hours'"
      id="opening-hours"
      label="Öffnungszeiten und Kontakt"
    />
  </nav>
</template>
