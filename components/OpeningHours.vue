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
          id="opening-hours"
          class="flex w-full flex-col items-start justify-between gap-8 px-4 pb-40 pt-10 xl:flex-row"
        >
          <!-- <UiSectionTitle title="Öffnungszeiten 2026" /> -->

          <div>
            <UiMainTitle title="Öffnungszeiten 2026" />

            <div class="flex flex-col gap-4">
              <div>
                <p class="text-2xl font-bold">9. bis 30. Mai 2026</p>
                <p class="text-2xl">09:00 bis 20:00 Uhr</p>
              </div>

              <div>
                <p class="text-2xl font-bold">31. Mai bis 22. August 2026</p>
                <p class="text-2xl">09:00 bis 21:00 Uhr</p>
              </div>

              <div>
                <p class="text-2xl font-bold">
                  16. August bis 5. September 2026
                </p>
                <p class="text-2xl">09:00 bis 20:00 Uhr</p>
              </div>

              <div>
                <p class="text-2xl font-bold">06. bis 19. September 2026</p>
                <p class="text-2xl">09:00 Uhr bis 19:00 Uhr</p>
              </div>

              <p class="text-2xl">
                Bei Schlechtwetter schliesst die Badi jeweils um 14 Uhr.
              </p>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </section>
  </div>
</template>
