<script setup lang="ts">
import { UiMainTitle } from '#components';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/shadcn/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

const imagePaths = [
  {
    path: '/media/menu-1.jpg',
    title: 'Tagesmenu Lettebadi',
  },
  {
    path: '/media/menu-3.jpg',
    title: 'Tagesmenu Lettebadi',
  },
  {
    path: '/media/menu-2.jpg',
    title: 'Tagesmenu Lettebadi',
  },
  {
    path: '/media/menu-4.jpg',
    title: 'Tagesmenu Lettebadi',
  },
  {
    path: '/media/menu-5.jpg',
    title: 'Tagesmenu Lettebadi',
  },
];
</script>

<template>
  <div
    ref="target"
    id="service"
    class="mx-auto transition-all duration-300 ease-out 2xl:pt-32"
  >
    <section
      class="relative flex flex-col items-center gap-20 xl:flex-row xl:px-4"
    >
      <div class="z-10 w-full xl:w-[384px]">
        <Carousel
          :plugins="[
            Autoplay({
              delay: 2000,
            }),
            Fade(),
          ]"
          :opts="{
            align: 'end',
            loop: true,
          }"
        >
          <CarouselContent>
            <CarouselItem
              v-for="(image, index) in imagePaths"
              :key="index"
              class="flex max-h-[600px] items-center overflow-hidden xl:max-h-none xl:flex-none"
            >
              <NuxtImg
                :src="image.path"
                :alt="image.title"
                class="w-min snap-center drop-shadow-light transition-all duration-300 ease-out xl:relative xl:order-1 xl:block xl:w-auto xl:max-w-96 xl:rounded"
                lazy
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div class="z-20 order-1 max-w-screen-md px-4 xl:order-2 xl:px-0">
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
