<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next';
import { useParallax, useScroll } from '@vueuse/core';

const target = ref<HTMLElement | null>(null);
const parallax = reactive(useParallax(target));
const { y } = useScroll(window);

const layer0 = computed(() => ({
  transform: `translateX(${
    y.value * -0.04 + parallax.tilt * -20
  }px) translateY(${y.value * 0.05 + parallax.roll * 10}px) scale(1)`,
}));

const { eventData, status } = defineProps({
  eventData: Array,
  status: String,
});
</script>

<template>
  <section ref="target" id="events" class="flex flex-col gap-10 rounded-xl">
    <div class="flex items-center justify-between gap-40">
      <div class="mb-10 flex max-w-screen-md flex-1 flex-col pl-28 pt-40">
        <UiSectionTitle title="Veranstaltungen" />
        <UiMainTitle title="Ihr Anlass in der Badi" />
        <p class="mb-5 text-2xl">
          Eine Einzigartigkeit der Lettebadi ist der 150m2 grosse 'Flussraum'
          der von Firmen wie auch Privaten für die unterschiedlichsten Events
          gemietet werden kann. Ob Firmenjubiläum, Seminar, Teamevent oder
          Geburtstage – in der Lettebadi lässt sich alles in ungezwungener und
          stylischer Umgebung austragen.
        </p>
        <p class="mb-5 text-2xl">
          Dieser spezielle Ort, in Zusammenhang mit unserem einzigartigen
          Foodabgebot, wird Ihren Gästen ein unvergessliche Erlebnis bieten!
        </p>
        <p class="text-2xl">
          Prüfen Sie auf unserem Eventkalender ob Ihr Wunschtermin noch
          verfügbar ist:
        </p>

        <div>
          <template v-if="status === 'loaded'">
            <div
              v-for="event in eventData"
              :key="event.id"
              class="relative mt-20 flex w-full cursor-pointer flex-col gap-2 text-2xl font-bold"
            >
              <div
                :data-cal-link="`lettebadi/${event.slug}`"
                :data-cal-namespace="event.slug"
                data-cal-config='{"layout": "month_view"}'
                class="group w-full border-t-4 border-black pt-5 text-6xl uppercase transition-all hover:border-primary hover:text-primary"
              >
                <p class="grow">{{ event.title }}</p>

                <button
                  class="flex w-full items-center justify-between text-start text-lg font-bold"
                >
                  <span class="text-2xl font-normal uppercase"
                    >Jetzt Verfügbarkeit prüfen</span
                  >
                  <MoveRight
                    class="h-6 w-6 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  ></MoveRight>
                </button>
              </div>
            </div>
          </template>

          <template v-else>
            <div
              class="relative mt-10 flex w-full animate-pulse flex-col gap-2 border-t-4 border-black pt-10 opacity-25"
            >
              <div class="h-4 w-40 bg-black"></div>
              <button
                class="flex h-4 min-w-52 items-center justify-between bg-black"
              ></button>
            </div>
          </template>
        </div>
      </div>

      <div :style="layer0" class="flex-2 -mr-20 max-w-5xl grow text-primary">
        <Social class="w-full drop-shadow-light" />
      </div>
    </div>
  </section>
</template>
