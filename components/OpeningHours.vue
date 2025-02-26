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
    id="opening-hours"
    class="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 2xl:pt-40"
  >
    <section class="rounded-xl">
      <div class="flex flex-col items-center justify-around gap-8 2xl:flex-row">
        <div :style="layer0" class="grow text-primary 2xl:p-20">
          <FloatingWomen2 class="h-full w-full drop-shadow-light" />
        </div>

        <div class="max-w-screen-sm px-4 2xl:p-0">
          <UiSectionTitle title="Öffnungszeiten und Kontakt" />

          <UiMainTitle
            title="Täglich geöffnet<br />von 09:00<br />bis 22:00 Uhr"
          />

          <div>
            <p class="mb-5 text-2xl">
              Bei Schlechtwetter schliesst die Badi um 14 Uhr.
            </p>
            <p class="mb-5 text-2xl">
              <strong>Badisaison</strong><br />Von 15. Mai bis 15. September
              2025
            </p>
            <p class="mb-5 text-2xl">
              <strong>Gastro Pop-Up im Herbst</strong><br />15. September bis
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
