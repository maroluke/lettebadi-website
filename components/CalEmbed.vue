<script setup lang="ts">
import { onMounted } from "vue";
import { loadCalScript } from "~/utils/cal";

const { slug } = defineProps({
  slug: {
    type: String,
    default: "default",
  },
});

onMounted(() => {
  loadCalScript(slug, () => {
    const cal = window.Cal;
    if (cal.ns && cal.ns[slug]) {
      cal.ns[slug]("inline", {
        elementOrSelector: "#cal-embed",
        config: { layout: "month_view", theme: "dark" },
        calLink: `lettebadi/${slug}`,
      });

      cal.ns[slug]("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "column_view",
      });
    } else {
      console.error("Cal namespace not found for slug:", slug);
    }
  });
});
</script>

<template>
  <div id="cal-embed" style="width: 100%; height: 100%; overflow: scroll"></div>
</template>
