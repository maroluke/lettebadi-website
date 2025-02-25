<script setup lang="ts">
import { MoveRight } from "lucide-vue-next";
import { useParallax, useScroll } from "@vueuse/core";

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
  <section ref="target" id="events" class="rounded-xl flex flex-col gap-10">
    <div class="flex justify-between items-center gap-40">
      <div class="flex flex-col mb-10 flex-1 max-w-screen-md pl-28 pt-40">
        <UiSectionTitle title="Veranstaltungen" />
        <h2 class="text-6xl mb-10">
          Unvergesslich<br />Ungezwungenen<br />Stylisch
        </h2>
        <p class="text-2xl mb-5">
          Eine Einzigartigkeit der Lettebadi ist der 150m2 grosse 'Flussraum'
          der von Firmen wie auch Privaten für die unterschiedlichsten Events
          gemietet werden kann. Ob Firmenjubiläum, Seminar, Teamevent oder
          Geburtstage – in der Lettebadi lässt sich alles in ungezwungener und
          stylischer Umgebung austragen.
        </p>
        <p class="text-2xl mb-5">
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
              class="cursor-pointer relative font-bold text-2xl flex flex-col gap-2 mt-20 w-full"
            >
              <div
                :data-cal-link="`lettebadi/${event.slug}`"
                :data-cal-namespace="event.slug"
                data-cal-config='{"layout": "month_view"}'
                class="flex justify-between w-full text-6xl uppercase group transition-all border-t-4 border-black pt-5 hover:text-primary hover:border-primary"
              >
                <p class="grow">{{ event.title }}</p>

                <button
                  class="font-bold text-lg text-start flex justify-between items-center shrink"
                >
                  <MoveRight
                    class="w-6 h-6 opacity-0 duration-300 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                  ></MoveRight>
                </button>
              </div>
            </div>
          </template>

          <template v-else>
            <div
              class="relative flex flex-col gap-2 border-t-4 border-black pt-10 mt-10 w-full opacity-25 animate-pulse"
            >
              <div class="w-40 h-4 bg-black"></div>
              <button
                class="h-4 bg-black min-w-52 flex justify-between items-center"
              ></button>
            </div>
          </template>
        </div>
      </div>

      <div :style="layer0" class="text-primary grow flex-2 -mr-20 max-w-5xl">
        <Social class="w-full" />
      </div>
    </div>
  </section>
</template>
