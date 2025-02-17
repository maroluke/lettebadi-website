<script setup lang="ts">
import { MoveRight, MoveDown } from "lucide-vue-next";

const { data, status } = defineProps({
  data: Array,
  status: String,
});
</script>

<template>
  <div class="flex flex-col gap-8 grow max-w-screen-md">
    <section class="rounded-xl">
      <h2 class="text-6xl mb-10">Buche die exklusive Location</h2>
      <p class="text-2xl">
        Wähle zwischen den Veranstaltungsterminen für die Location Lettebadi.
      </p>
      <p class="text-2xl">
        Klicke, um den Kalender anzuzeigen und eine Reservierung anzufordern.
      </p>
      <a href="#event-types">
        <button
          class="font-bold text-lg text-start min-w-52 mt-5 flex justify-between items-center group hover:text-primary"
        >
          <p class="whitespace-nowrap">Mehr erfahren</p>

          <MoveDown
            class="w-6 h-6 opacity-0 duration-300 -translate-y-4 transition-all text-black group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100"
          ></MoveDown>
        </button>
      </a>
    </section>

    <section class="flex gap-10 justify-between">
      <template v-if="status === 'loaded'">
        <div
          v-for="event in data"
          :key="event.id"
          class="cursor-pointer relative font-bold text-2xl flex flex-col gap-2 mt-10 w-full"
        >
          <div
            :data-cal-link="`lettebadi/${event.slug}`"
            :data-cal-namespace="event.slug"
            data-cal-config='{"layout": "month_view"}'
            class="group transition-all border-t-4 border-black pt-10 hover:text-primary hover:border-primary"
          >
            {{ event.title }}

            <button
              class="font-bold text-lg text-start min-w-52 flex justify-between items-center w-full"
            >
              <p class="whitespace-nowrap">Verfügbarkeit prüfen</p>
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
    </section>
  </div>

  <FloatingWomen1 class="grow h-full text-primary max-w-screen-sm" />
</template>
