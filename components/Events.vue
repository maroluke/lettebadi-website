<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next';
import { useParallax, useScroll } from '@vueuse/core';

const target = ref<HTMLElement | null>(null);
const parallax = reactive(useParallax(target));
const { y } = useScroll(window);
const isPhoneScreen = ref(false);

const xyValue = ref(0);
const xTilt = ref(0);
const yyValue = ref(0);
const yRoll = ref(0);

const layer0 = computed(() => ({
  transform: `translateX(${
    y.value * xyValue.value + parallax.tilt * xTilt.value
  }px) translateY(${y.value * yyValue.value + parallax.roll * yRoll.value}px) scale(1)`,
}));

const { eventData, status } = defineProps({
  eventData: Array,
  status: String,
});

// Check if device has a phone screen size
const checkPhoneScreen = () => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  isPhoneScreen.value = mediaQuery.matches;
  mediaQuery.addEventListener('change', (e) => {
    isPhoneScreen.value = e.matches;
  });
};

onMounted(() => {
  checkPhoneScreen();
  xyValue.value = isPhoneScreen.value ? -0.03 : -0.05;
  xTilt.value = isPhoneScreen.value ? 10 : 20;
  yyValue.value = isPhoneScreen.value ? 0.0 : 0.0;
  yRoll.value = isPhoneScreen.value ? 0 : 0;
});

onUnmounted(() => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  mediaQuery.removeEventListener('change', (e) => {
    isPhoneScreen.value = e.matches;
  });
});
</script>

<template>
  <section ref="target" class="flex flex-col gap-10">
    <div
      class="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-10 xl:flex-row xl:gap-40"
    >
      <div
        id="events"
        class="order-2 mb-10 flex max-w-screen-md flex-col px-4 xl:order-1 xl:pl-28 xl:pr-0 xl:pt-40"
      >
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
                class="group w-full border-t-4 border-black pt-5 text-4xl uppercase transition-all hover:border-primary hover:text-primary xl:text-6xl"
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

      <div
        :style="layer0"
        class="order-1 -mr-36 w-full max-w-lg grow text-primary xl:order-2 xl:-mr-20 xl:max-w-5xl"
      >
        <Social class="w-full drop-shadow-light" />
      </div>
    </div>
  </section>
</template>
