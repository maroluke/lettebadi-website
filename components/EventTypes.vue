<script setup lang="ts">
import { Clock, HandCoins, Users } from "lucide-vue-next";

const { data, status } = defineProps({
  data: Array,
  status: String,
});

const dataContent = [
  {
    id: 1,
    text: "Genießen Sie den Charme historischer Badekultur im Tageslicht – ideal für Business-Meetings, kreative Workshops oder private Feiern in einem lichtdurchfluteten Ambiente.",
    slug: "eventraum-lettebadi-tag",
  },
  {
    id: 2,
    text: "Erleben Sie stimmungsvolle Abende in einem modernisierten Raum, der Tradition und Innovation vereint – perfekt für Galas, Empfänge oder festliche Abendveranstaltungen.",
    slug: "eventraum-lettebadi-abend",
  },
  {
    id: 3,
    text: "Erheben Sie Ihr Event auf ein neues Level: Unser Rooftop bietet einen atemberaubenden Blick über Zürich und lädt zu stilvollen Dinner-Events und besonderen Feiern unter freiem Himmel ein.",
    slug: "rooftop-lettebadi-abend",
  },
];
</script>

<template>
  <div id="event-types" class="flex flex-col gap-8 grow">
    <section class="rounded-xl flex flex-col">
      <div class="flex justify-end items-center gap-40">
        <div class="flex flex-col mb-10 flex-1 max-w-screen-md">
          <h2 class="text-6xl mb-10">
            Willkommen zu unvergesslichen Sommer-Events in der Lettebadi!
          </h2>
          <p class="text-2xl mb-5">
            Entdecken Sie zwei einzigartige Event Types, die sich über vier
            Monate im Sommer buchen lassen.
          </p>
        </div>

        <div class="text-primary grow flex-2 -mr-20 max-w-5xl">
          <Social class="w-full" />
        </div>
      </div>

      <ul class="text-2xl flex gap-10 max-w-screen-2xl mx-auto">
        <li
          v-for="(event, i) in data"
          :key="event.id"
          class="border-t-4 border-black pt-5 flex-1 flex flex-col justify-between"
        >
          <div>
            <h3 class="mb-10 text-3xl">{{ event.title }}</h3>

            <p class="mb-10">
              {{ dataContent.find((item) => item.slug === event.slug)?.text }}
            </p>
          </div>

          <div class="bg-white border border-black">
            <img
              :src="`/media/event-type-${i}.jpg`"
              alt="Moods Lettebadi"
              class="w-full"
            />

            <ul class="rounded-e-xl p-10">
              <li class="flex flex-col gap-2">
                <div class="flex justify-between">
                  <p class="flex gap-2">
                    <Clock />
                    <strong>Zeit</strong>
                  </p>

                  <p>
                    <span>9 bis 14 Uhr</span>
                  </p>
                </div>

                <div class="flex justify-between">
                  <p class="flex gap-2">
                    <HandCoins />
                    <strong>Preis</strong>
                  </p>

                  <p class="flex flex-col">
                    <span>CHF 4000.-</span>
                  </p>
                </div>

                <div class="flex justify-between">
                  <p class="flex gap-2">
                    <Users />
                    <strong>Kapa</strong>
                  </p>

                  <p>
                    <span>100 Personen</span>
                  </p>
                </div>
              </li>
            </ul>

            <UiButton
              :label="'Verfüfbarkeit prüfen'"
              :data-cal-link="`lettebadi/${event.slug}`"
              :data-cal-namespace="event.slug"
              data-cal-config='{"layout": "month_view"}'
              class="p-8"
            />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
