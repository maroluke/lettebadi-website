<script setup lang="ts">
const props = defineProps<{
  activeSection: string | null;
}>();
</script>

<template>
  <nav class="flex gap-20 text-lg uppercase">
    <a
      href="#about"
      :class="{ 'border-primary text-primary': activeSection === 'about' }"
      class="border-b-2 border-transparent transition-all hover:border-primary hover:text-primary"
      >Badi</a
    >
    <a
      href="#service"
      :class="{ 'border-primary text-primary': activeSection === 'service' }"
      class="border-b-2 border-transparent transition-all hover:border-primary hover:text-primary"
      >Gastronomie</a
    >
    <a
      href="#events"
      :class="{ 'border-primary text-primary': activeSection === 'events' }"
      class="border-b-2 border-transparent transition-all hover:border-primary hover:text-primary"
      >Veranstaltungen</a
    >

    <a
      href="#opening-hours"
      :class="{
        'border-primary text-primary': activeSection === 'opening-hours',
      }"
      class="border-b-2 border-transparent transition-all hover:border-primary hover:text-primary"
      >Öffnungszeiten und Kontakt</a
    >
  </nav>
</template>
