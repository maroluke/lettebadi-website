<script setup lang="ts">
import { ref, onMounted } from 'vue';
</script>

<template>
  <section class="flex flex-col gap-10 pt-20 xl:pt-32">
    <div
      class="mx-auto flex w-full max-w-screen-2xl flex-col items-start justify-center xl:flex-row xl:gap-32 xl:px-4"
    >
      <div
        id="reservation"
        class="mb-10 flex max-w-screen-md flex-col px-4 xl:pr-0"
      >
        <div>
          <UiSectionTitle title="Reservation" />
          <UiMainTitle title="Ein unvergesslichen Abend in der Lettebadi" />
          <p class="mb-5 text-2xl">
            Reservieren Sie Ihren Abend in der Lettebadi. Wir freuen uns von
            Ihnen zu hören!
          </p>
        </div>

        <!-- Button -->
        <Button class="h-14 w-full text-2xl">
          <a
            href="https://mylocalina.ch/widget/?id=4de13c45-f256-4e2d-b8b2-7dd009e3b483"
            target="_blank"
            alt="Jetzt Tisch reservieren"
            >Jetzt Tisch reservieren</a
          >
        </Button>
      </div>
    </div>
  </section>
</template>
