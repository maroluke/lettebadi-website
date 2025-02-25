<script setup lang="ts">
import { useParallax, useScroll } from "@vueuse/core";

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
    class="flex flex-col gap-8 w-full max-w-screen-2xl mx-auto pt-40"
  >
    <section class="rounded-xl">
      <div class="flex gap-8 justify-around items-center">
        <div :style="layer0" class="grow text-primary pr-20">
          <FloatingWomen2 class="w-full h-full drop-shadow-light" />
        </div>

        <div class="max-w-screen-sm">
          <UiSectionTitle title="Öffnungszeiten und Kontakt" />
          <h2 class="text-6xl mb-10">
            Täglich geöffnet<br />von 09:00<br />bis 22:00 Uhr
          </h2>

          <div>
            <p class="text-2xl mb-5">
              Bei Schlechtwetter schliesst die Badi um 14 Uhr.
            </p>
            <p class="text-2xl mb-5">
              <strong>Badisaison</strong><br />Von 15. Mai bis 15. September
              2025
            </p>
            <p class="text-2xl mb-5">
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
