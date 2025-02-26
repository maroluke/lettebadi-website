<script setup lang="ts"></script>

<template>
  <div
    id="contact"
    class="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 pb-40 pt-10"
  >
    <section class="rounded-xl">
      <div class="flex items-center gap-8">
        <div class="max-w-screen-sm">
          <div>
            <p class="mb-5 text-2xl">
              Lettebadi GmbH<br />
              Lettensteg 10<br />
              8037 Zürich
            </p>

            <p class="mb-5 text-2xl">
              <strong>E-Mail:</strong>
              <a href="mailto:joachim@lettebadi.ch">joachim@lettebadi.ch</a>
            </p>

            <p class="mb-5 flex flex-col gap-4 text-2xl 2xl:gap-1">
              <RouterLink to="/agb">
                <UiButton label="AGB" class="text-sm font-normal opacity-50" />
              </RouterLink>

              <RouterLink to="/impressum">
                <UiButton
                  label="Impressum"
                  class="text-sm font-normal opacity-50"
                />
              </RouterLink>

              <RouterLink to="/privacy">
                <UiButton
                  label="Datenschutz"
                  class="text-sm font-normal opacity-50"
                />
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
