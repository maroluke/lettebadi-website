<script setup lang="ts">
import { UiMainTitle } from '#components';
import { useParallax, useScroll } from '@vueuse/core';

const target = ref<HTMLElement | null>(null);
const parallax = reactive(useParallax(target));
const { y } = useScroll(window);
const isPhoneScreen = ref(false);

const xValue = ref(0);
const yValue = ref(0);
const yValueRoll = ref(0);

const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * xValue.value}px) translateY(${
    y.value * yValue.value + parallax.roll * yValueRoll.value
  }px) scale(1)`,
}));

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
  xValue.value = -5;
  yValue.value = -0.075;
  yValueRoll.value = -30;
});

onUnmounted(() => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  mediaQuery.removeEventListener('change', (e) => {
    isPhoneScreen.value = e.matches;
  });
});
</script>

<template>
  <div
    ref="target"
    id="service"
    class="mx-auto transition-all duration-300 ease-out 2xl:pt-32"
  >
    <section
      class="relative flex flex-col items-center gap-20 px-4 2xl:flex-row 2xl:px-0"
    >
      <img
        :style="layer0"
        src="~/assets/media/menu.jpg"
        alt="Tagesmenu Lettebadi"
        class="absolute -right-10 top-0 z-10 order-2 hidden w-36 rounded drop-shadow-light transition-all duration-300 ease-out 2xl:relative 2xl:order-1 2xl:block 2xl:w-auto 2xl:max-w-96"
      />

      <div class="z-20 order-1 max-w-screen-md 2xl:order-2">
        <UiSectionTitle title="Gastronomie" />

        <UiMainTitle title="Nachhaltig<br />Saisonal<br />Regional" />

        <p class="mb-5 text-2xl">
          Ab dieser Saison wird das gesamte Food- und Beverage-Angebot in der
          Lettebadi auf Bio umgestellt. Dieser Schritt ist nicht nur Ausdruck
          eines nachhaltigen Denkens, sondern auch eine bewusste Abgrenzung vom
          «Badi-Food» der 70er bis 90er Jahre. Dies bedeutet jedoch nicht, dass
          wir vollständig auf klassische Produkte wie Pommes Frites verzichten –
          nur machen wir sie täglich frisch, und aus Zürcher Kartoffeln!
        </p>

        <p class="text-2xl">
          Das neue Küchenkonzept stammt aus der Feder des renommierten
          Slow-Food-Kochs Moritz Stiefel. «Mo», ist, zusammen mit seiner Frau
          Luigina, Betreiber des Hopfenkranzes in Luzern, wo er ein streng
          regionales und saisonales Konzept verfolgt. Dieses hat nicht nur seine
          Gäste, sondern auch den Guide Michelin und Gault Millau überzeugt.
          Moritz legt höchsten Wert darauf, ausschliesslich vorzügliche Produkte
          von Produzent*innen zu verwenden, die er persönlich kennt. Diese
          Philosophie prägt auch unser gastronomisches Angebot und garantiert
          Qualität auf höchstem Niveau.
        </p>
      </div>
    </section>
  </div>
</template>
