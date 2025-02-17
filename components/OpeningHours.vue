<script setup lang="ts"></script>

<template>
  <div
    id="opening-hours"
    class="flex flex-col gap-8 w-full max-w-screen-2xl mx-auto pb-40"
  >
    <section class="rounded-xl">
      <div class="flex gap-8 justify-around items-center">
        <div class="max-w-screen-sm">
          <h2 class="text-6xl mb-10">
            Täglich von 10:00 bis 22:00 Uhr geöffnet
          </h2>

          <div>
            <p class="text-2xl mb-5">
              Zwischen 1. Juni und 30. September 2025 lädt Sie die Lettebadi
              herzlich ein. Unser Team steht täglich für Sie bereit und freut
              sich auf Ihren Besuch.
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
