<script setup lang="ts">
import { LoaderCircle } from "lucide-vue-next";

const email = ref("");
const successMessage = ref("");
const errorMessage = ref("");
const subscriptionVisible = ref(true);
const status = ref("idle");

const subscribe = async () => {
  status.value = "loading";
  try {
    const response: any = await $fetch("/api/subscriberApi", {
      method: "POST",
      body: { email: email.value },
    });
    if (response.success) {
      subscriptionVisible.value = false;
      successMessage.value = `Die E-Mail <span class="text-primary">${response.data.email}</span> wurde erfolgreich registriert!`;
      errorMessage.value = "";
      status.value = "success";
    } else {
      throw new Error(response.message);
    }
  } catch (error: any) {
    errorMessage.value = error.message;
    successMessage.value = "";
    status.value = "error";
  }
};
</script>

<template>
  <div
    class="subscription-form flex flex-col gap-5 mt-10 max-w-screen-sm mx-auto mb-20"
  >
    <h2 class="text-6xl mb-10">
      <template v-if="subscriptionVisible"
        >Abonnieren Sie den Lettebadi Newsletter</template
      >
      <template v-else>Danke!</template>
    </h2>

    <div v-if="subscriptionVisible" class="flex gap-5 justify-between">
      <Input
        v-model="email"
        type="email"
        placeholder="Ihre E-Mail Adresse"
        class="h-14 text-2xl grow basis-2 transition-all duration-300 ease-out"
      />
      <div
        class="min-w-52 flex w-full flex-col items-center shrink basis-1 transition-all duration-300 ease-out"
      >
        <Button
          :class="{
            'p-0 text-2xl !w-14 rounded-full disabled:opacity-100':
              status === 'loading',
          }"
          :disabled="status === 'loading'"
          @click="subscribe"
          class="h-14 text-2xl w-full"
        >
          <span v-if="status !== 'loading'">Abonnieren</span>
          <LoaderCircle v-else class="animate-spin !w-8 !h-8" />
        </Button>
      </div>
    </div>

    <p v-if="successMessage" v-html="successMessage" class="mt-2 text-2xl"></p>
    <p v-if="errorMessage" class="text-red-500 mt-2 text-2xl">
      {{ errorMessage }}
    </p>
  </div>
</template>
