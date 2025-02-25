<script setup lang="ts">
import { useParallax, useScroll } from "@vueuse/core";

const target = ref<HTMLElement | null>(null);
const parallax = reactive(useParallax(target));
const { y } = useScroll(window);

const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * -5}px) translateY(${
    y.value * -0.05 + parallax.roll * -5
  }px) scale(1)`,
}));
</script>

<template>
  <div
    ref="target"
    id="service"
    class="mx-auto pt-32 transition-all duration-300 ease-out"
  >
    <section class="flex gap-20 items-center">
      <img
        :style="layer0"
        src="~/assets/media/menu.jpg"
        alt="Tagesmenu Lettebadi"
        class="max-w-96 rounded shadow-lg transition-all duration-300 ease-out"
      />

      <div class="max-w-screen-md">
        <UiSectionTitle title="Gastronomie" />
        <h2 class="text-6xl mb-10">Nachhaltig<br />Saisonal<br />Regional</h2>

        <p class="text-2xl mb-5">
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
