<script setup lang="ts"></script>

<template>
  <div
    id="opening-hours"
    class="flex flex-col gap-8 w-full max-w-screen-2xl mx-auto pb-40"
  >
    <section class="rounded-xl">
      <div class="flex gap-8 justify-around items-center">
        <div class="max-w-screen-sm">
          <h1 class="mb-20 uppercase tracking-wider inline-block text-lg">
            Öffnungszeiten und Kontakt
          </h1>
          <h2 class="text-6xl mb-10">
            Täglich von 09:00 bis 22:00 Uhr geöffnet
          </h2>

          <div>
            <p class="text-2xl mb-5">
              Bei Schlechtwetter schliesst die Badi um 14 Uhr.
            </p>
            <p class="text-2xl mb-5">
              <strong>Badisaison</strong><br />Von 15. Mai bis 15. September
              2025
            </p>
            <p class="text-2xl mb-5">
              <strong>Gastro Pop-Up im Herbst</strong><br />15. September bis
              31. Oktober.<br />
              <a href="#" class="underline">Lesen Sie hier mehr</a>.
            </p>
          </div>
        </div>

        <div class="grow text-primary">
          <FloatingWomen2 class="w-full h-full" />
        </div>
      </div>
    </section>
  </div>
</template>
