<script setup lang="ts">
import { MoveRight, MoveDown } from "lucide-vue-next";

const { eventData, status } = defineProps({
  eventData: Array,
  status: String,
});
</script>

<template>
  <section id="events" class="rounded-xl flex flex-col gap-10 overflow-hidden">
    <div class="flex justify-between items-center gap-40">
      <div class="flex flex-col mb-10 flex-1 max-w-screen-md pl-28 pt-40">
        <h1 class="mb-20 uppercase tracking-wider inline-block text-lg">
          Veranstaltungen
        </h1>
        <h2 class="text-6xl mb-10">
          Unvergessliches Erlebnis in ungezwungener und stylischer Umgebung.
        </h2>
        <p class="text-2xl mb-5">
          Eine Einzigartigkeit in der Lettebadi ist der 150m2 grosse 'Flussraum'
          der von Firmen wie auch Privaten für die unterschiedlichsten Events
          gemietet werden kann. Ob Firmenjubiläum, Seminar, Teamevent oder
          Geburtstage – in der Lettebadi lässt sich alles in ungezwungener und
          stylischer Umgebung austragen.
        </p>
        <p class="text-2xl">
          Dieser spezielle Ort, in Zusammenhang mit unserem einzigartigen
          Foodabgebot, wird Ihren Gästen ein unvergessliche Erlebnis bieten!
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
                class="text-6xl uppercase group transition-all border-t-4 border-black pt-5 hover:text-primary hover:border-primary"
              >
                {{ event.title }}

                <button
                  class="font-bold text-lg text-start min-w-52 flex justify-between items-center w-full"
                >
                  <p class="whitespace-nowrap uppercase">
                    Verfügbarkeit prüfen
                  </p>
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

            <div
              class="relative flex flex-col gap-2 border-t-4 border-black pt-10 mt-10 w-full opacity-25 animate-pulse"
            >
              <div class="w-40 h-4 bg-black"></div>
              <button
                class="h-4 bg-black min-w-52 flex justify-between items-center"
              ></button>
            </div>

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

      <div class="text-primary grow flex-2 -mr-20 max-w-5xl">
        <Social class="w-full" />
      </div>
    </div>
  </section>
</template>
