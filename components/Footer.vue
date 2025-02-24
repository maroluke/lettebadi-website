<script setup lang="ts"></script>

<template>
  <div
    id="contact"
    class="flex flex-col gap-8 w-full max-w-screen-2xl mx-auto pt-10 pb-40"
  >
    <section class="rounded-xl">
      <div class="flex gap-8 items-center">
        <div class="max-w-screen-sm">
          <div>
            <p class="text-2xl mb-5">
              Lettebadi GmbH<br />
              Lettensteg 10<br />
              8037 Zürich
            </p>

            <p class="text-2xl mb-5">
              <strong>Telefon:</strong> +41 44 123 45 67<br />
              <strong>E-Mail:</strong>
              <a href="mailto:joachim@lettebadi.ch"> joachim@lettebadi.ch</a>
            </p>

            <p class="text-2xl mb-5 flex flex-col gap-1">
              <RouterLink to="/impressum">
                <UiButton
                  label="Impressum"
                  class="opacity-50 text-sm font-normal"
                />
              </RouterLink>

              <RouterLink to="/agb">
                <UiButton label="AGB" class="opacity-50 text-sm font-normal" />
              </RouterLink>

              <RouterLink to="/privacy">
                <UiButton
                  label="Datenschutz"
                  class="opacity-50 text-sm font-normal"
                />
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
