<script setup lang="ts">
import { ref, onMounted } from "vue";
// from lucide
import { MoveRight } from "lucide-vue-next";

const eventData = ref<any[]>([]);

async function fetchCalEventTypes() {
  try {
    // Call your own server endpoint to fetch the event types.
    const data = await $fetch("/api/eventTypes");

    console.log("Fetched data:", data);

    eventData.value = (data.data as any[]).reverse();
  } catch (error) {
    console.error("Error fetching:", error);
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
  <div class="p-8 flex flex-col gap-8 h-screen">
    <section
      class="flex items-center justify-between shrink w-full max-w-screen-2xl mx-auto"
    >
      <Logo class="w-40" />
      <Nav />
    </section>

    <div
      class="flex justify-between grow items-center w-full max-w-screen-2xl mx-auto"
    >
      <div class="flex flex-col gap-8 grow">
        <section class="rounded-xl">
          <h2 class="text-6xl mb-10">Buche die exklusive Location</h2>
          <p class="text-2xl max-w-96">
            Wähle zwischen den Veranstaltungsterminen für die Location
            Lettebadi. Klicke, um den Kalender anzuzeigen und eine Reservierung
            anzufordern.
          </p>
        </section>

        <section class="flex gap-20">
          <div
            v-for="event in eventData"
            :key="event.id"
            class="relative font-bold text-2xl flex flex-col gap-4"
          >
            {{ event.title }}

            <button
              :data-cal-link="`lettebadi/${event.slug}`"
              :data-cal-namespace="event.slug"
              data-cal-config='{"layout": "month_view"}'
              class="group font-bold text-lg text-start min-w-40 flex justify-between items-center"
            >
              Jetzt buchen
              <MoveRight
                class="w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </button>
          </div>
        </section>
      </div>

      <FloatingWomen1 class="h-full w-full" />
    </div>
  </div>

  <section
    class="fixed -z-10 top-0 bottom-0 left-0 right-0 w-screen h-screen opacity-30"
  >
    <Waves />
  </section>
</template>
