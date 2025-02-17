<script setup lang="ts">
const eventData = ref<any[]>([]);
const status = ref("loading");

async function fetchCalEventTypes() {
  try {
    // Call your own server endpoint to fetch the event types.
    const data = await $fetch("/api/eventTypes");

    console.log("Fetched data:", data);

    eventData.value = (data.data as any[]).reverse();
  } catch (error) {
    console.error("Error fetching:", error);
  } finally {
    status.value = "loaded";
  }
}

onMounted(async () => {
  // Await the fetch so that eventData is populated before proceeding.
  await fetchCalEventTypes();

  // Create a <script> element to inject the Cal.com embed code.
  const script = document.createElement("script");
  script.type = "text/javascript";

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
  <div class="p-8 flex flex-col relative">
    <div class="fixed top-0 left-0 right-0 z-10 bg-white drop-shadow px-8">
      <section
        class="flex items-center justify-between shrink w-full max-w-screen-2xl mx-auto"
      >
        <Logo class="w-40" />
        <Nav />
      </section>
    </div>

    <div
      class="flex justify-between grow items-center w-full max-w-screen-2xl mx-auto min-h-screen"
    >
      <AppIntro :data="eventData" :status="status" />
    </div>

    <Menu />

    <AboutUs />

    <EventTypes :data="eventData" :status="status" />

    <OpeningHours />
  </div>

  <section
    class="fixed -z-10 top-0 bottom-0 left-0 right-0 w-screen h-screen opacity-30"
  >
    <WavesBg />
  </section>
</template>
