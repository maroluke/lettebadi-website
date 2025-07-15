<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  htmlAttrs: {
    class: 'scroll-smooth',
  },
});

const activeSection = ref<string | null>(null);

onMounted(async () => {
  observeSections(['about', 'service', 'events', 'opening-hours'], (id) => {
    activeSection.value = id;
  });
});
</script>

<template>
  <div class="relative flex flex-col overflow-hidden">
    <div class="fixed left-0 right-0 top-0 z-50 xl:p-8">
      <section
        class="flex w-full shrink items-center justify-between rounded bg-white px-4 drop-shadow-lg xl:px-20 xl:drop-shadow-2xl"
      >
        <Logo class="w-24 py-2 xl:w-36 xl:py-5" />
        <Nav :activeSection="activeSection" />
      </section>
    </div>

    <div id="about" class="grow">
      <AppIntro />
    </div>

    <UiSubscribeForm />

    <Gastronomy />

    <Events />

    <Reservation />

    <!-- <EventTypes :data="eventData" :status="status" /> -->

    <OpeningHours />
  </div>

  <section
    class="fixed bottom-0 left-0 right-0 top-0 -z-10 h-full w-screen text-primary"
  >
    <WavesBg />
  </section>
</template>
