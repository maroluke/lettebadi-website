<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  htmlAttrs: {
    class: 'scroll-smooth',
  },
});

const eventData = ref<any[]>([]);
const status = ref('loading');

async function fetchCalEventTypes() {
  try {
    // Call your own server endpoint to fetch the event types.
    const data = await $fetch('/api/eventTypes');

    eventData.value = (data.data as any[]).reverse();
  } catch (error) {
    console.error('Error fetching:', error);
  } finally {
    status.value = 'loaded';
  }
}

const activeSection = ref<string | null>(null);

onMounted(async () => {
  observeSections(['about', 'service', 'events', 'opening-hours'], (id) => {
    activeSection.value = id;
  });

  // Await the fetch so that eventData is populated before proceeding.
  await fetchCalEventTypes();

  // Create a <script> element to inject the Cal.com embed code.
  const script = document.createElement('script');
  script.type = 'text/javascript';

  // Build the initialization script for all event types.
  // The embed code is adapted from Cal.com's documentation.
  let initScript = `(function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  `;

  // Loop over each event type from the fetched data to initialize its namespace and UI.
  eventData.value.forEach((event) => {
    initScript += `
      Cal("init", "${event.slug}", { origin: "https://cal.com" });
      if (Cal.ns["${event.slug}"]) {
        Cal.ns["${event.slug}"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
      }
    `;
  });

  // Set the script content and add it to the document head.
  script.text = initScript;
  document.head.appendChild(script);
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
      <AppIntro :data="eventData" :status="status" />
    </div>

    <UiSubscribeForm />

    <Gastronomy />

    <Events :eventData="eventData" :status="status" />

    <!-- <EventTypes :data="eventData" :status="status" /> -->

    <OpeningHours />
  </div>

  <section
    class="fixed bottom-0 left-0 right-0 top-0 -z-10 h-full w-screen text-primary"
  >
    <WavesBg />
  </section>
</template>
