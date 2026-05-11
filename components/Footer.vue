<script setup lang="ts"></script>

<template>
  <div id="contact" class="flex flex-col gap-8">
    <section class="rounded-xl">
      <div class="flex items-center gap-8">
        <div class="max-w-screen-sm">
          <UiMainTitle title="Kontakt" />

          <div>
            <p class="mb-5 text-2xl">
              Lettenbadi GmbH<br />
              Lettensteg 10<br />
              8037 Zürich
            </p>

            <p class="mb-5 text-2xl">
              <strong>E-Mail:</strong>
              <a href="mailto:joachim@lettebadi.ch"> gastro@lettebadi.ch</a>
            </p>

            <!-- <p class="mb-5 flex flex-col gap-4 text-2xl xl:gap-1">
              <RouterLink to="/agb">
                <UiButton label="AGB" class="text-sm font-normal opacity-50" />
              </RouterLink>
            </p> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
