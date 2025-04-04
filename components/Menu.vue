<script setup lang="ts"></script>

<template>
  <div id="events" class="mx-auto flex grow flex-col gap-8 pb-32">
    <section class="flex items-center gap-20 rounded-xl">
      <img
        src="~/assets/media/menu.jpg"
        alt="Tagesmenu Lettebadi"
        class="max-w-96 rounded-full shadow-lg"
      />

      <div class="max-w-screen-md">
        <h2 class="mb-10 text-6xl">
          Wir präsentieren das Tagesmenü von heute:
        </h2>
        <p class="mb-5 text-2xl">
          Genießen Sie heute ein köstliches Menü aus frischen Zutaten.
        </p>

        <p class="text-2xl">
          Unser Küchenchef hat heute ein besonderes Menü für Sie
          zusammengestellt. Lassen Sie sich von den saisonalen Zutaten und den
          kreativen Kombinationen überraschen. Wir freuen uns auf Ihren Besuch!
        </p>

        <div class="mt-20 flex flex-col gap-8">
          <div class="flex gap-10">
            <div class="flex flex-col gap-8">
              <div>
                <h3 class="text-3xl font-normal">Vorspeise</h3>
                <p class="text-2xl">Gazpacho mit frischen Kräutern</p>
              </div>
              <div>
                <h3 class="text-3xl font-normal">Hauptspeise</h3>
                <p class="text-2xl">
                  Gebratene Limmattforelle mit Zitronenbutter
                </p>
              </div>
              <div>
                <h3 class="text-3xl font-normal">Dessert</h3>
                <p class="text-2xl">Erdbeer-Tiramisu mit Minze</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
