<script setup lang="ts">
const email = ref("");
const successMessage = ref("");
const errorMessage = ref("");
const subscriptionVisible = ref(true);

const subscribe = async () => {
  try {
    const response: any = await $fetch("/api/subscriberApi", {
      method: "POST",
      body: { email: email.value },
    });
    if (response.success) {
      subscriptionVisible.value = false;
      successMessage.value = `Die E-Mail <span class="text-green-500">${response.data.email}</span> wurde erfolgreich registriert!`;
      errorMessage.value = "";
    } else {
      throw new Error(response.message);
    }
  } catch (error: any) {
    errorMessage.value = error.message;
    successMessage.value = "";
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

    <div v-if="subscriptionVisible" class="flex gap-5">
      <Input
        v-model="email"
        type="email"
        placeholder="Ihre E-Mail Adresse"
        class="w-96 h-14 text-2xl"
      />
      <Button @click="subscribe" class="h-14 text-2xl">Abonnieren</Button>
    </div>

    <p v-if="successMessage" v-html="successMessage" class="mt-2 text-2xl"></p>
    <p v-if="errorMessage" class="text-red-500 mt-2 text-2xl">
      {{ errorMessage }}
    </p>
  </div>
</template>
