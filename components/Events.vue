<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Event {
  id: number;
  title: string;
  description: string;
  startTime?: string;
  endTime?: string;
  date?: string;
}

const events = ref<Event[]>([]);
const status = ref('loading');
const currentMonth = ref(new Date());
const daysInMonth = ref<Array<Date>>([]);

onMounted(async () => {
  try {
    const response = await $fetch('/api/calEvents');
    events.value = response as Event[];
    status.value = 'loaded';
    generateCalendarDays();

    // Initialize Cal.com embed after the component is mounted
    initCalEmbed();
  } catch (error) {
    console.error('Error fetching events:', error);
    status.value = 'error';
  }
});

function generateCalendarDays() {
  daysInMonth.value = [];
  const year = currentMonth.value.getFullYear();
  const month = currentMonth.value.getMonth();

  // Get the first day of the month
  const firstDay = new Date(year, month, 1);
  // Get the last day of the month
  const lastDay = new Date(year, month + 1, 0);

  // Add previous month days to fill the first week
  const firstDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
  for (let i = firstDayOfWeek; i > 0; i--) {
    const day = new Date(year, month, 1 - i);
    daysInMonth.value.push(day);
  }

  // Add all days of the current month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const day = new Date(year, month, i);
    daysInMonth.value.push(day);
  }

  // Add next month days to complete the last week
  const lastDayOfWeek = lastDay.getDay();
  for (let i = 1; i < 7 - lastDayOfWeek; i++) {
    const day = new Date(year, month + 1, i);
    daysInMonth.value.push(day);
  }
}

function previousMonth() {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() - 1,
    1,
  );
  generateCalendarDays();
}

function nextMonth() {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() + 1,
    1,
  );
  generateCalendarDays();
}

function formatDate(date: Date) {
  return date.toLocaleDateString('de-CH', { day: 'numeric' });
}

function getEventsForDay(date: Date) {
  // This is a simplified example - you'll need to adapt based on your actual event data structure
  return events.value.filter((event) => {
    if (event.date) {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    }
    return false;
  });
}

function isCurrentMonth(date: Date) {
  return date.getMonth() === currentMonth.value.getMonth();
}

// Add this function to initialize Cal.com
function initCalEmbed() {
  if (process.client) {
    // Only run on client-side
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    // Initialize Cal.com
    window.Cal('init', 'anfrage', { origin: 'https://cal.com' });

    // Set up the inline calendar
    window.Cal.ns.anfrage('inline', {
      elementOrSelector: '#my-cal-inline',
      config: { layout: 'month_view', theme: 'light' },
      calLink: 'lettebadi/anfrage',
    });

    // Set UI options
    window.Cal.ns.anfrage('ui', {
      theme: 'light',
      cssVarsPerTheme: {
        light: { 'cal-brand': '#131ae7' },
        dark: { 'cal-brand': '#131ae7' },
      },
      hideEventTypeDetails: true,
      layout: 'month_view',
    });
  }
}

// Add this to make TypeScript recognize the Cal property on window
declare global {
  interface Window {
    Cal: any;
  }
}
</script>

<template>
  <section class="flex flex-col gap-10 pt-20 xl:pt-32">
    <div
      class="mx-auto flex w-full max-w-screen-2xl flex-col items-start justify-center px-4 xl:flex-row xl:gap-32"
    >
      <div
        id="events"
        class="mb-10 flex max-w-screen-md flex-col px-4 xl:flex-row xl:pr-0"
      >
        <div>
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
            Foodangebot, wird Ihren Gästen ein unvergessliche Erlebnis bieten!
          </p>
          <p class="mb-5 text-2xl">
            Prüfen Sie auf unserem Eventkalender ob Ihr Wunschtermin noch
            verfügbar ist:
          </p>
        </div>
      </div>

      <div class="w-full px-4 xl:px-0">
        <div v-if="status === 'loading'" class="py-10 text-center">
          <p class="text-lg">Kalender wird geladen...</p>
        </div>

        <div
          v-else-if="status === 'error'"
          class="py-10 text-center text-destructive"
        >
          <p class="text-lg">
            Der Kalender konnte nicht geladen werden. Bitte versuchen Sie es
            später erneut.
          </p>
        </div>

        <!-- Replace your calendar with Cal.com embed -->
        <div v-else class="calendar-container w-full max-w-[500px]">
          <div
            class="h-full w-full overflow-scroll rounded border"
            id="my-cal-inline"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
