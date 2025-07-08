<script setup lang="ts">
import { useParallax, useScroll } from '@vueuse/core';

const target = ref<HTMLElement | null>(null);
const parallax = reactive(useParallax(target));
const { y } = useScroll(window);

const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * -20}px) translateY(${
    parallax.roll * 10
  }px) scale(1) rotate(${y.value * 0.1}deg)`,
}));

const { eventData, status } = defineProps({
  eventData: Array,
  status: String,
});
</script>

<template>
  <div
    ref="target"
    class="mx-auto flex w-full max-w-screen-xl flex-col gap-8 xl:pt-40"
  >
    <section class="rounded-xl">
      <div
        class="flex flex-col gap-8 sm:items-center xl:flex-row xl:justify-around"
      >
        <div
          :style="layer0"
          class="max-w-md grow text-primary sm:p-20 xl:max-w-none"
        >
          <FloatingWomen2 class="h-full w-full drop-shadow-light" />
        </div>

        <div id="opening-hours" class="px-4 xl:max-w-screen-sm xl:p-0">
          <UiSectionTitle title="Öffnungszeiten und Kontakt" />

          <UiMainTitle
            title="Täglich geöffnet<br />von 09:00<br />bis 21:00 Uhr"
          />

          <div>
            <p class="mb-5 text-2xl">
              Bei Schlechtwetter schliesst die Badi gegebenenfalls früher.
            </p>
            <p class="mb-5 text-2xl">
              <strong>Badisaison</strong><br />Von 10. Mai bis 21. September
              2025
            </p>
            <p class="mb-5 text-2xl">
              <strong>Gastro Pop-Up im Herbst</strong><br />22. September bis
              31. Oktober.<br />
              <a href="#" class="underline">Lesen Sie hier mehr</a>.
            </p>
          </div>

          <Footer />
        </div>
      </div>
    </section>
  </div>
</template>
